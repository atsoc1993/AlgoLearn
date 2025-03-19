import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Rocket } from 'lucide-react';

export default function ComingSoonPage() {
  return (
    <div className='container mx-auto px-4 py-16 flex items-center justify-center'>
      <Card className='w-full max-w-md'>
        <CardHeader className='text-center'>
          <Rocket className='mx-auto h-12 w-12 text-primary mb-4' />
          <CardTitle className='text-2xl font-bold'>Coming Soon</CardTitle>
        </CardHeader>
        <CardContent className='text-center'>
          <p className='text-muted-foreground mb-6'>
            We&apos;re excited to bring you this new feature. Stay tuned for updates!
          </p>
          <Button asChild>
            <Link href='/'>Return to Home</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
