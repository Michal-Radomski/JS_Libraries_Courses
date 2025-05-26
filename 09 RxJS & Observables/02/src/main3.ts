import { Observable, of, Subscriber } from "rxjs";

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
