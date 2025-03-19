// pages/api/code-runner.ts
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  output?: string;
  error?: string;
};

// Replace with your VM's external IP
const BACKEND_API_URL = process.env.BACKEND_API_URL || 'http://35.226.166.220:3001/run-code';

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  console.log('Request body:', req.body); // Log the request body

  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  const { code, language } = req.body;

  if (!code || !language) {
    console.error('Missing code or language:', { code, language });
    return res.status(400).json({ error: 'Code and language are required.' });
  }

  try {
    // Forward the request to the backend API on GCP VM
    const response = await fetch(BACKEND_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code, language }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error from backend API:', errorData);
      return res.status(response.status).json({ error: errorData.error || 'Error executing code.' });
    }

    const data = await response.json();
    console.log('Execution output:', data.output);
    return res.status(200).json({ output: data.output });
  } catch (error: unknown) {
    // Changed from 'any' to 'unknown'
    console.error('Unhandled error:', error);

    // Optional: Provide more detailed error information if it's an instance of Error
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message });
    }

    // Fallback error message
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
