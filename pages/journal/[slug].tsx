import SectionHeader from "@/components/SectionHeader"
import Layout from "@/layouts/Default"
import { getPosts } from "@/lib/mdx"
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import moment from "moment"
import fs from 'fs'
import path from 'path'
import rehypeHighlight from "rehype-highlight"
import matter from "gray-matter"
import remarkGfm from "remark-gfm";
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import MDXComponents from "@/components/MDXComponents"

type JournalDetailsProps = {
  post: {
    data: any
    mdxSource: any
  }
}

const JournalDetails = ({ post } : JournalDetailsProps) => {

  const { data, mdxSource } = post

  return (
    <Layout>
      <div className="container" style={{ paddingBottom: 0 }}>
        <SectionHeader
          h1
          title={data.title}
          subtitle={`Published on ${moment(data.date).format('dddd, DD MMMM YYYY')}`} />
      </div>
      <div className="container" style={{ paddingTop: 0 }}>
        <MDXRemote {...mdxSource} components={MDXComponents} />
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const journals = await getPosts()

  const paths = journals.map(journal => ({
    params: {
      slug: journal?.slug
    },
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params : { slug } } : { params: { slug: string } }) {

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

  return {
    props: {
      post : {
        data,
        mdxSource
      }
    }
  }
}

export default JournalDetails