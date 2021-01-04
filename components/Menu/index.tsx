import React, { ReactNode } from 'react'
import Link from 'next/link'

type Category = {
  name: string;
  icon: ReactNode
}

type MenuProps = {
  categories: {
    'streaming': Category;
    'na-tv': Category;
    'para-alugar': Category;
    'nos-cinemas': Category;
  },
  activeCategory: string;
}

const Menu = ({ categories, activeCategory }: MenuProps) => (
  <nav className="mt-16">
    <ul>
      {
        Object.keys(categories).map((category) => (
          <li key={category} className="mb-4">
            <Link href={`/category/${category}`}>
              <a className={`flex items-center p-2 w-full rounded-lg transition-all group hover:bg-wine hover:bg-opacity-20 dark:hover:bg-orange dark:hover:bg-opacity-20 ${category === activeCategory ? 'bg-wine bg-opacity-20 dark:bg-orange dark:bg-opacity-20' : ''}`}>
                {categories[category].icon}
                <span className={`text-base ml-3 group-hover:text-wine dark:group-hover:text-orange ${category === activeCategory ? 'text-wine dark:text-orange' : 'text-gray-500 dark:text-white'}`}>{categories[category].name}</span>
              </a>
            </Link>
          </li>
        ))
      }
    </ul>
  </nav>
)

export default Menu
