import React, { useContext } from 'react';

// Contexts
import ThemeContext from '../../contexts/theme'

// Components
import Header from '../Header'
import Sidebar from '../Sidebar'

const Layout: React.FC = ({ children }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <>
      <main className={`xl:flex ${theme}`}>
        <Sidebar />
        <div className='flex-grow dark:bg-black'>
          <Header />
          {children}
        </div>
      </main>
    </>
  )
}

export default Layout;