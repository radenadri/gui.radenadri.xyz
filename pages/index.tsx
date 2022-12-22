import Layout from '@/layouts/Default'

import LatestThought from '@/components/LatestThought'
import WhoAmI from '@/components/WhoAmI'
import Seo from '@/components/Seo'

import ThoughType from '@/types/ThoughtType'

import { getLatestPosts } from '@/lib/mdx'

type HomeProps = {
  posts: Array<ThoughType>
}

const Home = ({ posts } : HomeProps) => {

  return (
    <Layout>
      <Seo />
      <WhoAmI />
      <LatestThought thoughts={posts} />
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = await getLatestPosts(2)

  return {
    props: {
      posts
    }
  }
}

export default Home;
