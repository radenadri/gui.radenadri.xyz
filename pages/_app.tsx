import { GeistProvider, CssBaseline } from '@geist-ui/core'
import type { AppProps } from 'next/app'

import '../styles/globals.scss'
import 'inter-ui/inter.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GeistProvider>
      <CssBaseline />
      <Component {...pageProps} />
    </GeistProvider>
  )
}
