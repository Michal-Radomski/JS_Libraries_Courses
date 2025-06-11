interface UserI {
  name: string;
  email: string;
  password: string;
  posts?: PostI[];
}

interface PostI {
  imageUrl: string;
  title: string;
  description: string;
  image: string;
  location: string;
  date: Date;
  user: UserI;
}

interface ObjectI {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}
