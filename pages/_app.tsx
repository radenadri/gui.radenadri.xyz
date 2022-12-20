import type { AppProps } from 'next/app'

import ThemeContextProvider from '@/contexts/ThemeContextProvider'

import 'inter-ui/inter.css'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <ThemeContextProvider>
      <Component {...pageProps} />
    </ThemeContextProvider>
  )
}
