// scripts/exportChapters.ts

import { chapters } from '../src/data/chapters.js'; // Note the .js extension
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Define __filename and __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to convert the chapters array to JSON and save it
const exportChaptersToJSON = () => {
  // Define the output path
  const outputPath = path.join(__dirname, '../src/data/chapters.json');

  // Convert the chapters array to JSON with pretty formatting
  const jsonData = JSON.stringify(chapters, null, 2);

  // Write the JSON data to the file with typed error parameter
  fs.writeFile(outputPath, jsonData, 'utf8', (err: NodeJS.ErrnoException | null) => {
    if (err) {
      console.error('Error writing chapters.json:', err);
    } else {
      console.log('chapters.json has been successfully created at', outputPath);
    }
  });
};

// Execute the function
exportChaptersToJSON();
