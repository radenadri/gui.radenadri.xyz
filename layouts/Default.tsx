import { Inter } from 'next/font/google'

import MainHead from '@/components/MainHead'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

const inter = Inter({
  subsets: ['latin'],
  variable: '--inter-font',
})

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {

  return (
    <>
      <MainHead />
      <main className={inter.variable}>
        <Navbar />
        {children}
      </main>
      <style global jsx>{`
        main {
          max-width: 650px;
          margin: 0 auto;
        }
      `}</style>
      <Footer />
    </>
  )
}

export default Layout
