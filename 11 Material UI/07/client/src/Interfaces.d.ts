type RootState = ReturnType<typeof store.getState>;

interface UserI {
  name: string;
  email: string;
  password: string;
  posts?: PostI[];
  _id?: string;
}

interface PostI {
  id?: string;
  user?: UserI;
  _id?: string;
  image?: string;
  imageUrl: string;
  title: string;
  description: string;
  location: string;
  date?: Date | string;
}

interface ObjectI {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}
