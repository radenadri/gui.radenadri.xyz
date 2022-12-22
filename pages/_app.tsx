import type { AppProps } from 'next/app'
import { Themes, useTheme } from '@geist-ui/core'
import { MDXProvider } from '@mdx-js/react'

import MDXComponents from '@/components/MDXComponents'
import ThemeContextProvider from '@/store/ThemeContextProvider'

import 'inter-ui/inter.css'

const theme = Themes.getPresets();

export default function App({ Component, pageProps }: AppProps) {

  const lightPalette = theme.find((t) => t.type === 'light')?.palette
  const darkPalette = theme.find((t) => t.type === 'dark')?.palette

  return (
    <ThemeContextProvider>
      <MDXProvider components={MDXComponents}>
        <Component {...pageProps} />
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
