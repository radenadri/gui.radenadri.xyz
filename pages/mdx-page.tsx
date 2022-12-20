import { MDXLayoutRenderer } from "@/components/MDXLayoutRenderer"
import Layout from "@/layouts/Default"
import { getFileBySlug } from "@/lib/mdx"

export default function MdxPage({ authorDetails } : any) {
  const { code, frontMatter } = authorDetails

  return (
    <Layout>
      <div className="container">
        <MDXLayoutRenderer mdxSource={code} />
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const authorDetails = await getFileBySlug('authors', 'default')

  return {
    props: {
      authorDetails
    }
  }
}