import { UseQueryOptions, useInfiniteQuery, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

import client from "utils/client";

export const TODOS_KEY = "todos";
const DEFAULT_PER_PAGE = 5;

const useGetAll = () => {
  return useQuery<Todo[]>({
    queryKey: [TODOS_KEY],
    queryFn: () =>
      client.get({
        path: "/todos",
      }),
    // initialData: [{ id: 0, title: "FAKE TODO" }],
  });
};

const useGet = (todoId?: number, options?: UseQueryOptions<Todo>) => {
  return useQuery<Todo>({
    ...options,
    queryKey: [TODOS_KEY, todoId],
    queryFn: () => client.get({ path: `/todos/${todoId}` }),
  });
};

const useGetAllPaginated = (page: number, perPage?: number) => {
  return useQuery<PaginatedData<Todo>>({
    queryKey: [TODOS_KEY, `page-${page}`],
    queryFn: () =>
      client.get({
        path: "/todos",
        paginated: true,
        params: {
          _page: page,
          _limit: perPage || DEFAULT_PER_PAGE,
        },
      }),
  });
};

const useGetAllInfinite = (perPage?: number) => {
  return useInfiniteQuery<PaginatedData<Todo>, AxiosError, Todo[]>({
    queryKey: [TODOS_KEY, "infinite"],
    queryFn: ({ pageParam }) =>
      client.get({
        path: "/todos",
        paginated: true,
        params: {
          _page: pageParam || 1,
          _limit: perPage || DEFAULT_PER_PAGE,
        },
      }),
    getNextPageParam: (lastPage) => lastPage.pagination.next?._page,
    // @ts-ignore
    select: ({ pages, pageParams }) => ({
      pages: pages.map((page) => page.data),
      pageParams,
    }),
  });
};

const usePost = () => {
  const queryClient = useQueryClient();

  return useMutation<Todo, AxiosError, PostPayload>({
    mutationKey: [TODOS_KEY],
    mutationFn: ({ title }) =>
      client.post({
        path: "/todos",
        body: {
          title,
        },
      }),
    onSuccess: (todo) => {
      queryClient.setQueryData<Todo[]>([TODOS_KEY], (todos) => (todos ? [...todos, todo] : [todo]));
      queryClient.invalidateQueries({ queryKey: [TODOS_KEY] });
    },
  });
};

const useDelete = () => {
  const queryClient = useQueryClient();

  return useMutation<unknown, AxiosError, DeletePayload>({
    mutationKey: [TODOS_KEY],
    mutationFn: ({ id }) =>
      client.delete({
        path: `/todos/${id}`,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [TODOS_KEY] });
    },
  });
};

export default {
  getAll: useGetAll,
  getAllPaginated: useGetAllPaginated,
  getAllInfinite: useGetAllInfinite,
  get: useGet,
  post: usePost,
  delete: useDelete,
};
