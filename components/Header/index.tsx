import React, { useContext } from 'react'
import Link from 'next/link'
import {
  FiMenu, FiMoon, FiSun, FiArrowLeft
} from 'react-icons/fi'
import ThemeContext from 'contexts/theme'
import Logo from 'components/Logo'
import Search from 'components/Search'

type HeaderProps = {
  title: string;
  showSidebar: boolean;
  setShowSidebar: (value: boolean) => void;
}

const Header = ({ title, showSidebar, setShowSidebar }: HeaderProps) => {
  const { theme, setTheme } = useContext(ThemeContext)

  function toggleSidebar () {
    setShowSidebar(!showSidebar)
  }

  return (
    <>
      <header className="bg-white py-3 px-4 flex items-center dark:bg-black xl:hidden">
        <button onClick={toggleSidebar} type="button" className="mr-3 focus:outline-none">
          {
            showSidebar
              ? <FiArrowLeft color="#91204D" size={32} />
              : <FiMenu color="#91204D" size={32} />
          }
        </button>
        <Link href='/'>
          <a>
            <Logo />
          </a>
        </Link>
        {
          (theme === 'light')
            ? <button type="button" className="ml-auto focus:outline-none" onClick={() => setTheme('dark')}><FiMoon color="#91204D" size={32} /></button>
            : <button type="button" className="ml-auto focus:outline-none" onClick={() => setTheme('light')}><FiSun color="#FA5302" size={32} /></button>
        }
      </header>
      <header className="bg-white py-5 px-4 flex items-center dark:bg-black xl:py-7">
        <h2 className="text-xl mr-2 font-medium flex-shrink-0 text-orange xl:text-3xl">{title}</h2>
        <Search />
        {
          (theme === 'light')
            ? <button type="button" className="ml-7 hidden xl:block focus:outline-none" onClick={() => setTheme('dark')}><FiMoon color="#91204D" size={32} /></button>
            : <button type="button" className="ml-7 hidden xl:block focus:outline-none" onClick={() => setTheme('light')}><FiSun color="#FA5302" size={32} /></button>
        }
      </header>
    </>
  )
}

export default Header
