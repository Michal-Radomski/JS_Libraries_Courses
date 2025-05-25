import { Observable, Subscriber } from "rxjs";
import { ajax, AjaxResponse } from "rxjs/ajax";

//* Cold - HTTP Request
const getRandom = (): number => {
  const random = Math.round(Math.random() * 100);
  // console.log({ random });
  return random;
};

const ajax$ = ajax<any>(`https://jsonplaceholder.typicode.com/posts/${getRandom()}`);

ajax$.subscribe((data: AjaxResponse<any>) => console.log("Sub 1:", data.response.title));

ajax$.subscribe((data: AjaxResponse<any>) => console.log("Sub 2:", data.response.title));

ajax$.subscribe((data: AjaxResponse<any>) => console.log("Sub 3:", data.response.title));

//* Hot - HTTP Request
const helloButton = document.querySelector("button#hello") as HTMLButtonElement;

const helloClick$: Observable<MouseEvent> = new Observable<MouseEvent>((subscriber: Subscriber<MouseEvent>) => {
  helloButton.addEventListener("click", (event: MouseEvent) => {
    subscriber.next(event);
  });
});

helloClick$.subscribe((event) => console.log("Sub 1:", event.type, event.x, event.y));

setTimeout(() => {
  console.log("Subscription 2 starts");
  helloClick$.subscribe((event) => console.log("Sub 2:", event.type, event.x, event.y));
}, 5000);
