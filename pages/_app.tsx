import type { AppProps } from 'next/app'

import { Themes } from '@geist-ui/core'
import { MDXProvider } from '@mdx-js/react'

import MDXComponents from '@/components/MDXComponents'
import ThemeContextProvider from '@/store/ThemeContextProvider'

import '@/styles/globals.css'
// import 'inter-ui/inter.css'
import { AnimatePresence } from 'framer-motion'

const theme = Themes.getPresets();

const onExitComplete = () => {
  window.scrollTo({ top: 0 })
}

export default function App({ Component, pageProps }: AppProps) {

  const lightPalette = theme.find((t) => t.type === 'light')?.palette
  const darkPalette = theme.find((t) => t.type === 'dark')?.palette

  return (
    <ThemeContextProvider>
      <MDXProvider components={MDXComponents}>
        <AnimatePresence initial={false} mode="wait" onExitComplete={onExitComplete}>
          <Component {...pageProps} />
        </AnimatePresence>
        <style jsx global>{`
          .font-normal {
            font-weight: 400;
          }

          .container {
            padding: 32px 24px;
          }

          .h1 {
            font-size: 2.5rem;
            margin-bottom: 0.5rem;
            line-height: 1.2;
          }

          .p {
            color: ${lightPalette?.accents_6} !important;
          }

          .a {
            color: ${lightPalette?.accents_8} !important;
          }

          // Dark Mode
          .coolDark .p {
            color: ${darkPalette?.accents_6} !important;
          }

          .coolDark .a {
            color: ${darkPalette?.accents_8} !important;
          }
        `}</style>
      </MDXProvider>
    </ThemeContextProvider>
  )
}
