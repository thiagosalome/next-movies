import React, { ReactNode } from 'react'
import Link from 'next/link'
import Logo from '../Logo'
import Menu from '../Menu'

type Category = {
  name: string;
  icon: ReactNode
}

type SidebarProps = {
  categories: {
    'streaming': Category;
    'na-tv': Category;
    'para-alugar': Category;
    'nos-cinemas': Category;
  },
  activeCategory: string;
  showSidebar: boolean;
}

const Sidebar = ({ categories, activeCategory, showSidebar }: SidebarProps) => (
  <aside className={`${showSidebar ? 'left-0' : '-left-full'} transition-left duration-500 absolute top-0 bottom-0 z-10 w-64 flex-shrink-0 py-8 px-5 bg-white dark:bg-black xl:left-0 xl:relative`}>
    <Link href='/'>
      <a>
        <Logo />
      </a>
    </Link>
    <Menu categories={categories} activeCategory={activeCategory} />
  </aside>
)

export default Sidebar
