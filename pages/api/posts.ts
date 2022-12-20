import type { NextApiRequest, NextApiResponse } from 'next'
import { getPosts } from "@/lib/mdx";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const posts = getPosts(1)

  res.status(200).json(posts);
}