'use client';

import React, { ReactNode, useState, useMemo, memo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Moon, Sun, ChevronDown, Search, BookCheck, FileText, Github, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { chapters, Chapter } from '@/data/chapters';
import '@/styles/globals.css';
import Image from 'next/image';

// Memoized DropdownMenuItem
const MemoizedDropdownMenuItem = memo(DropdownMenuItem);

export default function Layout({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const groupedChapters = useMemo(() => {
    return chapters.reduce((acc, chapter) => {
      if (!acc[chapter.language]) {
        acc[chapter.language] = [];
      }
      acc[chapter.language].push(chapter);
      return acc;
    }, {} as Record<string, Chapter[]>);
  }, [chapters]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  return (
    <html lang='en' className={`${darkMode ? 'dark' : ''} h-full`}>
      <head>
        <title>AlgoLearn</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </head>
      <body className='min-h-screen bg-background text-foreground'>
        <nav className='sticky top-0 z-50 bg-background border-b'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex items-center justify-between h-16'>
              <Link href='/' className='flex-shrink-0'>
                <Image
                  src={darkMode ? '/images/AlgolearnWhite.png' : '/images/AlgolearnBlack.png'}
                  alt='AlgoLearn Logo'
                  width={150}
                  height={150}
                  priority
                />
              </Link>
              <div className='hidden md:block ml-10'>
                <div className='flex items-baseline space-x-4'>
                  <form onSubmit={handleSearch} className='relative'>
                    <Input
                      type='search'
                      placeholder='Search docs...'
                      className='w-64 pl-10'
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground' />
                    <Button type='submit' className='sr-only'>
                      Search
                    </Button>
                  </form>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant='ghost'>
                        Tutorials <ChevronDown className='ml-1 h-4 w-4' />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {Object.keys(groupedChapters).map((language) => (
                        <MemoizedDropdownMenuItem asChild key={language}>
                          <Link href={`/${language.toLowerCase()}`} className='block w-full h-full cursor-pointer'>
                            {language}
                          </Link>
                        </MemoizedDropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant='ghost'>
                        Docs <ChevronDown className='ml-1 h-4 w-4' />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <MemoizedDropdownMenuItem asChild>
                        <Link href='/python/installation-and-setup' className='block w-full h-full cursor-pointer'>
                          Getting Started
                        </Link>
                      </MemoizedDropdownMenuItem>
                      <MemoizedDropdownMenuItem asChild>
                        <Link href='https://nodely.io/docs/free/start' className='block w-full h-full cursor-pointer'>
                          API Reference
                        </Link>
                      </MemoizedDropdownMenuItem>
                      <MemoizedDropdownMenuItem asChild>
                        <Link href='/sdks' className='block w-full h-full cursor-pointer'>
                          SDKs
                        </Link>
                      </MemoizedDropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>

              {/* MOBILE NAV ELEMENTS */}
              <div className='space-x-0 flex'>
                <div className='md:hidden'>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant='ghost' size='icon' aria-label='Tutorials'>
                        <BookCheck size={1} strokeWidth={2.5} />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {Object.keys(groupedChapters).map((language) => (
                        <MemoizedDropdownMenuItem asChild key={language}>
                          <Link
                            href={`/${language.toLowerCase()}`}
                            className='block w-full h-full cursor-pointer active:bg-gray-200'
                          >
                            {language}
                          </Link>
                        </MemoizedDropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant='ghost' size='icon' aria-label='Docs'>
                        <FileText size={10} strokeWidth={2.5} />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <MemoizedDropdownMenuItem asChild>
                        <Link
                          href='/python/installation-and-setup'
                          className='block w-full h-full cursor-pointer active:bg-gray-200'
                        >
                          Getting Started
                        </Link>
                      </MemoizedDropdownMenuItem>
                      <MemoizedDropdownMenuItem asChild>
                        <Link
                          href='https://nodely.io/docs/free/start'
                          className='block w-full h-full cursor-pointer active:bg-gray-200'
                        >
                          API Reference
                        </Link>
                      </MemoizedDropdownMenuItem>
                      <MemoizedDropdownMenuItem asChild>
                        <Link href='/sdks' className='block w-full h-full cursor-pointer active:bg-gray-200'>
                          SDKs
                        </Link>
                      </MemoizedDropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <Button
                  variant='ghost'
                  size='icon'
                  onClick={() => setDarkMode(!darkMode)}
                  aria-label='Toggle dark mode'
                  aria-pressed={darkMode}
                >
                  {darkMode ? <Sun size={10} strokeWidth={2.5} /> : <Moon size={10} strokeWidth={2.5} />}
                </Button>
              </div>
            </div>
          </div>
        </nav>

        <main className='container mx-auto px-4 sm:px-6 lg:px-8 py-8'>{children}</main>

        {/* FOOTER SECTION */}
        <footer className='bg-background border-t mt-auto'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-8'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
              <div>
                <h3 className='text-lg font-semibold mb-4'>About</h3>
                <p className='text-sm text-muted-foreground'>
                  AlgoLearn is your go-to resource for learning about Algorand Smart Contract development.
                </p>
              </div>
              <div>
                <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
                <ul className='space-y-2'>
                  <li>
                    <Link href='/python/installation-and-setup' className='text-sm hover:underline'>
                      Getting Started
                    </Link>
                  </li>
                  <li>
                    <Link href='https://nodely.io/docs/free/start' className='text-sm hover:underline'>
                      API Reference
                    </Link>
                  </li>
                  <li>
                    <Link href='/sdks' className='text-sm hover:underline'>
                      SDKs
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className='text-lg font-semibold mb-4'>Community</h3>
                <ul className='space-y-2'>
                  <li>
                    <Link href='/coming-soon' className='text-sm hover:underline'>
                      Forum
                    </Link>
                  </li>
                  <li>
                    <Link href='/coming-soon' className='text-sm hover:underline'>
                      Discord
                    </Link>
                  </li>
                  <li>
                    <Link href='/coming-soon' className='text-sm hover:underline'>
                      Events
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className='text-lg font-semibold mb-4'>Follow Us</h3>
                <div className='flex space-x-4'>
                  <Link href='https://x.com/atsoc93' className='text-foreground hover:text-primary'>
                    <Twitter size={24} />
                    <span className='sr-only'>Twitter</span>
                  </Link>
                  <Link href='https://github.com/atsoc1993/' className='text-foreground hover:text-primary'>
                    <Github size={24} />
                    <span className='sr-only'>GitHub</span>
                  </Link>
                  <Link href='/coming-soon' className='text-foreground hover:text-primary'>
                    <Linkedin size={24} />
                    <span className='sr-only'>LinkedIn</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className='mt-8 pt-8 border-t text-center'>
              <p className='text-sm text-muted-foreground'>
                © {new Date().getFullYear()} AlgoLearn. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
