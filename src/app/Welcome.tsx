import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Code, Book, Zap } from 'lucide-react';

export default function Welcome() {
  return (
    <div className='container mx-auto px-4 py-12 max-w-6xl'>
      <div className='text-center mb-12'>
        <h1 className='text-4xl font-bold tracking-tight lg:text-5xl mb-4'>
          Welcome to the AlgoLearn Developer Portal
        </h1>
        <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
          Explore our documentation and tutorials to start building powerful decentralized applications with Algorand
          smart contracts.
        </p>
      </div>

      <Card className='mb-12'>
        <CardHeader>
          <CardTitle>Why Algorand Smart Contracts?</CardTitle>
          <CardDescription>
            Algorand smart contracts offer a unique blend of speed, security, and scalability for your blockchain
            applications.
          </CardDescription>
        </CardHeader>
        <CardContent className='grid gap-4'>
          <div className='flex items-center gap-4'>
            <Zap className='h-6 w-6 text-primary' />
            <div>
              <h3 className='font-semibold'>Lightning-Fast Transactions</h3>
              <p className='text-sm text-muted-foreground'>
                Experience instant finality with Algorand&apos;s Pure Proof-of-Stake consensus.
              </p>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <Code className='h-6 w-6 text-primary' />
            <div>
              <h3 className='font-semibold'>Easy to Learn and Use</h3>
              <p className='text-sm text-muted-foreground'>
                Write smart contracts in Python - a language everyone knows and loves.
              </p>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <Book className='h-6 w-6 text-primary' />
            <div>
              <h3 className='font-semibold'>Comprehensive Documentation</h3>
              <p id='SDK' className='text-sm text-muted-foreground'>
                Access detailed guides, tutorials, and API references to support your development journey.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className='grid md:grid-cols-3 gap-6 mb-12'>
        <Card>
          <CardHeader>
            <CardTitle>Python</CardTitle>
            <CardDescription>Build with Python SDK</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href='/python' passHref>
              <Button variant='outline' className='w-full'>
                Explore Python Docs
                <ArrowRight className='ml-2 h-4 w-4' />
              </Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>JavaScript</CardTitle>
            <CardDescription>Develop with JavaScript SDK</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href='/javascript' passHref>
              <Button variant='outline' className='w-full'>
                Explore JavaScript Docs
                <ArrowRight className='ml-2 h-4 w-4' />
              </Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Go</CardTitle>
            <CardDescription>Create with Go SDK</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href='/go' passHref>
              <Button variant='outline' className='w-full'>
                Explore Go Docs
                <ArrowRight className='ml-2 h-4 w-4' />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <div id='SDKs' className='text-center'>
        <h2 className='text-2xl font-bold mb-4'>Ready to dive in?</h2>
        <p className='text-muted-foreground mb-6'>
          Start your journey with Algorand smart contracts today and build the decentralized applications of tomorrow.
        </p>

        <Link href={`/python/installation-and-setup`} passHref>
          <Button size='lg'>
            Get Started
            <ArrowRight className='ml-2 h-5 w-5' />
          </Button>
        </Link>
      </div>
    </div>
  );
}
