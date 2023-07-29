// ts-node myFile.ts

const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

// @ts-ignore -> New timers, tasks, operations are recorded from myFile.ts running
myFile.runContents();

function shouldContinue(): boolean {
  // Check one: Any pending setTimeout, setInterval, setImmediate?
  // Check two: Any pending OS tasks? (Like server listening to port)
  // Check three: Any pending long running operations? (Like fs module)
  return pendingTimers.length || pendingOSTasks.length || pendingOperations.length ? true : false;
}

// Entire body executes in one "tick"
while (shouldContinue()) {}

// exit back to terminal
