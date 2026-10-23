import PostDetails, { PostDetailsFallback } from "@/features/posts/components/post-details";
import getPost from "@/features/posts/lib/get-post";
import { notFound } from "next/navigation";
import { Suspense } from "react";

type Props = {
  params: Promise<{ id: string }>
}

async function PostPageContent({ params }: Props) {
  const { id } = await params;
  const post = await getPost(id);

  if (!post) {
    notFound();
  }

  return <PostDetails post={post} />;
}

export default function PostPage({ params }: Props) {
  return (
    <Suspense fallback={<PostDetailsFallback />}>
      <PostPageContent params={params} />
    </Suspense>
  );
}