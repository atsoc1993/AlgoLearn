import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface SDK {
  name: string;
  description: string;
  language: string;
  url: string;
}

const sdks: SDK[] = [
  {
    name: 'py-algorand-sdk',
    description: 'Algorand Python SDK',
    language: 'Python',
    url: 'https://github.com/algorand/py-algorand-sdk',
  },
  {
    name: 'js-algorand-sdk',
    description: 'Algorand JavaScript SDK',
    language: 'JavaScript',
    url: 'https://github.com/algorand/js-algorand-sdk',
  },
  {
    name: 'java-algorand-sdk',
    description: 'Algorand Java SDK',
    language: 'Java',
    url: 'https://github.com/algorand/java-algorand-sdk',
  },
  {
    name: 'go-algorand-sdk',
    description: 'Algorand Go SDK',
    language: 'Go',
    url: 'https://github.com/algorand/go-algorand-sdk',
  },
];

export default function SDKsPage() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-4xl font-bold mb-8'>Algorand SDKs</h1>
      <p className='text-xl mb-8'>
        Explore the various Software Development Kits (SDKs) available for Algorand development across different
        programming languages.
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {sdks.map((sdk) => (
          <Card key={sdk.name}>
            <CardHeader>
              <CardTitle>{sdk.name}</CardTitle>
              <CardDescription>{sdk.language}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className='mb-4'>{sdk.description}</p>
              <Button asChild>
                <Link href={sdk.url} target='_blank' rel='noopener noreferrer'>
                  View on GitHub
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
