import React from 'react'
import { AppProps } from 'next/app'

// Contexts
import ThemeContext from 'contexts/theme'

// Hooks
import useLocalStorage from 'hooks/useLocalStorage'

// Styles
import 'styles/tailwind.css'

function App ({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useLocalStorage('theme', 'light')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Component {...pageProps} />
    </ThemeContext.Provider>
  )
}

export default App
