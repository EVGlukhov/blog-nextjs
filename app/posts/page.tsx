import { Suspense } from "react";
import PostsList, { PostsListFallback } from "@/features/posts/components/post-list";
import Link from "next/link";

export default function PostsPage() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-center text-4xl font-semibold text-zinc-950 sm:text-5xl">
          Posts
        </h1>
        <Link href="/posts/create"
          className="inline-flex items-center justify-center gap-2 self-center rounded-lg bg-zinc-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 sm:self-auto">
          <span aria-hidden="true" className="text-lg leading-none">+</span>
          Create a post
        </Link>
        <Suspense fallback={<PostsListFallback />}>
          <PostsList />
        </Suspense>
      </section>
    </div>
  );
}
