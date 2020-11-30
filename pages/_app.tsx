import { AppProps } from 'next/app'
import { useLayoutEffect } from 'react'

// Contexts
import ThemeContext from '../contexts/theme'

// Hooks
import useLocalStorage from '../hooks/useLocalStorage'

// Styles
import '../styles/tailwind.css'

function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useLocalStorage('theme', 'light')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Component {...pageProps} />
    </ThemeContext.Provider>
  )
}

export default App