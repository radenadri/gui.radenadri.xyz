import { Inter } from '@next/font/google'
import Footer from '../components/Footer'

import MainHead from '../components/MainHead'
import Navbar from '../components/Navbar'
import WhoAmI from '../components/WhoAmI'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <MainHead />
      <main className={inter.className}>
        <Navbar />
        <WhoAmI />
      </main>
      <Footer />
    </>
  )
}
