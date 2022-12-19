import type { AppProps } from 'next/app'

import { GeistProvider, CssBaseline } from '@geist-ui/core'

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
