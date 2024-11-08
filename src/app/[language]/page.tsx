// src/app/[language]/page.tsx

'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation'; // For dynamic routing in Next.js 13
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { ChevronRight } from 'lucide-react';

// Import the chapters array
import chapters from '@/data/chapters';

// Define the Chapter type
type Chapter = {
  language: string;
  title: string;
  content: string;
  id: number;
  initialCode: string;
};

export default function LanguageTableOfContents() {
  const params = useParams();
  const language = Array.isArray(params?.language) ? params.language[0].toLowerCase() : params?.language?.toLowerCase();

  // Filter chapters based on the selected language
  const languageChapters = chapters.filter((chapter: Chapter) => chapter.language.toLowerCase() === language);

  // Function to get a brief excerpt from the chapter content
  const getExcerpt = (content: string, maxLength: number = 150) => {
    const stripped = content.replace(/<[^>]+>/g, '');
    return stripped.length > maxLength ? stripped.substr(0, maxLength) + '...' : stripped;
  };

  return (
    <div className='container mx-auto px-4 py-8 max-w-6xl'>
      <h1 className='text-4xl font-bold mb-6 text-center'>
        {language ? `${language.charAt(0).toUpperCase() + language.slice(1)} Documentation` : 'Documentation'}
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {languageChapters.map((chapter: Chapter) => (
          <Link href={`/${language}/${chapter.title.toLowerCase().replace(/\s+/g, '-')}`} key={chapter.id}>
            <Card className='h-full transition-all duration-300 hover:shadow-lg'>
              <CardHeader>
                <CardTitle className='flex items-center justify-between'>
                  {chapter.title}
                  {/* <Badge variant='secondary'>{chapter.id}</Badge> */}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{getExcerpt(chapter.content)}</CardDescription>
              </CardContent>
              {/* <div className='absolute bottom-4 right-4'>
                <ChevronRight className='h-6 w-6 text-muted-foreground' />
              </div> */}
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
