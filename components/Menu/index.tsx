import React from 'react';
import { FaHandPointUp } from 'react-icons/fa'
import { MdViewStream } from 'react-icons/md'
import { RiComputerFill, RiMovie2Fill } from 'react-icons/ri'

const Menu: React.FC = () => {
  return (
    <nav className='mt-16'>
    <ul>
      <li className='mb-4'>
        <a className='flex items-center p-2 w-full rounded-lg transition-all group hover:bg-wine hover:bg-opacity-20 dark:hover:bg-orange dark:hover:bg-opacity-20' href=''>
          <MdViewStream className='fill-current text-gray-500 group-hover:text-wine dark:text-white dark:group-hover:text-orange' size={24} />
          <span className='text-base text-gray-500 ml-3 group-hover:text-wine dark:text-white dark:group-hover:text-orange'>Streaming</span>
        </a>
      </li>
      <li className='mb-4'>
        <a className='flex items-center p-2 w-full rounded-lg transition-all group hover:bg-wine hover:bg-opacity-20 dark:hover:bg-orange dark:hover:bg-opacity-20' href=''>
          <RiComputerFill className='fill-current text-gray-500 group-hover:text-wine dark:text-white dark:group-hover:text-orange' size={24} />
          <span className='text-base text-gray-500 ml-3 group-hover:text-wine dark:text-white dark:group-hover:text-orange'>Na TV</span>
        </a>
      </li>
      <li className='mb-4'>
        <a className='flex items-center p-2 w-full rounded-lg transition-all group hover:bg-wine hover:bg-opacity-20 dark:hover:bg-orange dark:hover:bg-opacity-20' href=''>
          <FaHandPointUp className='fill-current text-gray-500 group-hover:text-wine dark:text-white dark:group-hover:text-orange' size={24} />
          <span className='text-base text-gray-500 ml-3 group-hover:text-wine dark:text-white dark:group-hover:text-orange'>Para alugar</span>
        </a>
      </li>
      <li className='mb-4'>
        <a className='flex items-center p-2 w-full rounded-lg transition-all group hover:bg-wine hover:bg-opacity-20 dark:hover:bg-orange dark:hover:bg-opacity-20' href=''>
          <RiMovie2Fill className='fill-current text-gray-500 group-hover:text-wine dark:text-white dark:group-hover:text-orange' size={24} />
          <span className='text-base text-gray-500 ml-3 group-hover:text-wine dark:text-white dark:group-hover:text-orange'>Nos cinemas</span>
        </a>
      </li>
    </ul>
  </nav>
  )
}

export default Menu;