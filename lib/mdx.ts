import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { bundleMDX } from 'mdx-bundler'

// Get all posts
export const getPosts = (pageIndex : number) => {
  const dirFiles = fs.readdirSync(path.join(process.cwd(), 'lib', 'data', 'posts'), {
    withFileTypes: true,
  })

  const posts = dirFiles
    // Filter out non-mdx files
    .map((file) => {
      if (!file.name.endsWith('.mdx')) return

      const fileContent = fs.readFileSync(
        path.join(process.cwd(), 'lib', 'data', 'posts', file.name),
        'utf-8'
      )

      const { data, content } = matter(fileContent)

      const slug = data?.slug

      return { data, content, slug }
    })
    // Sort posts by date in descending order
    .sort((a, b) : any => (a?.data.date > b?.data.date ? '-1' : '1'))
    // Filter out posts that are not published
    .filter((post) => post?.data.status === 'published')
    // Take only 10 posts
    // .slice(pageIndex * 10, pageIndex * 10 + 10)

  return posts
}

// Get latest posts for home page
export const getLatestPosts = (amount: number) => {
  const posts = getPosts(1)

  return posts.slice(0, amount)
}

// Get file by type and slug
export const getFileBySlug = async (type : string, slug : string) => {
  try {
    const fileContent = fs.readFileSync(
      path.join(process.cwd(), 'lib', 'data', type, `${slug}.mdx`),
      'utf-8'
    )

    const { code, frontmatter } = await bundleMDX({
      source: fileContent
    })

    return {
      slug,
      frontmatter,
      code,
    }
  } catch (error) {
    console.error('Error at getFileBySlug function : ' , error)
  }
}
