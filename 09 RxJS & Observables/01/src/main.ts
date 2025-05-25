import { Observable, of } from "rxjs";

import "./style.scss";

export const name$: Observable<string> = of("Alice", "Ben", "Charlie");

export function storeDataOnServer(data: string): Observable<string> {
  return new Observable((subscriber) => {
    setTimeout(() => {
      subscriber.next(`Saved successfully: ${data}`);
      subscriber.complete();
    }, 5000);
  });
}

export function storeDataOnServerError(data: string): Observable<string> {
  console.log("data:", data);
  return new Observable((subscriber) => {
    setTimeout(() => {
      subscriber.error(new Error("Failure!"));
    }, 5000);
  });
}
