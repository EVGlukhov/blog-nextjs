"use server"

import { updateTag } from "next/cache";
import { CreatePostState } from "./types";
import prisma from '@/lib/prisma';
import { redirect } from "next/navigation"

export async function createPost(_previousState: CreatePostState, formData: FormData) {
  const titleValue = formData.get("title");
  const bodyValue = formData.get("body");

  const title = typeof titleValue === "string" ? titleValue.trim() : "";
  const body = typeof bodyValue === "string" ? bodyValue.trim() : "";

  const errors: NonNullable<CreatePostState["errors"]> = {}

  if (title.length < 3 || title.length > 120) {
    errors.title = "Title must be between 3 and 120 characters.";
  }

  if (body.length < 10 || body.length > 10_000) {
    errors.body = "Body must be between 10 and 10,000 characters."
  }

  if (Object.keys(errors).length > 0) {
    return { errors }
  }

  await prisma.post.create({
    data: { title, body }
  })

  updateTag("posts");
  redirect("/posts");
}