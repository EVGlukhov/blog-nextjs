import { Post } from "../types";

export default async function getPost(id: string): Promise<Post | null> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  
  if (response.status === 404) {
    return null;
  }
  if (!response.ok) {
    throw new Error(`Failed to fetch post: ${response.status}`);
  }

  const post: Post = await response.json();
  return post;
}