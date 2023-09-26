import SectionHeader from "@/components/SectionHeader"
import Layout from "@/layouts/Default"
import { getPosts } from "@/lib/mdx"
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import moment from "moment"
import fs from 'fs'
import path from 'path'
import matter from "gray-matter"
import remarkGfm from "remark-gfm";
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import MDXComponents from "@/components/MDXComponents"
import rehypeHighlight from "rehype-highlight"
import PageTransition from "@/components/PageTransition"
import { useRef } from "react"

type JournalDetailsProps = {
  post: {
    data: any
    mdxSource: any
  }
}

const JournalDetails = ({ post }: JournalDetailsProps) => {

  const { data, mdxSource } = post
  const ref = useRef()

  return (
    <PageTransition ref={ref.current}>
      <Layout>
        <div className="container" style={{ paddingBottom: 0 }}>
          <SectionHeader
            h1
            title={data.title}
            subtitle={`Published on ${moment(data.date).format('dddd, DD MMMM YYYY')}`} />
        </div>
        <div className="container" style={{ paddingTop: 0 }}>
          {mdxSource && <MDXRemote {...mdxSource} components={MDXComponents} />}
        </div>
      </Layout>
    </PageTransition>
  )
}

export function getStaticPaths() {
  const journals = getPosts()

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

export async function getStaticProps({ params: { slug } }: { params: { slug: string } }) {

  const fileContent = fs.readFileSync(
    path.join(process.cwd(), 'lib', 'data', 'posts', `${slug}.mdx`),
    'utf8'
  )

  const { data, content } = matter(fileContent)

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        remarkGfm
      ],
      rehypePlugins: [
        rehypeHighlight,
        rehypeAutolinkHeadings,
      ],
    },
    parseFrontmatter: true
  })

  return {
    props: {
      post: {
        data,
        mdxSource
      }
    }
  }
}

export default JournalDetails