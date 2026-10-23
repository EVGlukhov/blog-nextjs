import Link from "next/link";
import { Post } from "../types";

export default function PostListItem({ post }: { post: Post }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <Link href={`/posts/${post.id}`} className="text-lg font-semibold text-zinc-950 hover:text-gray-500">
        {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
      </Link>
    </div>
  )
}