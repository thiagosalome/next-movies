import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

// Components
import Loading from 'components/Loading'
import Logo from 'components/Logo'
import Layout from 'components/Layout'

export default function Home () {
  const router = useRouter()

  useEffect(() => {
    router.push('category/streaming')
  }, [])

  return (
    <Layout>
      <div className='absolute top-0 bottom-0 left-0 right-0 bg-white flex flex-col items-center justify-center dark:bg-black'>
        <Logo />
        <Loading />
      </div>
    </Layout>
  )
}
