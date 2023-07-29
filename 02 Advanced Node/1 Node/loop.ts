// ts-node myFile.ts

// @ts-ignore
myFile.runContents();

function shouldContinue(): boolean {
  return true || false;
}

// Entire body executes in one "tick"
while (shouldContinue()) {}

// exit back to terminal
