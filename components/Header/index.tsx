import React from 'react';
import { FiMenu, FiMoon, FiSearch, FiSun } from 'react-icons/fi'
import Logo from '../Logo'

const Header: React.FC = () => {
  return (
    <>
      <header className='bg-white py-3 px-4 flex items-center dark:bg-black xl:hidden'>
        <button className='mr-3'>
          <FiMenu color='#91204D' size={32}  />
        </button>
        <Logo />
        <button className='ml-auto'>
          {/* <FiMoon color='#91204D' size={32} /> */}
          <FiSun color='#FA5302' size={32} />
        </button>
      </header>
      <header className='bg-white py-5 px-4 flex items-center dark:bg-black xl:py-7'>
        <h2 className='text-xl font-medium text-orange xl:text-3xl'>Streaming</h2>
        <div className='w-96 hidden items-center pl-3 ml-auto bg-gray-100 rounded-2xl xl:flex'>
          <span className='h-full'>
            <FiSearch className='stroke-current text-gray-500' size={24} />
          </span>
          <input className='h-full w-full bg-transparent p-3 text-gray-500 outline-none' type='text'/>
        </div>
        <button className='ml-7 hidden xl:block'>
          {/* <FiMoon color='#91204D' size={32} /> */}
          <FiSun color='#FA5302' size={32} />
        </button>
      </header>
    </>
  )
}

export default Header;