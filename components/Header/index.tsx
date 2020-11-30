import React, { useContext } from 'react';
import { FiMenu, FiMoon, FiSearch, FiSun } from 'react-icons/fi'
import ThemeContext from '../../contexts/theme'
import Logo from '../Logo'

const Header: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <>
      <header className='bg-white py-3 px-4 flex items-center dark:bg-black xl:hidden'>
        <button className='mr-3'>
          <FiMenu color='#91204D' size={32}  />
        </button>
        <Logo />
        {
          (theme === 'light')
            ? <button className='ml-auto focus:outline-none' onClick={() => setTheme('dark')}><FiMoon color='#91204D' size={32} /></button>
            : <button className='ml-auto focus:outline-none' onClick={() => setTheme('light')}><FiSun color='#FA5302' size={32} /></button>
        }
      </header>
      <header className='bg-white py-5 px-4 flex items-center dark:bg-black xl:py-7'>
        <h2 className='text-xl font-medium text-orange xl:text-3xl'>Streaming</h2>
        <div className='w-96 hidden items-center pl-3 ml-auto bg-gray-100 rounded-2xl xl:flex'>
          <span className='h-full'>
            <FiSearch className='stroke-current text-gray-500' size={24} />
          </span>
          <input className='h-full w-full bg-transparent p-3 text-gray-500 outline-none' type='text'/>
        </div>
        {
          (theme === 'light')
            ? <button className='ml-7 hidden xl:block focus:outline-none' onClick={() => setTheme('dark')}><FiMoon color='#91204D' size={32} /></button>
            : <button className='ml-7 hidden xl:block focus:outline-none' onClick={() => setTheme('light')}><FiSun color='#FA5302' size={32} /></button>
        }
      </header>
    </>
  )
}

export default Header;