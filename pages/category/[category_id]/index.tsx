/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { FaPlay } from 'react-icons/fa'
import { useRouter } from 'next/router'

// Components
import Layout from 'components/Layout'
import CardMedia from 'components/CardMedia'
import Modal from 'components/Modal'

// Lib
import { getList, getLists } from 'lib/lists'

// Types
import { SummaryMediaMovie, FullMediaMovie } from 'types/MediaMovie'
import { SummaryMediaTv } from 'types/MediaTv'
import Network from 'types/Network'

type HomeProps = {
  populars: {
    name: string;
    items: SummaryMediaMovie[]
  },
  trailers: {
    items: SummaryMediaMovie[]
  }
}

export default function Home (props: HomeProps) {
  const { populars, trailers } = props
  const { asPath } = useRouter()
  const category = populars.name.replace('popular-', '')
  const [enterprises, setEnterprises] = useState<Network[]>([])
  const enterprisesList = {
    streaming: {
      network: [213, 1024, 2739, 4142]
    },
    'na-tv': {
      network: [41, 49, 19, 2076]
    },
    'para-alugar': {
      network: [1102, 1377, 247]
    },
    'nos-cinemas': {
      company: [2, 7, 4, 5]
    }
  }
  const [showModal, setShowModal] = useState({
    visible: false,
    content: null
  })

  const modal = (
    <Modal visible={showModal.visible} setVisible={(visible: boolean) => setShowModal({ ...showModal, visible })}>
      {showModal.content}
    </Modal>
  )

  useEffect(() => {
    function getCompanies () {
      const enterpriseCategory = enterprisesList[category]
      const enterpriseType = Object.keys(enterpriseCategory)[0]
      const companiesPromises = enterpriseCategory[enterpriseType].map(id => fetch(`/api/${enterpriseType}?id=${id}`))

      Promise.all(companiesPromises)
        .then((responses) => {
          const jsonResponses = responses.map((response: Response) => response.json())

          Promise.all(jsonResponses)
            .then(response => {
              setEnterprises(response)
            })
        })
    }

    getCompanies()
  }, [asPath])

  async function handleContentModal (mediaType: string, id: number) {
    const mediaAPI = await fetch(`/api/media?media_type=${mediaType}&id=${id}`)
    const media: FullMediaMovie = await mediaAPI.json()
    if (media.videos.results.length > 0) {
      const content = (
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${media.videos.results[0].key}`}
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )
      setShowModal({
        visible: true,
        content
      })
    }
  }

  return (
    <Layout activeCategory={category}>
      {modal}
      <Head>
        <title>Next Movies</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <section className="bg-gray-100 rounded-tl-3xl h-dashboard-content overflow-y-auto py-8 px-4 dark:bg-gray-800 xl:p-9 xl:h-xl:dashboard-content">
        <div id="ultimos-trailers">
          <h3 className="text-2xl font-medium text-black dark:text-white">Últimos Trailers</h3>
          <div className="grid grid-cols-card-trailers grid-rows-card-trailers overflow-x-auto gap-4 my-6 px-4 -mx-4 xl:grid-cols-4 xl:grid-rows-xl:card-trailers xl:-mx-0 xl:px-0">
            <div onClick={() => handleContentModal(trailers.items[0].media_type, trailers.items[0].id)} className="row-start-1 row-end-4 relative rounded-2xl cursor-pointer overflow-hidden flex items-center justify-center group xl:row-start-1 xl:row-end-3">
              <img className="absolute object-cover w-full h-full transform scale-100 transition-all group-hover:scale-110" src={`https://image.tmdb.org/t/p/w500${trailers.items[0].poster_path}`} alt={trailers.items[0].title} title={trailers.items[0].title} />
              <div className="relative bg-black bg-opacity-40 rounded-full flex items-center justify-center h-16 w-16">
                <FaPlay color="#FFFFFF" size={30} />
              </div>
              <div className="absolute bottom-0 left-0 right-0 py-4 px-3 bg-black bg-opacity-40">
                <h4 className="text-sm text-center font-medium text-white mb-1">{trailers.items[0].title}</h4>
                <p className="text-xs text-center font-light text-white h-8 overflow-hidden">{trailers.items[0].overview}</p>
              </div>
            </div>
            <div onClick={() => handleContentModal(trailers.items[1].media_type, trailers.items[1].id)} className="row-start-4 row-end-7 relative rounded-2xl cursor-pointer overflow-hidden flex items-center justify-center group xl:row-start-1 xl:row-end-3">
              <img className="absolute object-cover w-full h-full transform scale-100 transition-all group-hover:scale-110" src={`https://image.tmdb.org/t/p/w500${trailers.items[1].poster_path}`} alt={trailers.items[1].title} title={trailers.items[1].title} />
              <div className="relative bg-black bg-opacity-40 rounded-full flex items-center justify-center h-16 w-16">
                <FaPlay color="#FFFFFF" size={30} />
              </div>
              <div className="absolute bottom-0 left-0 right-0 py-4 px-3 bg-black bg-opacity-40">
                <h4 className="text-sm text-center font-medium text-white mb-1">{trailers.items[1].title}</h4>
                <p className="text-xs text-center font-light text-white h-8 overflow-hidden">{trailers.items[1].overview}</p>
              </div>
            </div>
            <div onClick={() => handleContentModal(trailers.items[2].media_type, trailers.items[2].id)} className="row-start-1 row-end-3 relative rounded-2xl cursor-pointer overflow-hidden flex items-start justify-center group xl:row-start-1 xl:row-end-2">
              <img className="absolute object-cover w-full h-full transform scale-100 transition-all group-hover:scale-110" src={`https://image.tmdb.org/t/p/w500${trailers.items[2].backdrop_path}`} alt={trailers.items[2].title} title={trailers.items[2].title} />
              <div className="relative bg-black bg-opacity-40 rounded-full mt-8 flex items-center justify-center h-11 w-11">
                <FaPlay color="#FFFFFF" size={20} />
              </div>
              <div className="absolute bottom-0 left-0 right-0 py-4 px-3 bg-black bg-opacity-40">
                <h4 className="text-sm text-center font-medium text-white mb-1">{trailers.items[2].title}</h4>
                <p className="text-xs text-center font-light text-white h-8 overflow-hidden">{trailers.items[2].overview}</p>
              </div>
            </div>
            <div onClick={() => handleContentModal(trailers.items[3].media_type, trailers.items[3].id)} className="row-start-3 row-end-5 relative rounded-2xl cursor-pointer overflow-hidden flex items-start justify-center group xl:row-start-1 xl:row-end-2">
              <img className="absolute object-cover w-full h-full transform scale-100 transition-all group-hover:scale-110" src={`https://image.tmdb.org/t/p/w500${trailers.items[3].backdrop_path}`} alt={trailers.items[3].title} title={trailers.items[3].title} />
              <div className="relative bg-black bg-opacity-40 rounded-full mt-8 flex items-center justify-center h-11 w-11">
                <FaPlay color="#FFFFFF" size={20} />
              </div>
              <div className="absolute bottom-0 left-0 right-0 py-4 px-3 bg-black bg-opacity-40">
                <h4 className="text-sm text-center font-medium text-white mb-1">{trailers.items[3].title}</h4>
                <p className="text-xs text-center font-light text-white h-8 overflow-hidden">{trailers.items[3].overview}</p>
              </div>
            </div>
            <div onClick={() => handleContentModal(trailers.items[4].media_type, trailers.items[4].id)} className="row-start-5 row-end-7 relative rounded-2xl cursor-pointer overflow-hidden flex items-start justify-center group xl:row-start-2 xl:row-end-3 xl:col-start-3 xl:col-end-5">
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
            {
              enterprises.map((enterprise: Network) => (
                <div key={enterprise.id} className="bg-white p-3 rounded-2xl flex items-center mb-5 dark:bg-black lg:inline-flex lg:mb-0">
                  <figure className="overflow-hidden w-16 h-16 flex-shrink-0 rounded-2xl">
                    <img className="object-contain w-full h-full" src={`https://image.tmdb.org/t/p/original/${enterprise.logo_path}`} alt={enterprise.name} />
                  </figure>
                  <div className="mx-4">
                    <h4 className="text-base text-black mb-1 dark:text-white">{enterprise.name}</h4>
                    <p className="col-span-2 text-xs text-gray-500 dark:text-white">{enterprise.headquarters}</p>
                  </div>
                  <a className="p-1 px-2 mw-20 flex-shrink-0 ml-auto rounded bg-orange text-white text-base text-center uppercase font-semibold" href={enterprise.homepage} target="_blank" rel="noopener noreferrer">Acessar</a>
                </div>
              ))
            }
          </div>
        </div>
        <div id="os-mais-populares">
          <h3 className="text-2xl font-medium text-black dark:text-white">Os mais populares</h3>
          <div className="grid grid-cols-card-movies grid-rows-2 gap-5 my-5 px-4 -mx-4 overflow-x-auto xl:grid-cols-5">
            {
              populars.items.map((item: SummaryMediaMovie | SummaryMediaTv) => {
                if (item.media_type === 'movie') {
                  const movie = item as SummaryMediaMovie
                  return (
                    <CardMedia
                      link={`/movie/${movie.id}?category=${category}`}
                      key={movie.id}
                      image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      title={movie.title}
                      date={movie.release_date}
                      rate={movie.vote_average}
                    />
                  )
                } else {
                  const tv = item as SummaryMediaTv
                  return (
                    <CardMedia
                      link={`/tv/${tv.id}?category=${category}`}
                      key={tv.id}
                      image={`https://image.tmdb.org/t/p/w500/${tv.poster_path}`}
                      title={tv.name}
                      date={tv.first_air_date}
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
export const getStaticPaths: GetStaticPaths = async () => {
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

export const getStaticProps: GetStaticProps = async ({ params: { category_id } }) => {
  const lists = await getLists()
  const [populars, trailers] = lists.results.filter((itemList) => itemList.name.includes(category_id))
  const trailerList = await getList(trailers.id)
  const popularsList = await getList(populars.id)
  return {
    props: {
      trailers: trailerList,
      populars: popularsList
    }
  }
}
