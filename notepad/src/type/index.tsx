export type LoginForm = {
  email: string;
  password: string;
};

export type signupForm = {
  email: string;
  password: string;
  username: string;
};

export interface Note {
  _id: string;
  title: string;
  content: string;
  user: string;
  createdAt: string; 
  updatedAt: string;
  __v: number;
}

export interface SingleNote {
  _id: string;
  title: string;
  content: string;
  user: string;
  __v: number;
}

export type FetchResponse = {
  success: boolean;
  count: number;
  data: Note[];
}