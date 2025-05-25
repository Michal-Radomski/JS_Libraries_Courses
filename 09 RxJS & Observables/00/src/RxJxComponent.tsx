import React from "react";
import { fromEvent, Subscription } from "rxjs";
import { debounceTime, map, switchMap, startWith } from "rxjs/operators";

const RxJxComponent = (): React.JSX.Element => {
  const [data, setData] = React.useState<{ [key: string]: string }[] | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState(null);

  // Function to simulate an API request
  const fetchData = async (query: string) => {
    const response = await fetch(`https://api.example.com/search?q=${query}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };

  React.useEffect(() => {
    const inputElement = document.getElementById("search-input") as HTMLInputElement;

    // Create an observable from the input events
    const input$ = fromEvent(inputElement, "input").pipe(
      map((event) => (event as unknown as React.ChangeEvent<HTMLInputElement>)?.target?.value as string), // Extract the input value
      debounceTime(500), // Wait 500ms after the user stops typing
      switchMap((query) => {
        if (query === "") {
          return [];
        } // Don't make a request if the input is empty
        setLoading(true);
        setError(null);
        return fetchData(query).catch((error) => {
          setError(error.message);
          return [];
        });
      }),
      startWith([]) // Start with an empty array while loading
    );

    const subscription: Subscription = input$.subscribe({
      next: (result) => {
        setLoading(false);
        setData(result);
      },
      error: (err) => {
        setLoading(false);
        setError(err.message);
      },
    });

    // Cleanup subscription on component unmount
    return () => subscription.unsubscribe();
  }, []);

  return (
    <React.Fragment>
      <div>
        <input id="search-input" type="text" placeholder="Search..." />

        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        <ul>
          {data?.map((item: { [key: string]: string }) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default RxJxComponent;
