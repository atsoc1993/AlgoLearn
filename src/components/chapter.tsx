'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import chapters from '@/data/chapters';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { ChevronRight } from 'lucide-react';

export default function Chapter() {
  const router = useRouter();
  const { language, chapterTitle } = router.query;

  const chapterIndex = chapters.findIndex(
    (ch) => ch.language.toLowerCase() === language && ch.title.toLowerCase().replace(/\s+/g, '-') === chapterTitle
  );

  const chapter = chapters[chapterIndex];
  const [code, setCode] = useState(chapter ? chapter.initialCode : '');
  const [output, setOutput] = useState('');

  useEffect(() => {
    if (chapter) {
      setCode(chapter.initialCode);
      setOutput('');
    }
  }, [chapter, language]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [chapter, language]);

  const runCode = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/run', {
        code,
        lang: language,
      });
      setOutput(response.data.output);
    } catch (error) {
      setOutput('Error running code');
      console.error(error);
    }
  };

  const goToNextChapter = () => {
    if (chapterIndex < chapters.length - 1) {
      const nextChapter = chapters[chapterIndex + 1];
      const nextChapterUrl = `/${nextChapter.language.toLowerCase()}/${nextChapter.title
        .toLowerCase()
        .replace(/\s+/g, '-')}`;
      router.push(nextChapterUrl);
    }
  };

  if (!chapter) {
    return <div className='flex items-center justify-center h-screen'>Chapter not found</div>;
  }

  return (
    <div className='container mx-auto px-4 py-8 max-w-4xl'>
      <h1 className='text-4xl font-bold mb-6'>{chapter.title}</h1>
      <Card className='mb-8'>
        <CardContent className='prose max-w-none pt-6'>
          <div
            dangerouslySetInnerHTML={{
              __html: chapter.content,
            }}
          ></div>
        </CardContent>
      </Card>
      <Card className='mb-8'>
        <CardHeader>
          <CardTitle>Code Editor</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder={`Write your ${language} code here...`}
            className='font-mono h-64 mb-4'
            spellCheck='false'
          />
          <Button onClick={runCode}>Run Code</Button>
        </CardContent>
        {output && (
          <CardFooter>
            <pre className='bg-gray-100 p-4 rounded-md w-full overflow-x-auto'>{output}</pre>
          </CardFooter>
        )}
      </Card>
      {chapterIndex < chapters.length - 1 && (
        <div className='flex justify-end'>
          <Button
            onClick={goToNextChapter}
            className='transition-all duration-300 ease-in-out transform hover:scale-105'
          >
            Next Chapter <ChevronRight className='ml-2 h-4 w-4' />
          </Button>
        </div>
      )}
    </div>
  );
}
