import Layout from '@/layouts/Default'

import { getFileBySlug } from '@/lib/mdx'
import MDXRenderer from '@/components/MDXRenderer'

type MeProps = {
  authorDetails: {
    code: string
    slug: string
    frontmatter: any
  }
}

const Me = ({ authorDetails } : MeProps) => {
  const { code } = authorDetails

  return (
    <Layout>
      <MDXRenderer mdxSource={code} />
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

export default Me;