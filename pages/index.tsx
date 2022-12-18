import { Inter } from '@next/font/google'

import MainHead from '../components/MainHead'
import Navbar from '../components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <MainHead />
      <main className={inter.className}>
        <Navbar />
      </main>
    </>
  )
}
