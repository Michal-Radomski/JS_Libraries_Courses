import { Subject } from "rxjs";

// Create a new Subject instance
const subject: Subject<number> = new Subject<number>();

// Subscribe observer 1
subject.subscribe((value: number) => console.log(`Observer 1: ${value}`));

// Subscribe observer 2
subject.subscribe((value: number) => console.log(`Observer 2: ${value}`));

// Emit values to subscribers
subject.next(1);
subject.next(2);
