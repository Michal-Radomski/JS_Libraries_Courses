import { forkJoin, from, fromEvent, interval, Observable, of, Subscriber, Subscription, timer } from "rxjs";
import { ajax } from "rxjs/ajax";

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

//* fromEvent
const triggerButton = document.querySelector("button#trigger") as HTMLButtonElement;

const subscription: Subscription = fromEvent<MouseEvent>(triggerButton, "click").subscribe((event) =>
  console.log(event.type, event.x, event.y)
);

const triggerClick$ = new Observable<MouseEvent>((subscriber) => {
  const clickHandlerFn = (event: MouseEvent) => {
    console.log("Event callback executed");
    subscriber.next(event);
  };

  triggerButton.addEventListener("click", clickHandlerFn);

  return () => {
    triggerButton.removeEventListener("click", clickHandlerFn);
  };
});

const subscription2: Subscription = triggerClick$.subscribe((event) => console.log(event.type, event.x, event.y));

setTimeout(() => {
  console.log("Unsubscribe");
  subscription.unsubscribe();
  subscription2.unsubscribe();
}, 5000);

{
  //* Timer
  console.log("App started");

  timer(2000).subscribe({
    next: (value) => console.log({ value }),
    complete: () => console.log("Completed"),
  });

  const timer$ = new Observable<number>((subscriber) => {
    const timeoutId = setTimeout(() => {
      console.log("Timeout!");
      subscriber.next(0);
      subscriber.complete();
    }, 2000);

    return () => clearTimeout(timeoutId);
  });

  const subscription = timer$.subscribe({
    next: (value) => console.log(value),
    complete: () => console.log("Completed"),
  });

  setTimeout(() => {
    subscription.unsubscribe();
    console.log("Unsubscribe");
  }, 1000);
}

{
  //* Interval
  console.log("App started2");

  const interval$ = new Observable<number>((subscriber) => {
    let counter = 0;

    const intervalId: number = setInterval(() => {
      console.log("Timeout!");
      subscriber.next(counter++);
    }, 1000);

    return () => clearInterval(intervalId);
  });

  interval(1000).subscribe({
    next: (value) => console.log(value),
    complete: () => console.log("Completed"),
  });

  const subscription: Subscription = interval$.subscribe({
    next: (value) => console.log(value),
    complete: () => console.log("Completed"),
  });

  setTimeout(() => {
    subscription.unsubscribe();
    console.log("Unsubscribe");
  }, 5000);
}

{
  //* ForkJoin
  const randomName$ = ajax<{ [key: string]: string }>("https://jsonplaceholder.typicode.com/posts/1"); //* Changed api
  const randomNation$ = ajax<{ [key: string]: string }>("https://jsonplaceholder.typicode.com/posts/2"); //* Changed api
  const randomFood$ = ajax<{ [key: string]: string }>("https://jsonplaceholder.typicode.com/posts/3"); //* Changed api

  // randomName$.subscribe((ajaxResponse) => console.log(ajaxResponse.response.first_name));
  // randomNation$.subscribe((ajaxResponse) => console.log(ajaxResponse.response.capital));
  // randomFood$.subscribe((ajaxResponse) => console.log(ajaxResponse.response.dish));

  forkJoin([randomName$, randomNation$, randomFood$]).subscribe(([nameAjax, nationAjax, foodAjax]) =>
    console.log(
      `${nameAjax.response.title} is from ${nationAjax.response.title} and likes to eat ${foodAjax.response.title}.`
    )
  );

  const a$ = new Observable((subscriber) => {
    setTimeout(() => {
      subscriber.next("A");
      subscriber.complete();
    }, 5000);

    return () => {
      console.log("A teardown");
    };
  });

  const b$ = new Observable((subscriber) => {
    setTimeout(() => {
      subscriber.error("Failure!");
    }, 3000);

    return () => {
      console.log("B teardown");
    };
  });

  forkJoin([a$, b$]).subscribe({
    next: (value) => console.log(value),
    error: (err) => console.log("Error:", err),
  });
}
