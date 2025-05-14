interface Comment {
  body: string;
  id: number;
  email: string;
  name: string;
  postId: string;
}

interface Post {
  id: number;
  title: string;
  body: string;
  user: number;
}

interface ObjectI {
  [key: string]: number | string;
}
