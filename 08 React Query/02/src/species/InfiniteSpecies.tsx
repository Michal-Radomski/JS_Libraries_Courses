/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import InfiniteScroll from "react-infinite-scroller";
import { useInfiniteQuery } from "@tanstack/react-query";

import { Species } from "./Species";

const initialUrl: string = "https://swapi.py4e.com/api/species/";
const fetchUrl = async (url: string) => {
  const response = await fetch(url);
  return response.json();
};

export function InfiniteSpecies(): React.JSX.Element {
  const { data, fetchNextPage, hasNextPage, isLoading, isFetching, isError, error } = useInfiniteQuery({
    queryKey: ["sw-species"],
    queryFn: ({ pageParam = initialUrl }) => fetchUrl(pageParam),
    getNextPageParam: (lastPage: { next: boolean }) => lastPage.next || undefined,
  } as any);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (isError) {
    return <div>Error! {error.toString()}</div>;
  }

  return (
    <React.Fragment>
      {isFetching ? <div className="loading">Loading...</div> : null}

      <InfiniteScroll
        loadMore={() => {
          if (!isFetching) fetchNextPage();
        }}
        hasMore={hasNextPage}
        initialLoad={false} // Note: add `initialLoad={false}` to avoid double-load of page 2.
      >
        {data.pages.map((pageData: any) => {
          return (pageData?.results as Spece[]).map((species: Spece) => {
            return (
              <Species
                key={species.name}
                name={species.name}
                language={species.language}
                averageLifespan={species.average_lifespan}
              />
            );
          });
        })}
      </InfiniteScroll>
    </React.Fragment>
  );
}
