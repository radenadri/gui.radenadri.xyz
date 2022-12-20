import LatestThought from '@/components/LatestThought';
import Layout from '@/components/Layout'
import WhoAmI from '@/components/WhoAmI'

const Home = () => {

  return (
    <Layout>
      <WhoAmI />
      <LatestThought />
    </Layout>
  )
}

export default Home;
