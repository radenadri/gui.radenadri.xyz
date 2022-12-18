import Head from "next/head"

type MainHeadProps = {
  children?: React.ReactNode
}

const MainHead = ({ children } : MainHeadProps) => {
  return (
    <Head>
      <title>Adriana Eka Prayudha</title>
      <meta name="description" content="My blog" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      {children}
    </Head>
  )
}

export default MainHead