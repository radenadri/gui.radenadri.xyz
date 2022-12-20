import type { AppProps } from 'next/app'
import { MDXProvider } from '@mdx-js/react'

import MDXComponents from '@/components/MDXComponents'
import ThemeContextProvider from '@/store/ThemeContextProvider'

import 'inter-ui/inter.css'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <ThemeContextProvider>
      <MDXProvider components={MDXComponents}>
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeContextProvider>
  )
}
