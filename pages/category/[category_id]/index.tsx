/* eslint-disable camelcase */
import React from 'react'
import Head from 'next/head'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { FaPlay } from 'react-icons/fa'

// Components
import Layout from 'components/Layout'
import CardMovie from 'components/CardMovie'

// Lib
import { getList, getLists } from 'lib/lists'

type MediaMovie = {
  adult: boolean,
  backdrop_path: string;
  genre_ids: number[],
  id: number,
  media_type: string,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number
}

type MediaTv = {
  backdrop_path: string,
  first_air_date: string,
  genre_ids: number[],
  id: number,
  media_type: string,
  name: string,
  origin_country: string[]
  original_language: string,
  original_name: string,
  overview: string,
  popularity: number,
  poster_path: string,
  vote_average: number,
  vote_count: number
}

type HomeProps = {
  populars: {
    name: string;
    items: MediaMovie[] | MediaTv[]
  },
  trailers: {
    items: MediaMovie[]
  }
}

export default function Home (props: HomeProps) {
  const { populars, trailers } = props
  const category = populars.name.replace('popular-', '')

  return (
    <Layout activeCategory={category}>
      <Head>
        <title>Next Movies</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <section className="bg-gray-100 rounded-tl-3xl h-dashboard-content overflow-y-auto py-8 px-4 dark:bg-gray-800 xl:p-9 xl:h-xl:dashboard-content">
        <div id="ultimos-trailers">
          <h3 className="text-2xl font-medium text-black dark:text-white">Últimos Trailers</h3>
          <div className="grid grid-cols-card-trailers grid-rows-card-trailers overflow-x-auto gap-4 my-6 px-4 -mx-4 xl:grid-cols-4 xl:grid-rows-xl:card-trailers xl:-mx-0 xl:px-0">
            <div className="row-start-1 row-end-4 relative rounded-2xl cursor-pointer overflow-hidden flex items-center justify-center group xl:row-start-1 xl:row-end-3">
              <img className="absolute object-cover w-full h-full transform scale-100 transition-all group-hover:scale-110" src={`https://image.tmdb.org/t/p/w500${trailers.items[0].poster_path}`} alt={trailers.items[0].title} title={trailers.items[0].title} />
              <div className="relative bg-black bg-opacity-40 rounded-full flex items-center justify-center h-16 w-16">
                <FaPlay color="#FFFFFF" size={30} />
              </div>
              <div className="absolute bottom-0 left-0 right-0 py-4 px-3 bg-black bg-opacity-40">
                <h4 className="text-sm text-center font-medium text-white mb-1">{trailers.items[0].title}</h4>
                <p className="text-xs text-center font-light text-white h-8 overflow-hidden">{trailers.items[0].overview}</p>
              </div>
            </div>
            <div className="row-start-4 row-end-7 relative rounded-2xl cursor-pointer overflow-hidden flex items-center justify-center group xl:row-start-1 xl:row-end-3">
              <img className="absolute object-cover w-full h-full transform scale-100 transition-all group-hover:scale-110" src={`https://image.tmdb.org/t/p/w500${trailers.items[1].poster_path}`} alt={trailers.items[1].title} title={trailers.items[1].title} />
              <div className="relative bg-black bg-opacity-40 rounded-full flex items-center justify-center h-16 w-16">
                <FaPlay color="#FFFFFF" size={30} />
              </div>
              <div className="absolute bottom-0 left-0 right-0 py-4 px-3 bg-black bg-opacity-40">
                <h4 className="text-sm text-center font-medium text-white mb-1">{trailers.items[1].title}</h4>
                <p className="text-xs text-center font-light text-white h-8 overflow-hidden">{trailers.items[1].overview}</p>
              </div>
            </div>
            <div className="row-start-1 row-end-3 relative rounded-2xl cursor-pointer overflow-hidden flex items-start justify-center group xl:row-start-1 xl:row-end-2">
              <img className="absolute object-cover w-full h-full transform scale-100 transition-all group-hover:scale-110" src={`https://image.tmdb.org/t/p/w500${trailers.items[2].backdrop_path}`} alt={trailers.items[2].title} title={trailers.items[2].title} />
              <div className="relative bg-black bg-opacity-40 rounded-full mt-8 flex items-center justify-center h-11 w-11">
                <FaPlay color="#FFFFFF" size={20} />
              </div>
              <div className="absolute bottom-0 left-0 right-0 py-4 px-3 bg-black bg-opacity-40">
                <h4 className="text-sm text-center font-medium text-white mb-1">{trailers.items[2].title}</h4>
                <p className="text-xs text-center font-light text-white h-8 overflow-hidden">{trailers.items[2].overview}</p>
              </div>
            </div>
            <div className="row-start-3 row-end-5 relative rounded-2xl cursor-pointer overflow-hidden flex items-start justify-center group xl:row-start-1 xl:row-end-2">
              <img className="absolute object-cover w-full h-full transform scale-100 transition-all group-hover:scale-110" src={`https://image.tmdb.org/t/p/w500${trailers.items[3].backdrop_path}`} alt={trailers.items[3].title} title={trailers.items[3].title} />
              <div className="relative bg-black bg-opacity-40 rounded-full mt-8 flex items-center justify-center h-11 w-11">
                <FaPlay color="#FFFFFF" size={20} />
              </div>
              <div className="absolute bottom-0 left-0 right-0 py-4 px-3 bg-black bg-opacity-40">
                <h4 className="text-sm text-center font-medium text-white mb-1">{trailers.items[3].title}</h4>
                <p className="text-xs text-center font-light text-white h-8 overflow-hidden">{trailers.items[3].overview}</p>
              </div>
            </div>
            <div className="row-start-5 row-end-7 relative rounded-2xl cursor-pointer overflow-hidden flex items-start justify-center group xl:row-start-2 xl:row-end-3 xl:col-start-3 xl:col-end-5">
              <img className="absolute object-cover w-full h-full transform scale-100 transition-all group-hover:scale-110" src={`https://image.tmdb.org/t/p/w500${trailers.items[4].backdrop_path}`} alt={trailers.items[4].title} title={trailers.items[4].title} />
              <div className="relative bg-black bg-opacity-40 rounded-full mt-8 flex items-center justify-center h-11 w-11">
                <FaPlay color="#FFFFFF" size={20} />
              </div>
              <div className="absolute bottom-0 left-0 right-0 py-4 px-3 bg-black bg-opacity-40">
                <h4 className="text-sm text-center font-medium text-white mb-1">{trailers.items[4].title}</h4>
                <p className="text-xs text-center font-light text-white h-8 overflow-hidden">{trailers.items[4].overview}</p>
              </div>
            </div>
          </div>
        </div>
        <div id="empresas">
          <h3 className="text-2xl font-medium text-black dark:text-white">Empresas</h3>
          <div className="my-6 lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-5">
            <div className="bg-white p-3 rounded-2xl flex items-center mb-5 dark:bg-black lg:inline-flex lg:mb-0">
              <figure className="overflow-hidden w-16 h-16 flex-shrink-0 rounded-2xl">
                <img className="object-cover w-full h-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Netflix_icon.svg/407px-Netflix_icon.svg.png" alt="Netflix" />
              </figure>
              <div className="mx-4">
                <h4 className="text-base text-black mb-1 dark:text-white">Netflix</h4>
                <p className="col-span-2 text-xs text-gray-500 dark:text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              </div>
              <a className="p-1 px-2 mw-20 flex-shrink-0 ml-auto rounded bg-orange text-white text-base text-center uppercase font-semibold" href="http://" target="_blank" rel="noopener noreferrer">R$ 19,99</a>
            </div>
            <div className="bg-white p-3 rounded-2xl flex items-center mb-5 dark:bg-black lg:inline-flex lg:mb-0">
              <figure className="overflow-hidden w-16 h-16 flex-shrink-0 rounded-2xl">
                <img className="object-cover w-full h-full" src="https://cdn6.aptoide.com/imgs/1/f/0/1f0feac18fbdaf45b63aaabae4ff3362_icon.png?w=160" alt="Amazon Prime Video" />
              </figure>
              <div className="mx-4">
                <h4 className="text-base text-black mb-1 dark:text-white">Amazon Prime Video</h4>
                <p className="col-span-2 text-xs text-gray-500 dark:text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              </div>
              <a className="p-1 px-2 mw-20 flex-shrink-0 ml-auto rounded bg-orange text-white text-base text-center uppercase font-semibold" href="http://" target="_blank" rel="noopener noreferrer">R$ 19,99</a>
            </div>
            <div className="bg-white p-3 rounded-2xl flex items-center mb-5 dark:bg-black lg:inline-flex lg:mb-0">
              <figure className="overflow-hidden w-16 h-16 flex-shrink-0 rounded-2xl">
                <img className="object-cover w-full h-full" src="https://cdn.mos.cms.futurecdn.net/ZaaM8Q3hpBHatBqMw8EUDF-970-80.jpg.webp" alt="Disney +" />
              </figure>
              <div className="mx-4">
                <h4 className="text-base text-black mb-1 dark:text-white">Disney +</h4>
                <p className="col-span-2 text-xs text-gray-500 dark:text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              </div>
              <a className="p-1 px-2 mw-20 flex-shrink-0 ml-auto rounded bg-orange text-white text-base text-center uppercase font-semibold" href="http://" target="_blank" rel="noopener noreferrer">R$ 19,99</a>
            </div>
            <div className="bg-white p-3 rounded-2xl flex items-center mb-5 dark:bg-black lg:inline-flex lg:mb-0">
              <figure className="overflow-hidden w-16 h-16 flex-shrink-0 rounded-2xl">
                <img className="object-cover w-full h-full" src="https://assets.materialup.com/uploads/147cc4e7-d765-4e1d-a329-cb51e3dd7b9c/preview.jpg" alt="Plex" />
              </figure>
              <div className="mx-4">
                <h4 className="text-base text-black mb-1 dark:text-white">Plex</h4>
                <p className="col-span-2 text-xs text-gray-500 dark:text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              </div>
              <a className="p-1 px-2 mw-20 flex-shrink-0 ml-auto rounded bg-orange text-white text-base text-center uppercase font-semibold" href="http://" target="_blank" rel="noopener noreferrer">R$ 19,99</a>
            </div>
          </div>
        </div>
        <div id="os-mais-populares">
          <h3 className="text-2xl font-medium text-black dark:text-white">Os mais populares</h3>
          <div className="grid grid-cols-card-movies grid-rows-2 gap-5 my-5 px-4 -mx-4 overflow-x-auto xl:grid-cols-5">
            {
              populars.items.map((item: MediaMovie | MediaTv) => {
                if (item.media_type === 'movie') {
                  const movie = item as MediaMovie
                  return (
                    <CardMovie
                      link={`/movie/${movie.id}`}
                      key={movie.id}
                      image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      title={movie.title}
                      date={format(new Date(movie.release_date), "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
                      rate={movie.vote_average}
                    />
                  )
                } else {
                  const tv = item as MediaTv
                  return (
                    <CardMovie
                      link={`/tv/${tv.id}`}
                      key={tv.id}
                      image={`https://image.tmdb.org/t/p/w500/${tv.poster_path}`}
                      title={tv.name}
                      date={format(new Date(tv.first_air_date), "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
                      rate={tv.vote_average}
                    />
                  )
                }
              })
            }
          </div>
        </div>
      </section>
    </Layout>
  )
}

// Generate the path for each posts
export async function getStaticPaths () {
  const lists = await getLists()
  const popularList = lists.results.filter((itemList) => itemList.name.includes('popular'))
  const paths = popularList.map((listItem) => ({
    params: {
      category_id: listItem.name.replace('popular-', '')
    }
  }))
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps ({ params: { category_id } }) {
  const lists = await getLists()
  const [trailers, populars] = lists.results.filter((itemList) => itemList.name.includes(category_id))
  const trailerList = await getList(trailers.id)
  const popularsList = await getList(populars.id)
  return {
    props: {
      trailers: trailerList,
      populars: popularsList
    }
  }
}
