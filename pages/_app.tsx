import { useState } from 'react'
import type { AppProps } from 'next/app'

import { GeistProvider, CssBaseline } from '@geist-ui/core'
import ThemeContext from '@/contexts/ThemeContext'

import { coolLight, coolDark } from '@/themes/geist'

import 'inter-ui/inter.css'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {

  const [theme, setTheme] = useState('coolLight')

  return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <GeistProvider themes={[coolLight, coolDark]} themeType={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </GeistProvider>
      </ThemeContext.Provider>
  )
}
