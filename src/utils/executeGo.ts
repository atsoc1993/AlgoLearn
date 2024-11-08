import { exec } from 'child_process';
import path from 'path';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

export async function executeGo(code: string): Promise<string> {
  // Ensure the 'tmp' directory exists in the project root
  const tmpDirPath = path.join(process.cwd(), 'tmp');
  if (!fs.existsSync(tmpDirPath)) {
    fs.mkdirSync(tmpDirPath);
  }

  return new Promise((resolve, reject) => {
    const id = uuidv4();
    const filename = `user_code_${id}.go`;
    const filepath = path.join(tmpDirPath, filename);

    fs.writeFile(filepath, code, (err) => {
      if (err) return reject(new Error('Failed to write code file.'));

      // Execute the Go code inside a Docker container
      exec(
        `docker run --rm -v ${tmpDirPath}:/usr/src/app -w /usr/src/app golang:1.20 bash -c "go run ${filename}"`,
        { timeout: 5000 }, // 5 seconds timeout
        (error, stdout, stderr) => {
          // Clean up the file
          fs.unlink(filepath, () => {});

          if (error) {
            console.error('Go execution error:', stderr || error.message);
            return reject(new Error(stderr || error.message));
          }
          resolve(stdout);
        }
      );
    });
  });
}
