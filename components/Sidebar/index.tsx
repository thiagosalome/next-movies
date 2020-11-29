import React from 'react';
import Logo from '../Logo'
import Menu from '../Menu';

const Sidebar: React.FC = () => {
  return (
    <aside className='w-64 flex-shrink-0 py-8 px-5 bg-white hidden dark:bg-black xl:block'>
      <Logo />
      <Menu />
    </aside>   
  )
}

export default Sidebar;