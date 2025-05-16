To use the `useInfiniteQuery` hook from React Query (TanStack Query) for implementing infinite scrolling or paginated
fetching, follow these key steps:

## Basic Usage of `useInfiniteQuery`

1. **Import the hook:**

   ```js
   import { useInfiniteQuery } from "@tanstack/react-query";
   ```

2. **Define a fetch function:** This function receives a `pageParam` parameter that represents the cursor or page number to
   fetch.

   ```js
   const fetchProjects = async ({ pageParam = 0 }) => {
     const res = await fetch("/api/projects?cursor=" + pageParam);
     return res.json();
   };
   ```

3. **Call `useInfiniteQuery`:** Pass an object with these important options:

   - `queryKey`: a unique key for the query.
   - `queryFn`: the fetch function.
   - `getNextPageParam`: a function that tells React Query how to get the next page parameter from the last fetched page.
   - Optionally, `initialPageParam` to set the starting page/cursor.

   Example:

   ```js
   const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } = useInfiniteQuery({
     queryKey: ["projects"],
     queryFn: fetchProjects,
     getNextPageParam: (lastPage) => lastPage.nextCursor,
     initialPageParam: 0,
   });
   ```

4. **Render the data:** The `data` returned contains a `pages` array with all loaded pages.

   ```js
   return (
     <>
       {data.pages.map((group, i) => (

           {group.data.map(project => (
             {project.name}
           ))}

       ))}
        fetchNextPage()}
         disabled={!hasNextPage || isFetchingNextPage}
       >
         {isFetchingNextPage ? 'Loading more...' : hasNextPage ? 'Load More' : 'Nothing more to load'}


   );
   ```

## Important Notes

- `getNextPageParam` receives the last page fetched and should return the next cursor or page number, or `undefined` if there
  are no more pages.
- `fetchNextPage` triggers loading the next page.
- `hasNextPage` is a boolean indicating if more pages are available.
- You can also use `fetchPreviousPage` and `hasPreviousPage` for bi-directional pagination.
- The hook returns many useful states like `isFetchingNextPage` to indicate loading status for next page fetches[2][4][6][7].

## Example Summary

```js
import { useInfiniteQuery } from '@tanstack/react-query';

function Projects() {
  const fetchProjects = async ({ pageParam = 0 }) => {
    const res = await fetch('/api/projects?cursor=' + pageParam);
    return res.json();
  };

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    initialPageParam: 0,
  });

  if (status === 'loading') return Loading...;
  if (status === 'error') return Error: {error.message};

  return (
    <>
      {data.pages.map((page, i) => (

          {page.data.map(project => (
            {project.name}
          ))}

      ))}
       fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {isFetchingNextPage ? 'Loading more...' : hasNextPage ? 'Load More' : 'No more projects'}


  );
}
```

This pattern enables fetching paginated data incrementally and appending it to the UI, ideal for infinite scroll or "Load
More" buttons[2][4][6].

Citations: [1] https://tanstack.com/query/v4/docs/react/reference/useInfiniteQuery [2]
https://tanstack.com/query/latest/docs/framework/react/guides/infinite-queries [3]
https://dev.to/dravidjones28/how-to-implement-infinite-queries-in-react-query-22e6 [4]
https://tanstack.com/query/v4/docs/framework/react/guides/infinite-queries [5]
https://blog.delpuppo.net/react-query-infinite-queries [6]
https://react-query-git-typescript-example.tannerlinsley.vercel.app/guides/infinite-queries [7]
https://tanstack.com/query/latest/docs/react/reference/useInfiniteQuery [8]
https://dev.to/delisrey/infinite-list-loading-with-react-query-useinfinitequery-hook--19i

---

Answer from Perplexity:
https://www.perplexity.ai/search/how-to-use-useinfinitequery-fr-T06DEXNWTpSqE19oOCGqwg?utm_source=copy_output
