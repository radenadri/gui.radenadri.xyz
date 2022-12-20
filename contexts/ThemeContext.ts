import { createContext } from "react"

const ThemeContext = createContext({
  theme: 'coolLight',
  setTheme: (theme: string) => {
    console.log('current theme : ', theme)
  }
})

export default ThemeContext
