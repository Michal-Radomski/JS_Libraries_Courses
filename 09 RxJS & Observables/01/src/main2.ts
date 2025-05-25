import { Observable, Subscriber, Subscription } from "rxjs";

const observable$ = new Observable<string>((subscriber: Subscriber<string>) => {
  console.log("Observable executed");
  subscriber.next("Alice");
  setTimeout(() => subscriber.next("Ben"), 2000);
  setTimeout(() => subscriber.next("Charlie"), 4000);
});

const subscription: Subscription = observable$.subscribe((value: string) => console.log({ value }));

setTimeout(() => {
  console.log("Unsubscribe");
  subscription.unsubscribe();
}, 3000);
