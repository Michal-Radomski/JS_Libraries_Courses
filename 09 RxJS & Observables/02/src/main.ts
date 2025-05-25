import { Observable, Subscriber } from "rxjs";

//* Empty Observable
// const observable$ = new Observable<string>((_subscriber) => {
//   // console.log("_subscriber:", _subscriber);
//   console.log("Observable executed");
// });

// console.log("Before subscribe");
// observable$.subscribe((value: string) => console.log({ value }));
// console.log("After subscribe");

//* Next Notification
// const observable$ = new Observable<string>((subscriber: Subscriber<string>) => {
//   console.log("Observable executed");
//   subscriber.next("Alice");
// });

// console.log("Before subscribe");
// observable$.subscribe((value: string) => console.log({ value }));
// console.log("After subscribe");

//* More Next Notifications
// const observable$ = new Observable<string>((subscriber: Subscriber<string>) => {
//   console.log("Observable executed");
//   subscriber.next("Alice");
//   subscriber.next("Ben");
//   setTimeout(() => subscriber.complete(), 2000);
// });

// console.log("Before subscribe");
// observable$.subscribe((value: string) => console.log({ value }));
// console.log("After subscribe");

//* Teardown - Complete Notification
const observable$ = new Observable<string>((subscriber: Subscriber<string>) => {
  console.log("Observable executed");
  subscriber.next("Alice");
  subscriber.next("Ben");
  setTimeout(() => {
    subscriber.next("Charlie");
    subscriber.complete();
  }, 2000);

  return () => {
    console.log("Teardown");
  };
});

console.log("Before subscribe");
observable$.subscribe({
  next: (value) => console.log({ value }),
  complete: () => console.log("Completed"),
});
console.log("After subscribe");
