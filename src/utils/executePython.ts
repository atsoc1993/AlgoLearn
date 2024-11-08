import { exec } from 'child_process';
import path from 'path';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

export async function executePython(code: string): Promise<string> {
  // Format the directory path to be Unix-compatible
  const tmpDirPath = path.join(process.cwd(), 'tmp').replace(/\\/g, '/');
  if (!fs.existsSync(tmpDirPath)) {
    fs.mkdirSync(tmpDirPath, { recursive: true });
  }

  return new Promise((resolve, reject) => {
    const id = uuidv4();
    const filename = `user_code_${id}.py`;
    const filepath = path.join(tmpDirPath, filename).replace(/\\/g, '/');

    fs.writeFile(filepath, code, (err) => {
      if (err) return reject(new Error('Failed to write code file.'));

      // Docker command to execute Python inside a container
      const dockerCommand = `docker run --rm -v "/${tmpDirPath}:/usr/src/app" -w /usr/src/app python:3.9 python ${filename}`;

      // Log the command for debugging
      console.log(`Executing Docker command: ${dockerCommand}`);

      exec(dockerCommand, { timeout: 5000 }, (error, stdout, stderr) => {
        fs.unlink(filepath, () => {}); // Clean up file
        if (error) {
          console.error('Error executing Docker command:', stderr || error.message);
          return reject(new Error(stderr || error.message));
        }
        resolve(stdout);
      });
    });
  });
}
