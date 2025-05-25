import { Observable, Subscriber, Subscription } from "rxjs";

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
// const observable$ = new Observable<string>((subscriber: Subscriber<string>) => {
//   console.log("Observable executed");
//   subscriber.next("Alice");
//   subscriber.next("Ben");
//   setTimeout(() => {
//     subscriber.next("Charlie");
//     subscriber.complete();
//   }, 2000);

//   return () => {
//     console.log("Teardown");
//   };
// });

// console.log("Before subscribe");
// observable$.subscribe({
//   next: (value) => console.log({ value }),
//   complete: () => console.log("Completed"),
// });
// console.log("After subscribe");

//* Error Notification
// const observable$ = new Observable<string>((subscriber: Subscriber<string>) => {
//   console.log("Observable executed");
//   subscriber.next("Alice");
//   subscriber.next("Ben");
//   setTimeout(() => {
//     subscriber.next("Charlie");
//   }, 2000);
//   setTimeout(() => subscriber.error(new Error("Failure")), 4000);

//   return () => {
//     console.log("Teardown");
//   };
// });

// console.log("Before subscribe");
// observable$.subscribe({
//   next: (value: string) => console.log({ value }),
//   error: (err: Error) => console.log("err.message:", err.message),
//   complete: () => console.log("Completed"),
// });
// console.log("After subscribe");

//* Cancellation - Unsubscribe
const interval$ = new Observable<number>((subscriber: Subscriber<number>) => {
  let counter = 1;

  const intervalId = setInterval(() => {
    console.log("Emitted", { counter });
    subscriber.next(counter++);
  }, 2000);

  // Teardown
  return () => {
    clearInterval(intervalId);
  };
});

const subscription: Subscription = interval$.subscribe((value: number) => console.log({ value }));

setTimeout(() => {
  console.log("Unsubscribe");
  subscription.unsubscribe();
}, 7000);
