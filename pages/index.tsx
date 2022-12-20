import LatestThought from '@/components/LatestThought'
import Layout from '@/layouts/Default'
import WhoAmI from '@/components/WhoAmI'
import { getPosts } from '@/lib/mdx'

type HomeProps = {
  posts: any
}

const Home = ({ posts } : HomeProps) => {

  console.log({posts});

  return (
    <Layout>
      <WhoAmI />
      <LatestThought />
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = await getPosts(1)

  return {
    props: {
      posts
    }
  }
}

export default Home;
