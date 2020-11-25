import React from 'react';
import { FaHandPointUp } from 'react-icons/fa'
import { MdViewStream } from 'react-icons/md'
import { RiComputerFill, RiMovie2Fill } from 'react-icons/ri'

const Sidebar: React.FC = () => {
  return (
    <aside className='w-64 flex-shrink-0 py-8 px-5 bg-white hidden xl:block'>
      <img className='w-36' src='/images/logo.png' alt='Next Movies' title='Next Movies' />
      <nav className='mt-16'>
        <ul>
          <li className='mb-4'>
            <a className='flex items-center p-2 w-full rounded-lg transition-all group hover:bg-wine hover:bg-opacity-20' href=''>
              <MdViewStream className='fill-current text-gray-500 group-hover:text-wine' size={24} />
              <span className='text-base text-gray-500 ml-3 group-hover:text-wine'>Streaming</span>
            </a>
          </li>
          <li className='mb-4'>
            <a className='flex items-center p-2 w-full rounded-lg transition-all group hover:bg-wine hover:bg-opacity-20' href=''>
              <RiComputerFill className='fill-current text-gray-500 group-hover:text-wine' size={24} />
              <span className='text-base text-gray-500 ml-3 group-hover:text-wine'>Na TV</span>
            </a>
          </li>
          <li className='mb-4'>
            <a className='flex items-center p-2 w-full rounded-lg transition-all group hover:bg-wine hover:bg-opacity-20' href=''>
              <FaHandPointUp className='fill-current text-gray-500 group-hover:text-wine' size={24} />
              <span className='text-base text-gray-500 ml-3 group-hover:text-wine'>Para alugar</span>
            </a>
          </li>
          <li className='mb-4'>
            <a className='flex items-center p-2 w-full rounded-lg transition-all group hover:bg-wine hover:bg-opacity-20' href=''>
              <RiMovie2Fill className='fill-current text-gray-500 group-hover:text-wine' size={24} />
              <span className='text-base text-gray-500 ml-3 group-hover:text-wine'>Nos cinemas</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>   
  )
}

export default Sidebar;