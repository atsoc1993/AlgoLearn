import { VM } from 'vm2';

export async function executeJavaScript(code: string): Promise<string> {
  return new Promise((resolve, reject) => {
    try {
      // Initialize a variable to capture console output
      let consoleOutput = '';
      const vm = new VM({
        timeout: 5000, // 5 seconds timeout
        sandbox: {
          console: {
            log: (...args: unknown[]) => {
              // Capture each console.log output in consoleOutput
              consoleOutput += args.join(' ') + '\n';
            },
          },
        },
      });

      const result = vm.run(code);

      // If there's console output, return it. Otherwise, return the result or a default message.
      if (consoleOutput) {
        resolve(consoleOutput.trim());
      } else if (result !== undefined) {
        resolve(String(result));
      } else {
        resolve('Result is undefined');
      }
    } catch (err: unknown) {
      console.error('JavaScript execution error:', err);

      if (err instanceof Error) {
        reject(new Error(`JavaScript execution failed: ${err.message}`));
      } else {
        reject(new Error('JavaScript execution failed with an unknown error'));
      }
    }
  });
}
