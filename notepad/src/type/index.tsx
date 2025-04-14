export type LoginForm = {
  email: string;
  password: string;
};

export type signupForm = {
  email: string;
  password: string;
  username: string;
};

export type Note = {
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export type FetchResponse = {
  success: boolean;
  count: number;
  data: Note[];
}