// Types and Interfaces

interface Todo {
  id: number;
  title: string;
}

enum PaginationKey {
  First = "first",
  Last = "last",
  Previous = "prev",
  Next = "next",
}

interface PaginatedData<T> {
  data: T[];
  pagination: { [key in PaginationKey]?: { _page: number; _limit: number } };
}

interface PostPayload {
  title: string;
}

interface DeletePayload {
  id: number;
}
