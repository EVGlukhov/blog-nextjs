import CreatePostForm from "@/features/posts/components/create-post-form";

export default function NewPostPage() {
  return (
    <section className="space-y-8">
      <header className="space-y-3 text-center">
        <h1 className="text-4xl font-semibold text-zinc-950 sm:text-5xl">
          Create a post
        </h1>
        <p className="text-zinc-600">
          Share an idea or story with your readers.
        </p>
      </header>
      <CreatePostForm />
    </section>
  )
}