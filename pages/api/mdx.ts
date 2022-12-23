// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { serialize } from 'next-mdx-remote/serialize'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import rehypeHighlight from "rehype-highlight"
import remarkGfm from "remark-gfm";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

type Data = {
  name: any
}

type Post = {
  data?: any
  content?: string
  slug?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Post>
) {
  // const dirFiles = fs.readdirSync(path.join(process.cwd(), 'lib', 'data', 'posts'), {
  //   withFileTypes: true,
  // }).filter(dirent => dirent.isFile() && dirent.name.endsWith('.mdx'))

  // // Get MDX by slug
  // const mdxFile : fs.Dirent | undefined = dirFiles.find(file => file.name === `20220808-netlify-image-optimization-handler-nextjs.mdx`)

  // // Get MDX file content
  // if (!mdxFile) {
  //   res.status(404).json({ name: 'File not found' })
  //   return
  // }

  // // Read MDX file content
  // const fileContent = fs.readFileSync(
  //   path.join(process.cwd(), 'lib', 'data', 'posts', mdxFile.name),
  //   'utf8'
  // )

  // // Bundle MDX
  // const { code, frontmatter } = await bundleMDX({
  //   source: fileContent
  // })

  // // Return MDX
  // res.status(200).json({
  //   code,
  //   frontmatter
  // });

  const slug = 'netlify-image-optimization-handler-nextjs';
  const fileContent = fs.readFileSync(
    path.join(process.cwd(), 'lib', 'data', 'posts', `${slug}.mdx`),
    'utf8'
  )

  const { data, content } = matter(fileContent)
  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeHighlight,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ['anchor'],
            },
          },
        ],
      ],
      format: 'mdx',
    },
    scope: data,
  })

  res.status(200).json({
    data,
    ...mdxSource,
    slug
  })

  // res.status(200).json({ name: 'John Doe' })
}
