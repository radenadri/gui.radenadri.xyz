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
      <Seo
        title="Me ✨"
        description="I’ve been working on the field for almost 3 years, currently i’ve got a lot of interest to website and also mobile apps technologies." />
      <div className="container">
        <MDXRenderer mdxSource={code} />
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

export default Me;