import React, { ReactNode, useContext } from 'react';
import { FaHandPointUp } from 'react-icons/fa'
import { MdViewStream } from 'react-icons/md'
import { RiComputerFill, RiMovie2Fill } from 'react-icons/ri'

// Contexts
import ThemeContext from '../../contexts/theme'

// Components
import Header from '../Header'
import Sidebar from '../Sidebar'

type LayoutProps = {
  activeCategory: string;
  children: ReactNode
}

const Layout = ({ activeCategory, children }: LayoutProps) => {
  const { theme } = useContext(ThemeContext)
  const categories = {
    'popular-streaming': {
      name: 'Streaming',
      icon: <MdViewStream className={`fill-current group-hover:text-wine dark:group-hover:text-orange ${'popular-streaming' === activeCategory ? 'text-wine dark:text-orange' : 'text-gray-500 dark:text-white'}`} size={24} />
    },
    'popular-na-tv': {
      name: 'Na TV',
      icon: <RiComputerFill className={`fill-current group-hover:text-wine dark:group-hover:text-orange ${'popular-na-tv' === activeCategory ? 'text-wine dark:text-orange' : 'text-gray-500 dark:text-white'}`} size={24} />
    },
    'popular-para-alugar': {
      name: 'Para Alugar',
      icon: <FaHandPointUp className={`fill-current group-hover:text-wine dark:group-hover:text-orange ${'popular-para-alugar' === activeCategory ? 'text-wine dark:text-orange' : 'text-gray-500 dark:text-white'}`} size={24} />
    },
    'popular-nos-cinemas': {
      name: 'Nos Cinemas',
      icon: <RiMovie2Fill className={`fill-current group-hover:text-wine dark:group-hover:text-orange ${'popular-nos-cinemas' === activeCategory ? 'text-wine dark:text-orange' : 'text-gray-500 dark:text-white'}`} size={24} />
    }
  }

  return (
    <>
      <main className={`xl:flex ${theme}`}>
        <Sidebar categories={categories} activeCategory={activeCategory} />
        <div className='flex-grow dark:bg-black'>
          <Header title={categories[activeCategory].name} />
          {children}
        </div>
      </main>
    </>
  )
}

export default Layout;