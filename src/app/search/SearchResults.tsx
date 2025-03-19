'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardDescription, CardTitle } from '@/components/ui/card';
import { chapters, Chapter } from '../../data/chapters';

export default function SearchResults() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Chapter[]>([]);

  const getExcerpt = (content: string, maxLength: number = 150) => {
    const stripped = content.replace(/<[^>]+>/g, '');
    return stripped.length > maxLength ? stripped.substr(0, maxLength) + '...' : stripped;
  };

  useEffect(() => {
    const currentQuery = searchParams?.get('q') ?? '';
    setQuery(currentQuery);

    if (currentQuery) {
      const results = chapters.filter(
        (chapter) =>
          chapter.title.toLowerCase().includes(currentQuery.toLowerCase()) ||
          chapter.content.toLowerCase().includes(currentQuery.toLowerCase()) ||
          chapter.initialCode.toLowerCase().includes(currentQuery.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchParams]);

  return (
    <>
      <h2 className='text-2xl font-semibold mb-4'>Results for &quot;{query}&quot;</h2>
      {searchResults.length > 0 ? (
        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {searchResults.map((result) => (
            <Link
              href={`/${result.language.toLowerCase()}/${result.title.toLowerCase().replace(/\s+/g, '-')}`}
              key={result.id}
              className='block hover:no-underline'
            >
              <Card className='h-full transition-shadow hover:shadow-md'>
                <CardHeader>
                  <CardTitle>{result.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-sm mb-4'>Language: {result.language}</p>
                  <CardDescription className='overflow-hidden text-ellipsis'>
                    {getExcerpt(result.content)}
                  </CardDescription>
                  <Button className='mt-4'>View Chapter</Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <p className='text-center text-muted-foreground'>No results found for &quot;{query}&quot;</p>
      )}
    </>
  );
}
