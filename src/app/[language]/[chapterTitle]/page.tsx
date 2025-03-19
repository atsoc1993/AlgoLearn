'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import axios from 'axios';
import { chapters } from '@/data/chapters';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ChevronRight, ChevronLeft, Menu, X } from 'lucide-react';
import { Loader2 } from 'lucide-react';

export default function ChapterPage() {
  const params = useParams();
  const router = useRouter();

  const language = params?.language as string;
  const chapterTitle = params?.chapterTitle as string;

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const languageChapters = chapters.filter((ch) => ch.language.toLowerCase() === language?.toLowerCase());
  const chapterIndex = languageChapters.findIndex(
    (ch) => ch.title.toLowerCase().replace(/\s+/g, '-') === chapterTitle?.toLowerCase()
  );

  const chapter = languageChapters[chapterIndex];
  const [code, setCode] = useState(chapter ? chapter.initialCode : '');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (chapter) {
      setCode(chapter.initialCode);
      setOutput('');
    }
  }, [chapter]);

  interface CodeExecutionResponse {
    output: string; // The output from the code execution
    error?: string; // Optional error message
  }

  const runCode = async (code: string, language: string): Promise<string> => {
    setIsRunning(true);
    try {
      if (typeof code !== 'string' || typeof language !== 'string') {
        throw new Error('Invalid input: code and language must be strings.');
      }

      console.log('Executing code with payload:', { code, language });

      const response = await axios.post<CodeExecutionResponse>('/api/code-runner', { code, language });
      console.log('Response:', response.data);
      setOutput(response.data.output);
      return response.data.output;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error message:', error.message);
        throw new Error(error.message);
      } else {
        console.error('Unknown error:', error);
        throw new Error('An unexpected error occurred.');
      }
    } finally {
      setIsRunning(false); // Always stop the loading animation
    }
  };

  const handleRunCode = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent default behavior
    if (chapter.output) {
      setOutput(chapter.output); // Use predefined output
    } else {
      runCode(code, language); // Execute code
    }
  };

  const goToNextChapter = () => {
    if (chapterIndex < languageChapters.length - 1) {
      const nextChapter = languageChapters[chapterIndex + 1];
      const nextChapterUrl = `/${language.toLowerCase()}/${nextChapter.title.toLowerCase().replace(/\s+/g, '-')}`;
      router.push(nextChapterUrl);
    }
  };

  if (!chapter) {
    return <div className='flex items-center justify-center h-screen'>Chapter not found</div>;
  }

  const isEditable = chapter.editable !== false;
  const hasPredefinedOutput = !!chapter.output;

  return (
    <div className='flex h-[calc(100vh-129px)] overflow-hidden relative'>
      {/* <div className='flex overflow-hidden relative'> */}
      {/* Sidebar */}
      <aside
        className={`absolute top-0 left-0 h-full bg-background border-r w-64 transition-transform duration-300 ease-in-out z-40 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:relative md:translate-x-0 md:w-64 md:block`}
      >
        {/* <div className='p-0 ml-20 mt-10'> */}
        <div className='p-0'>
          <Button
            variant='ghost'
            className='md:hidden p-0'
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            aria-label='Toggle sidebar'
          >
            <X className='' />
          </Button>
          <h2 className='text-lg font-semibold mb-4'>
            {language.charAt(0).toUpperCase() + language.slice(1)} Chapters
          </h2>

          <ScrollArea className='h-[calc(100vh-12rem)]'>
            {/* <ScrollArea className='h-screen'> */}
            {/* <ScrollArea> */}
            <div className='pr-4'>
              {languageChapters.map((ch, index) => (
                <Link
                  href={`/${language.toLowerCase()}/${ch.title.toLowerCase().replace(/\s+/g, '-')}`}
                  key={ch.id}
                  className={`block py-2 px-4 rounded-md transition-colors ${
                    index === chapterIndex ? 'bg-primary/10 text-primary' : 'hover:bg-muted'
                  }`}
                >
                  {ch.title}
                </Link>
              ))}
            </div>
          </ScrollArea>
        </div>
      </aside>

      {/* Background Overlay */}
      {/* {isSidebarOpen && (
        <div className='fixed inset-0 bg-black opacity-50 z-30 md:hidden' onClick={() => setIsSidebarOpen(false)}></div>
      )} */}

      {/* Main content */}
      <div className='flex-grow overflow-auto'>
        <div className='container mx-auto px-0 sm:px-8 py-0 max-w-4xl'>
          <Button
            variant='ghost'
            className='md:hidden p-0'
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            aria-label='Toggle sidebar'
          >
            <Menu className='' />
          </Button>

          <h1 className='text-4xl font-bold mb-6'>{chapter.title}</h1>
          <Card className='mb-8 border-0 sm:border'>
            <CardContent className='prose dark:prose-invert max-w-none pt-6 text-foreground dark:text-foreground p-0 sm:p-8'>
              <div dangerouslySetInnerHTML={{ __html: chapter.content }}></div>
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
                className={`font-mono h-64 mb-4 ${isEditable ? '' : 'bg-gray-100 cursor-not-allowed'}`}
                spellCheck='false'
                readOnly={!isEditable} // Make textarea read-only if not editable
              />

              {/* <Button onClick={handleRunCode}>Run</Button> */}
              <Button onClick={handleRunCode} disabled={isRunning}>
                {isRunning ? (
                  <>
                    <Loader2 className='h-4 w-4 animate-spin' />
                    Running
                  </>
                ) : hasPredefinedOutput ? (
                  'Show Output'
                ) : (
                  'Run'
                )}
              </Button>
            </CardContent>
            {output && (
              <CardFooter>
                <pre className='border bg-card text-card-foreground dark:bg-card-dark dark:text-card-foreground p-4 rounded-md w-full overflow-x-auto'>
                  {output}
                </pre>
              </CardFooter>
            )}
          </Card>
          <div className='flex justify-between'>
            {chapterIndex > 0 && (
              <Link
                href={`/${language.toLowerCase()}/${languageChapters[chapterIndex - 1].title
                  .toLowerCase()
                  .replace(/\s+/g, '-')}`}
              >
                <Button variant='outline' className='transition-all duration-300 ease-in-out transform hover:scale-105'>
                  <ChevronLeft className='mr-2 h-4 w-4' /> Previous Chapter
                </Button>
              </Link>
            )}
            {chapterIndex < languageChapters.length - 1 && (
              <Button
                onClick={goToNextChapter}
                className='transition-all duration-300 ease-in-out transform hover:scale-105 ml-auto'
              >
                Next Chapter <ChevronRight className='ml-2 h-4 w-4' />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
