import { cacheLife, cacheTag } from "next/cache";
import { Post } from "../types";
import prisma from '@/lib/prisma';

export default async function getPosts(): Promise<Post[]> {
  'use cache'
  cacheLife("hours");
  cacheTag('posts')

  return prisma.post.findMany({
    orderBy: { createdAt: "desc" }
  })
}