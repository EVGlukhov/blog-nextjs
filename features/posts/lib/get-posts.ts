import { cacheLife } from "next/cache";
import { Post } from "../types";

export default async function getPosts(): Promise<Post[]> {
  'use cache'
  cacheLife("hours");

  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!response.ok) {
    throw new Error(`Failed to fetch posts ${response.status}`);
  }

  const posts: Post[] = await response.json();
  return posts;
}