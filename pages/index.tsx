import LatestThought from '@/components/LatestThought'
import Layout from '@/layouts/Default'
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
