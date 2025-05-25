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
const observable$ = new Observable<string>((subscriber: Subscriber<string>) => {
  console.log("Observable executed");
  subscriber.next("Alice");
});

console.log("Before subscribe");
observable$.subscribe((value: string) => console.log({ value }));
console.log("After subscribe");
