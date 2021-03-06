/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import useSWR from 'swr'

// Components
import Layout from 'components/Layout'
import CardMedia from 'components/CardMedia'
import Loading from 'components/Loading'
import Logo from 'components/Logo'

// Utils
import fetcher from 'utils/fetcher'

// Types
import { SummaryMediaMovie } from 'types/MediaMovie'
import { SummaryMediaTv } from 'types/MediaTv'

export default function Search () {
  const { query } = useRouter()
  const { q } = query
  const responseMovie = useSWR(`/api/media?media_type=movie&query=${q}`, fetcher)
  const responseTv = useSWR(`/api/media?media_type=tv&query=${q}`, fetcher)

  if (!responseMovie.data || !responseTv.data) {
    return (
      <Layout>
        <div className='absolute top-0 bottom-0 left-0 right-0 bg-white flex flex-col items-center justify-center dark:bg-black'>
          <Logo />
          <Loading />
        </div>
      </Layout>
    )
  }

  return (
    <Layout activeCategory='streaming'>
      <Head>
        <title>Next Movies</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <section className="bg-gray-100 rounded-tl-3xl h-dashboard-content overflow-y-auto py-8 px-4 dark:bg-gray-800 xl:p-9 xl:h-xl:dashboard-content">
        <div id="resultados">
          <h3 className="text-2xl font-medium text-black dark:text-white">Resultados para &apos;{q}&apos;</h3>
          <h4 className="text-xl font-medium text-black mt-3 dark:text-white">Filmes</h4>
          <div className="grid grid-cols-card-movies grid-rows-2 gap-5 my-5 px-4 -mx-4 overflow-x-auto xl:grid-cols-5">
            {
              responseMovie.data.results.map((movie: SummaryMediaMovie) => (
                <CardMedia
                  link={`/movie/${movie.id}`}
                  key={movie.id}
                  image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  title={movie.title}
                  date={movie.release_date}
                  rate={movie.vote_average}
                />
              ))
            }
          </div>
          <h4 className="text-xl font-medium text-black mt-3 dark:text-white">TV</h4>
          <div className="grid grid-cols-card-movies grid-rows-2 gap-5 my-5 px-4 -mx-4 overflow-x-auto xl:grid-cols-5">
            {
              responseTv.data.results.map((tv: SummaryMediaTv) => (
                <CardMedia
                  link={`/tv/${tv.id}`}
                  key={tv.id}
                  image={`https://image.tmdb.org/t/p/w500/${tv.poster_path}`}
                  title={tv.name}
                  date={tv.first_air_date}
                  rate={tv.vote_average}
                />
              ))
            }
          </div>
        </div>
      </section>
    </Layout>
  )
}
