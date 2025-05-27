import { filter, from, map, Observable } from "rxjs";

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

{
  //* Map
  // Create an observable from an array of numbers
  const source = from([1, 2, 3, 4, 5]);

  // Use map to add 10 to each emitted value
  const example = source.pipe(map((val) => val + 10));

  // Subscribe to the observable and log the transformed values
  example.subscribe((val) => console.log({ val }));
  // Output: 11, 12, 13, 14, 15

  const source2 = from([
    { name: "Joe", age: 30 },
    { name: "Frank", age: 20 },
    { name: "Ryan", age: 50 },
  ]);

  // Map to extract the 'name' property from each object
  const example2 = source2.pipe(map(({ name }) => name));

  example2.subscribe((val) => console.log({ val }));
  // Output: "Joe", "Frank", "Ryan"
}
