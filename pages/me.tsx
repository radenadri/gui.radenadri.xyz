import Layout from '@/layouts/Default'

import MDXRenderer from '@/components/MDXRenderer'
import Seo from '@/components/Seo'

import MDXFileType from '@/types/MDXFileType'

import { getFileBySlug } from '@/lib/mdx'
import PageTransition from '@/components/PageTransition'
import { useRef } from 'react'

type MeProps = {
  authorDetails: MDXFileType
  ref: any
}

const Me = ({ authorDetails }: MeProps) => {
  const { code } = authorDetails

  const ref = useRef()

  return (
    <PageTransition ref={ref.current}>
      <Layout>
        <Seo
          title="Me ✨"
          description="I’ve been working on the field for almost 3 years, currently i’ve got a lot of interest to website and also mobile apps technologies." />
        <div className="container">
          <MDXRenderer mdxSource={code} />
        </div>
      </Layout>
    </PageTransition>
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