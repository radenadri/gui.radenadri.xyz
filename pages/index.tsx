import Layout from '@/layouts/Default'

import LatestThought from '@/components/LatestThought'
import WhoAmI from '@/components/WhoAmI'
import Seo from '@/components/Seo'

import ThoughType from '@/types/ThoughtType'

import { getLatestPosts } from '@/lib/mdx'
import PageTransition from '@/components/PageTransition'
import { useRef } from 'react'

type HomeProps = {
  posts: Array<ThoughType>
  ref: any
}

const Home = ({ posts }: HomeProps) => {

  const ref = useRef()

  return (
    <PageTransition ref={ref.current}>
      <Layout>
        <Seo />
        <WhoAmI />
        <LatestThought thoughts={posts} />
      </Layout>
    </PageTransition>
  )
}

export function getStaticProps() {
  const posts = getLatestPosts(2)

  return {
    props: {
      posts
    }
  }
}

export default Home;
