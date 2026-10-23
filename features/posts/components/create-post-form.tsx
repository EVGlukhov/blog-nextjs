"use client";

import { useActionState } from "react";
import { CreatePostState } from "../types";
import { createPost } from "../actions";

const initialState: CreatePostState = {};

export default function CreatePostForm() {
  const [state, formAction, isPending] = useActionState(
    createPost,
    initialState
  );

  return (
    <form action={formAction} className="mx-auto max-w-2xl space-y-6 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
      <div>
        <label htmlFor="title" className="mb-2 block text-sm font-medium text-zinc-900">Title</label>
        <input
          id="title"
          name="title"
          required
          minLength={3}
          maxLength={120}
          aria-invalid={Boolean(state.errors?.title)}
          aria-describedby={state.errors?.title ? "title-error" : undefined}
          placeholder="Give your post a title"
          className="w-full rounded-lg border border-zinc-300 px-4 py-3 text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-zinc-500 focus:ring-2 focus:ring-zinc-200 aria-invalid:border-red-500"
        />

        {state.errors?.title && (
          <p id="title-error" className="mt-2 text-sm text-red-600">
            {state.errors.title}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="body" className="mb-2 block text-sm font-medium text-zinc-900">
          Body
        </label>
        <textarea
          id="body"
          name="body"
          required
          minLength={10}
          maxLength={10_000}
          rows={8}
          aria-invalid={Boolean(state.errors?.body)}
          aria-describedby={state.errors?.body ? "body-error" : undefined}
          placeholder="Write your post..."
          className="w-full resize-y rounded-lg border border-zinc-300 px-4 py-3 text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-zinc-500 focus:ring-2 focus:ring-zinc-200 aria-invalid:border-red-500"
        />

        {state.errors?.body && (
          <p id="body-error" className="mt-2 text-sm text-red-600">
            {state.errors.body}
          </p>
        )}
      </div>
      <div className="flex justify-end">  
        <button
          type="submit"
          disabled={isPending}
          className="rounded-lg bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 disabled:cursor-not-allowed disabled:opacity-60">
          {isPending ? "Publishing..." : "Publish post"}
        </button>
      </div>
    </form>
  )
}