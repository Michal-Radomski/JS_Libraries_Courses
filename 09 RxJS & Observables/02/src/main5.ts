import { BehaviorSubject, fromEvent, map, Subject, withLatestFrom } from "rxjs";

//* Create a new Subject instance
const subject: Subject<number> = new Subject<number>();
console.log("subject:", subject);

// Subscribe observer 1
subject.subscribe((value: number) => console.log(`Observer 1: ${value}`));

// Subscribe observer 2
subject.subscribe((value: number) => console.log(`Observer 2: ${value}`));

// Emit values to subscribers
subject.next(1);
subject.next(2);

//* Example 1
const emitButton = document.querySelector("button#emit") as HTMLButtonElement;
const inputElement = document.querySelector("#value-input") as HTMLInputElement;
const subscribeButton = document.querySelector("button#subscribe") as HTMLButtonElement;

const value$ = new Subject<string>();

fromEvent(emitButton, "click")
  .pipe(map(() => inputElement.value))
  .subscribe(value$);

fromEvent(subscribeButton, "click").subscribe(() => {
  console.log("New Subscription");
  value$.subscribe((value: string) => console.log(value));
});

//* Example 2
const loggedInSpan = document.querySelector("span#logged-in") as HTMLSpanElement;
const loginButton = document.querySelector("button#login") as HTMLButtonElement;
const logoutButton = document.querySelector("button#logout") as HTMLButtonElement;
const printStateButton = document.querySelector("button#print-state") as HTMLButtonElement;

const isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

fromEvent(loginButton, "click").subscribe(() => isLoggedIn$.next(true));
fromEvent(logoutButton, "click").subscribe(() => isLoggedIn$.next(false));

// Navigation bar
isLoggedIn$.subscribe((isLoggedIn: boolean) => (loggedInSpan.innerText = isLoggedIn.toString()));

// Buttons
isLoggedIn$.subscribe((isLoggedIn: boolean) => {
  logoutButton.style.display = isLoggedIn ? "block" : "none";
  loginButton.style.display = !isLoggedIn ? "block" : "none";
});

fromEvent(printStateButton, "click")
  .pipe(withLatestFrom(isLoggedIn$))
  .subscribe(([event, isLoggedIn]) => {
    console.log("event:", event);
    console.log("User is logged in:", isLoggedIn);
  });
