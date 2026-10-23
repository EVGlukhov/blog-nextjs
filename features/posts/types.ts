export type Post = {
  id: number;
  title: string;
  body: string;
};

export type CreatePostState = {
  errors?: {
    title?: string;
    body?: string;
  };
};