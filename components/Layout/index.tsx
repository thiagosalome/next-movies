import React, { ReactNode, useContext } from 'react'
import { FaHandPointUp } from 'react-icons/fa'
import { MdViewStream } from 'react-icons/md'
import { RiComputerFill, RiMovie2Fill } from 'react-icons/ri'

// Contexts

// Components
import Header from 'components/Header'
import Sidebar from 'components/Sidebar'
import ThemeContext from 'contexts/theme'

type LayoutProps = {
  activeCategory: string;
  children: ReactNode
}

const Layout = ({ activeCategory, children }: LayoutProps) => {
  const { theme } = useContext(ThemeContext)
  const categories = {
    streaming: {
      name: 'Streaming',
      icon: <MdViewStream className={`fill-current group-hover:text-wine dark:group-hover:text-orange ${activeCategory === 'streaming' ? 'text-wine dark:text-orange' : 'text-gray-500 dark:text-white'}`} size={24} />
    },
    'na-tv': {
      name: 'Na TV',
      icon: <RiComputerFill className={`fill-current group-hover:text-wine dark:group-hover:text-orange ${activeCategory === 'na-tv' ? 'text-wine dark:text-orange' : 'text-gray-500 dark:text-white'}`} size={24} />
    },
    'para-alugar': {
      name: 'Para Alugar',
      icon: <FaHandPointUp className={`fill-current group-hover:text-wine dark:group-hover:text-orange ${activeCategory === 'para-alugar' ? 'text-wine dark:text-orange' : 'text-gray-500 dark:text-white'}`} size={24} />
    },
    'nos-cinemas': {
      name: 'Nos Cinemas',
      icon: <RiMovie2Fill className={`fill-current group-hover:text-wine dark:group-hover:text-orange ${activeCategory === 'nos-cinemas' ? 'text-wine dark:text-orange' : 'text-gray-500 dark:text-white'}`} size={24} />
    }
  }

  return (
    <>
      <main className={`xl:flex ${theme}`}>
        <Sidebar categories={categories} activeCategory={activeCategory} />
        <div className="flex-grow dark:bg-black">
          <Header title={categories[activeCategory].name} />
          {children}
        </div>
      </main>
    </>
  )
}

export default Layout
