/* eslint-disable camelcase */
import React from 'react'
import Head from 'next/head'
import { format, parseISO } from 'date-fns'
import { useRouter } from 'next/router'
import { FaPlay } from 'react-icons/fa'
import { IoMdArrowBack } from 'react-icons/io'

// Components
import Layout from 'components/Layout'
import CardCast from 'components/CardCast'
import { GetStaticPaths, GetStaticProps } from 'next'

// Lib
import { getMedia } from 'lib/medias'
import { getLanguages } from 'lib/languages'

// Types
import MediaTv from 'types/MediaTv'

type TvProps = {
  media: MediaTv,
  language: {
    iso_639_1: string,
    english_name: string,
    name: string
  }
}

export default function Tv (props: TvProps) {
  const { media, language } = props
  const { isFallback, back } = useRouter()
  const fillYellow = media.vote_average * 10
  const fillGray = (10 - media.vote_average) * 10

  if (isFallback) {
    return <p>Carregando...</p>
  }

  function handleClickBack () {
    back()
  }

  return (
    <Layout activeCategory="streaming">
      <Head>
        <title>
          Next Movies - {media.name}
        </title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <section className="bg-gray-100 rounded-tl-3xl h-dashboard-content overflow-y-auto dark:bg-gray-800 xl:h-xl:dashboard-content">
        <div id="banner" className="relative px-4 py-5 xl:px-9">
          <img src={`https://image.tmdb.org/t/p/original/${media.backdrop_path}`} className="absolute top-0 left-0 h-full w-full object-cover" alt={media.name} title={media.name} />
          <button onClick={handleClickBack} className="absolute focus:outline-none left-4 top-6 xl:left-8"><IoMdArrowBack color="#FFFFFF" size={35} /></button>
          <div className="relative mt-16 xl:flex xl:items-start xl:mt-48">
            <figure className="w-32 h-44 mb-4 overflow-hidden rounded-xl xl:w-56 xl:h-80 xl:w xl:-mb-44">
              <img src={`https://image.tmdb.org/t/p/w500/${media.poster_path}`} className="h-full w-full object-cover" alt="Fear the Walking Dead" title="Fear the Walking Dead" />
            </figure>
            <div className="bg-black bg-opacity-30 p-3 rounded-2xl xl:ml-6">
              <span className="text-sm text-white">{format(parseISO(media.last_air_date), 'yyyy')}</span>
              <h2 className="text-xl text-white font-bold my-1">{media.name}</h2>
              <div className="text-base my-2 xl:text-2xl">
                <span className="bg-clip-text" style={{ backgroundImage: `linear-gradient(90deg, rgb(252, 238, 33) ${fillYellow}%, rgb(197, 200, 212) ${fillGray}%)`, WebkitTextFillColor: 'transparent' }}>★★★★★</span>
              </div>
              <div className="d-flex items-center">
                <p className="text-sm text-white mr-8 inline"><strong>{media.episode_run_time[0]}min</strong></p>
                <p className="text-sm text-white inline">{media.genres.map((genre) => genre.name).join(', ')}</p>
              </div>
            </div>
          </div>
        </div>
        <div id="ver-trailer" className="px-4 py-5 xl:px-9 xl:mt-36">
          <button className="flex items-center ">
            <div className="bg-orange rounded-full flex items-center justify-center h-6 w-6">
              <FaPlay color="#FFFFFF" size={10} />
            </div>
            <p className="text-lg text-orange ml-3">Ver trailer</p>
          </button>
        </div>
        <div id="sinopse" className="px-4 pb-4 xl:p-9 xl:ml-64 xl:-mt-56">
          <h3 className="text-2xl font-medium text-black dark:text-white">Sinopse</h3>
          <p className="text-lg text-black leading-5 mt-2 mb-6 dark:text-white">
            {media.overview}
          </p>
          <div className="grid grid-cols-2 grid-rows-3 gap-x-9 gap-y-5 xl:grid-cols-5 xl:grid-rows-1">
            <div>
              <h4 className="text-base font-medium text-black dark:text-white">Em produção</h4>
              <p className="text-lg text-black dark:text-white">{media.in_production ? 'Sim' : 'Não'}</p>
            </div>
            {
              media.networks[0] && (
                <div>
                  <h4 className="text-base font-medium text-black dark:text-white">Emissora</h4>
                  <p className="text-lg text-black dark:text-white">{media.networks[0].name}</p>
                </div>
              )
            }
            <div>
              <h4 className="text-base font-medium text-black dark:text-white">Temporadas</h4>
              <p className="text-lg text-black dark:text-white">{media.number_of_seasons} temporadas</p>
            </div>
            <div>
              <h4 className="text-base font-medium text-black dark:text-white">Idioma Original</h4>
              <p className="text-lg text-black dark:text-white">{language.name}</p>
            </div>
            <div>
              <h4 className="text-base font-medium text-black dark:text-white">Episódios</h4>
              <p className="text-lg text-black dark:text-white">{media.number_of_episodes} episódios</p>
            </div>
          </div>
        </div>
        <div id="imagens-de-fundo" className="p-4 xl:px-9">
          <h3 className="text-2xl font-medium text-black dark:text-white">Imagens de Fundo</h3>
          <div className="grid grid-cols-background-images grid-rows-background-images gap-5 mt-6 -mx-4 px-4 overflow-x-auto xl:grid-cols-12">
            {
              media.images.backdrops[0] && (
                <figure className="overflow-hidden h-full w-full rounded-2xl xl:col-start-1 xl:col-end-4 ">
                  <img src={`https://image.tmdb.org/t/p/w533_and_h300_bestv2/${media.images.backdrops[0].file_path}`} className="h-full w-full object-cover" alt="" />
                </figure>
              )
            }
            {
              media.images.backdrops[1] && (
                <figure className="overflow-hidden h-full w-full rounded-2xl xl:col-start-4 xl:col-end-8 ">
                  <img src={`https://image.tmdb.org/t/p/w533_and_h300_bestv2/${media.images.backdrops[1].file_path}`} className="h-full w-full object-cover" alt="" />
                </figure>
              )
            }
            {
              media.images.backdrops[2] && (
                <figure className="overflow-hidden h-full w-full rounded-2xl xl:col-start-8 xl:col-end-13">
                  <img src={`https://image.tmdb.org/t/p/w533_and_h300_bestv2/${media.images.backdrops[2].file_path}`} className="h-full w-full object-cover" alt="" />
                </figure>
              )
            }
            {
              media.images.backdrops[3] && (
                <figure className="overflow-hidden h-full w-full rounded-2xl xl:col-start-1 xl:col-end-6">
                  <img src={`https://image.tmdb.org/t/p/w533_and_h300_bestv2/${media.images.backdrops[3].file_path}`} className="h-full w-full object-cover" alt="" />
                </figure>
              )
            }
            {
              media.images.backdrops[4] && (
                <figure className="overflow-hidden h-full w-full rounded-2xl xl:col-start-6 xl:col-end-10">
                  <img src={`https://image.tmdb.org/t/p/w533_and_h300_bestv2/${media.images.backdrops[4].file_path}`} className="h-full w-full object-cover" alt="" />
                </figure>
              )
            }
            {
              media.images.backdrops[5] && (
                <figure className="overflow-hidden h-full w-full rounded-2xl xl:col-start-10 xl:col-end-13">
                  <img src={`https://image.tmdb.org/t/p/w533_and_h300_bestv2/${media.images.backdrops[5].file_path}`} className="h-full w-full object-cover" alt="" />
                </figure>
              )
            }
          </div>
        </div>
        <div id="os-mais-populares" className="p-4 xl:px-9">
          <h3 className="text-2xl font-medium text-black dark:text-white">Elenco</h3>
          <div className="grid grid-cols-card-movies grid-rows-2 gap-5 my-5 px-4 -mx-4 overflow-x-auto xl:grid-cols-5">
            {
              media.credits.cast.map((castItem) => (
                <CardCast
                  key={castItem.name}
                  image={`https://image.tmdb.org/t/p/w138_and_h175_face/${castItem.profile_path}`}
                  name={castItem.name}
                  character={castItem.character}
                  episodes={`Popularidade: ${castItem.popularity}`}
                />
              ))
            }
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params: { tv_id } }) => {
  const media: MediaTv = await getMedia('tv', tv_id)
  const languages = await getLanguages()
  const language = languages.find((lng) => lng.iso_639_1 === media.original_language)
  return {
    props: {
      media,
      language
    }
  }
}
