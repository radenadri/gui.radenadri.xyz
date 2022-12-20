import { useEffect, useState } from "react"
import { GeistProvider, CssBaseline } from '@geist-ui/core'

import ThemeContext from "@/contexts/ThemeContext"
import { coolLight, coolDark } from '@/themes/geist'

type ThemeContextProviderProps = {
  children: React.ReactNode
}

const ThemeContextProvider = ({ children } : ThemeContextProviderProps) => {
  const [theme, setTheme] = useState('coolLight')

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if (theme) {
      setTheme(theme)
    }
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <GeistProvider themes={[coolLight, coolDark]} themeType={theme}>
        <CssBaseline />
        {children}
      </GeistProvider>
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;