import React, { ReactNode } from 'react'
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
}

const Sidebar = ({ categories, activeCategory }: SidebarProps) => (
  <aside className="w-64 flex-shrink-0 py-8 px-5 bg-white hidden dark:bg-black xl:block">
    <Logo />
    <Menu categories={categories} activeCategory={activeCategory} />
  </aside>
)

export default Sidebar
