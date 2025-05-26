import { filter, Observable } from "rxjs";

{
  //* Filter
  interface NewsItem {
    category: "Business" | "Sports";
    content: string;
  }

  const newsFeed$ = new Observable<NewsItem>((subscriber) => {
    setTimeout(() => subscriber.next({ category: "Business", content: "A" }), 1000);
    setTimeout(() => subscriber.next({ category: "Sports", content: "B" }), 3000);
    setTimeout(() => subscriber.next({ category: "Business", content: "C" }), 4000);
    setTimeout(() => subscriber.next({ category: "Sports", content: "D" }), 6000);
    setTimeout(() => subscriber.next({ category: "Business", content: "E" }), 7000);
  });

  const sportsNewsFeed$ = newsFeed$.pipe(filter((item: NewsItem) => item.category === "Sports"));

  newsFeed$.subscribe((item: NewsItem) => console.log(1, "item:", item));

  sportsNewsFeed$.subscribe({
    next: (item: NewsItem) => {
      console.log(2, "item:", item);
    },
  });
}
