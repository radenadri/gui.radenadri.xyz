import Layout from '@/layouts/Default'

import MDXRenderer from '@/components/MDXRenderer'
import Seo from '@/components/Seo'

import MDXFileType from '@/types/MDXFileType'

import { getFileBySlug } from '@/lib/mdx'

type MeProps = {
  authorDetails: MDXFileType
}

const Me = ({ authorDetails } : MeProps) => {
  const { code } = authorDetails

  return (
    <Layout>
      <Seo title="Me" />
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