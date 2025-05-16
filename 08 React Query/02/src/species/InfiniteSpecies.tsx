import React from "react";
import { useInfiniteQuery, type DefinedInitialDataInfiniteOptions, type InfiniteData } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroller";

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
    getNextPageParam: (lastPage: { next: string }) => lastPage.next || null,
  } as unknown as DefinedInitialDataInfiniteOptions<{ next: string }, Error, InfiniteData<{ next: string }, unknown>, string[], string>);
  // console.log("data:", data);

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
        // initialLoad={false} //* Note: add `initialLoad={false}` to avoid double-load of page 2.
      >
        {/*  eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {data?.pages?.map((pageData: any) => {
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
