import getPosts from "../lib/get-posts";
import PostListItem from "./post-list-item";

export function PostsListFallback() {
  return (
    <p role="status" className="text-center text-zinc-500">
      Loading posts...
    </p>
  );
}

export default async function PostsList() {
  const posts = await getPosts();

  return (
    <ul className="space-y-3">
      {posts.slice(0, 5).map((post) => (
        <li key={post.id}>
          <PostListItem post={post} />
        </li>
      ))}
    </ul>
  );
}
