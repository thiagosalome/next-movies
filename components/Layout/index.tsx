import React from 'react';

// Components
import Header from '../Header'
import Sidebar from '../Sidebar'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <main className='xl:flex'>
        <Sidebar />
        <div className='flex-grow dark:bg-black'>
          <Header />
          {children}
        </div>
      </main>
    </>
  )
}

export default Layout;