import Layout from '@/layouts/Default'
import MDXRenderer from '@/components/MDXRenderer'
import MDXFileType from '@/types/MDXFileType'

import { getFileBySlug } from '@/lib/mdx'
import Head from 'next/head'

type MeProps = {
  authorDetails: MDXFileType
}

const Me = ({ authorDetails } : MeProps) => {
  const { code, frontmatter : { name } } = authorDetails

  return (
    <Layout>
      <Head>
        <title>Me | {name}</title>
      </Head>
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