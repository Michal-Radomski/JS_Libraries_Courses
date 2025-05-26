import { from, Observable, of, Subscriber } from "rxjs";

//* Off
of("Alice", "Ben", "Charlie").subscribe((value: string) => console.log(1, { value }));

ourOwnOf("Alice", "Ben", "Charlie").subscribe({
  next: (value) => console.log(2, { value }),
  complete: () => console.log("Completed"),
});

const names$ = new Observable<string>((subscriber: Subscriber<string>) => {
  subscriber.next("Alice");
  subscriber.next("Ben");
  subscriber.next("Charlie");
  subscriber.complete();
});

names$.subscribe({
  next: (value: string) => console.log(3, { value }),
  complete: () => console.log("Completed"),
});

//* The same as of!
function ourOwnOf(...args: string[]): Observable<string> {
  return new Observable<string>((subscriber) => {
    for (let i = 0; i < args.length; i++) {
      subscriber.next(args[i]);
    }
    subscriber.complete();
  });
}

//* From
from(["Alice", "Ben", "Charlie"]).subscribe({
  next: (value) => console.log("A", { value }),
  error: (err) => console.log(err),
  complete: () => console.log("complete"),
});

const somePromise = new Promise((_resolve, reject) => {
  // resolve('Resolved!');
  reject("Rejected!");
});

const observableFromPromise$ = from(somePromise);

observableFromPromise$.subscribe({
  next: (value) => console.log({ value }),
  error: (err) => console.log("Error:", err),
  complete: () => console.log("Completed"),
});
