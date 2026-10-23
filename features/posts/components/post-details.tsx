import { notFound } from "next/navigation";
import type { Post } from "../types";

type Props = {
  post: Post;
};

export function PostDetailsFallback() {
  return (
    <p role="status" className="text-center text-zinc-500">
      Loading post details...
    </p>
  );
}

export default async function PostDetails({ post }: Props) {
  return (
    <article className="space-y-6">
      <div className="space-y-4">
        <h1 className="text-center text-4xl font-semibold text-zinc-950 sm:text-5xl">
          {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
        </h1>
        <p className="text-lg leading-8 text-zinc-700">
          {post.body}
        </p>
      </div>
    </article>
  );
}