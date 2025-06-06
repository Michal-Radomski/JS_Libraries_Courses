import React from "react";
import { useInfiniteQuery, type DefinedInitialDataInfiniteOptions, type InfiniteData } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroller";

import { Person } from "./Person";

const initialUrl: string = "https://swapi.py4e.com/api/people/";
const fetchUrl = async (url: string) => {
  const response = await fetch(url);
  return response.json();
};

export function InfinitePeople(): JSX.Element {
  const { data, fetchNextPage, hasNextPage, isFetching, isLoading, isError, error } = useInfiniteQuery({
    queryKey: ["sw-people"],
    queryFn: ({ pageParam = initialUrl }) => fetchUrl(pageParam as string),
    getNextPageParam: (lastPage: { next: string }) => {
      return lastPage.next || null;
    },
  } as unknown as DefinedInitialDataInfiniteOptions<{ next: string }, Error, InfiniteData<{ next: string }, unknown>, string[], string>);

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
          if (!isFetching) {
            fetchNextPage();
          }
        }}
        hasMore={hasNextPage}
        initialLoad={false} //* Note: add `initialLoad={false}` to avoid double-load of page 2.
      >
        {/*  eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {data?.pages?.map((pageData: any) => {
          return (pageData?.results as Person[])?.map((person: Person) => {
            return <Person key={person.name} name={person.name} hairColor={person.hair_color} eyeColor={person.eye_color} />;
          });
        })}
      </InfiniteScroll>
    </React.Fragment>
  );
}
