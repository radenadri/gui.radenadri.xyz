import type { AppProps } from 'next/app'

import { GeistProvider, CssBaseline, Themes } from '@geist-ui/core'

import '../styles/globals.scss'
import 'inter-ui/inter.css'

const breakpoints = {
  xs: { min: '0' },
  sm: { min: '650px' },
  md: { min: '900px' },
  lg: { min: '1280px' },
  xl: { min: '1920px' },
}

export default function App({ Component, pageProps }: AppProps) {
  const myTheme = Themes.createFromLight({
    type: 'myTheme',
    breakpoints,
  })

  return (
    <GeistProvider themes={[myTheme]} themeType="myTheme">
      <CssBaseline />
      <Component {...pageProps} />
    </GeistProvider>
  )
}
