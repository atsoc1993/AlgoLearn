// /pages/api/code-runner.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { executeJavaScript } from '@/utils/executeJavaScript';
import { executePython } from '@/utils/executePython';
import { executeGo } from '@/utils/executeGo';

type Data = {
  output?: string;
  error?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  const { code, language } = req.body;

  if (!code || !language) {
    return res.status(400).json({ error: 'Code and language are required.' });
  }

  try {
    let output: string;

    switch (language.toLowerCase()) {
      case 'javascript':
        output = await executeJavaScript(code);
        break;
      case 'python':
        output = await executePython(code);
        break;
      case 'go':
        output = await executeGo(code);
        break;
      default:
        return res.status(400).json({ error: 'Unsupported language.' });
    }

    return res.status(200).json({ output });
  } catch (error: unknown) {
    // Log the error for internal debugging (ensure sensitive info isn't exposed)
    if (error instanceof Error) {
      console.error(`Code execution error: ${error.message}`);

      // Return a sanitized error message to the user
      return res.status(400).json({ error: error.message });
    } else {
      console.error('Code execution error: Unknown error');

      // Return a generic error message if the error is not an instance of Error
      return res.status(400).json({ error: 'An unknown error occurred.' });
    }
  }
}
