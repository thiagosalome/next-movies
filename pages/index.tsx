import Head from 'next/head'
import { FaPlay } from 'react-icons/fa'

// Components
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import CardMovie from '../components/CardMovie'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Movies</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className='xl:flex'>
        <Sidebar />
        <div className='flex-grow dark:bg-black'>
          <Header />
          <section className='bg-gray-100 rounded-tl-3xl h-dashboard-content overflow-y-auto py-8 px-4 dark:bg-gray-800 xl:p-9 xl:h-xl:dashboard-content'>
            <div id='ultimos-trailers'>
              <h3 className='text-2xl font-medium text-black dark:text-white'>Últimos Trailers</h3>
              <div className='grid grid-cols-card-trailers grid-rows-card-trailers overflow-x-auto gap-4 my-6 px-4 -mx-4 xl:grid-cols-4 xl:grid-rows-xl:card-trailers xl:-mx-0 xl:px-0'>
                <div className='row-start-1 row-end-4 relative rounded-2xl cursor-pointer overflow-hidden flex items-center justify-center group xl:row-start-1 xl:row-end-3'>
                  <img className='absolute object-cover w-full h-full transform scale-100 transition-all group-hover:scale-110' src='https://image.tmdb.org/t/p/w710_and_h400_multi_faces/mm6ex61CAcRCgd4ua0IZ3wAx0qW.jpg' alt='O Poderoso Chefão: Parte III' title='O Poderoso Chefão: Parte III'/>
                  <div className='relative bg-black bg-opacity-40 rounded-full flex items-center justify-center h-16 w-16'>
                    <FaPlay color='#FFFFFF' size={30} />
                  </div>
                  <div className='absolute bottom-0 left-0 right-0 py-4 px-5 bg-black bg-opacity-40'>
                    <h4 className='text-sm text-center font-medium text-white mb-1'>O Poderoso Chefão: Parte III</h4>
                    <p className='text-xs text-center font-light text-white'>O Poderoso Chefão - Desfecho: A Morte de Michael Corleone | Trailer Oficial</p>
                  </div>
                </div>
                <div className='row-start-4 row-end-7 relative rounded-2xl cursor-pointer overflow-hidden flex items-center justify-center group xl:row-start-1 xl:row-end-3'>
                  <img className='absolute object-cover w-full h-full transform scale-100 transition-all group-hover:scale-110' src='https://image.tmdb.org/t/p/w710_and_h400_multi_faces/zCHe8ckyufHVUZaoHu2DiF8evET.jpg' alt='O Poderoso Chefão: Parte III' title='O Poderoso Chefão: Parte III'/>
                  <div className='relative bg-black bg-opacity-40 rounded-full flex items-center justify-center h-16 w-16'>
                    <FaPlay color='#FFFFFF' size={30} />
                  </div>
                  <div className='absolute bottom-0 left-0 right-0 py-4 px-5 bg-black bg-opacity-40'>
                    <h4 className='text-sm text-center font-medium text-white mb-1'>A Princesa e a Plebeia: Nova Aventura</h4>
                    <p className='text-xs text-center font-light text-white'>A Princesa e a Plebeia – Nova Aventura | Trailer oficial | Netflix</p>
                  </div>
                </div>
                <div className='row-start-1 row-end-3 relative rounded-2xl cursor-pointer overflow-hidden flex items-center justify-center group xl:row-start-1 xl:row-end-2'>
                  <img className='absolute object-cover w-full h-full transform scale-100 transition-all group-hover:scale-110' src='https://image.tmdb.org/t/p/w710_and_h400_multi_faces/iU955nBcsc5Zr5e31eWU2xKVqHk.jpg' alt='O Poderoso Chefão: Parte III' title='O Poderoso Chefão: Parte III'/>
                  <div className='relative bg-black bg-opacity-40 rounded-full flex items-center justify-center h-11 w-11'>
                    <FaPlay color='#FFFFFF' size={20} />
                  </div>
                  <div className='absolute bottom-0 left-0 right-0 py-4 px-5 bg-black bg-opacity-40'>
                    <h4 className='text-sm text-center font-medium text-white mb-1'>Bárbaros</h4>
                    <p className='text-xs text-center font-light text-white'>Bárbaros | Trailer oficial | Netflix Brasil</p>
                  </div>
                </div>
                <div className='row-start-3 row-end-5 relative rounded-2xl cursor-pointer overflow-hidden flex items-center justify-center group xl:row-start-1 xl:row-end-2'>
                  <img className='absolute object-cover w-full h-full transform scale-100 transition-all group-hover:scale-110' src='https://image.tmdb.org/t/p/w710_and_h400_multi_faces/wGHiggyQ5qCZjo5Eyf5euEIs6Le.jpg' alt='O Poderoso Chefão: Parte III' title='O Poderoso Chefão: Parte III'/>
                  <div className='relative bg-black bg-opacity-40 rounded-full flex items-center justify-center h-11 w-11'>
                    <FaPlay color='#FFFFFF' size={20} />
                  </div>
                  <div className='absolute bottom-0 left-0 right-0 py-4 px-5 bg-black bg-opacity-40'>
                    <h4 className='text-sm text-center font-medium text-white mb-1'>Professor Iglesias</h4>
                    <p className='text-xs text-center font-light text-white'>Professor Iglesias – Parte 2 | Trailer oficial | Netflix</p>
                  </div>
                </div>
                <div className='row-start-5 row-end-7 relative rounded-2xl cursor-pointer overflow-hidden flex items-center justify-center group xl:row-start-2 xl:row-end-3 xl:col-start-3 xl:col-end-5'>
                  <img className='absolute object-cover w-full h-full transform scale-100 transition-all group-hover:scale-110' src='https://image.tmdb.org/t/p/w710_and_h400_multi_faces/9yKCJTOh9m3Lol2RY3kw99QPH6x.jpg' alt='O Poderoso Chefão: Parte III' title='O Poderoso Chefão: Parte III'/>
                  <div className='relative bg-black bg-opacity-40 rounded-full flex items-center justify-center h-11 w-11'>
                    <FaPlay color='#FFFFFF' size={20} />
                  </div>
                  <div className='absolute bottom-0 left-0 right-0 py-4 px-5 bg-black bg-opacity-40'>
                    <h4 className='text-sm text-center font-medium text-white mb-1'>His Dark Materials - Fronteiras do Universo</h4>
                    <p className='text-xs text-center font-light text-white'>His Dark Materials | Trailer Oficial HBO</p>
                  </div>
                </div>
              </div>
            </div>
            <div id='empresas'>
              <h3 className='text-2xl font-medium text-black dark:text-white'>Empresas</h3>
              <div className='my-6 lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-5'>
                <div className='bg-white p-3 rounded-2xl flex items-center mb-5 dark:bg-black lg:inline-flex lg:mb-0'>
                  <figure className='overflow-hidden w-16 h-16 flex-shrink-0 rounded-2xl'>
                    <img className='object-cover w-full h-full' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Netflix_icon.svg/407px-Netflix_icon.svg.png' alt='Netflix'/>
                  </figure>
                  <div className='mx-4'>
                    <h4 className='text-base text-black mb-1 dark:text-white'>Netflix</h4>
                    <p className='col-span-2 text-xs text-gray-500 dark:text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                  </div>
                  <a className='p-1 px-2 mw-20 flex-shrink-0 ml-auto rounded bg-orange text-white text-base text-center uppercase font-semibold' href='http://' target='_blank' rel='noopener noreferrer'>R$ 19,99</a>
                </div>
                <div className='bg-white p-3 rounded-2xl flex items-center mb-5 dark:bg-black lg:inline-flex lg:mb-0'>
                  <figure className='overflow-hidden w-16 h-16 flex-shrink-0 rounded-2xl'>
                    <img className='object-cover w-full h-full' src='https://cdn6.aptoide.com/imgs/1/f/0/1f0feac18fbdaf45b63aaabae4ff3362_icon.png?w=160' alt='Amazon Prime Video'/>
                  </figure>
                  <div className='mx-4'>
                    <h4 className='text-base text-black mb-1 dark:text-white'>Amazon Prime Video</h4>
                    <p className='col-span-2 text-xs text-gray-500 dark:text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                  </div>
                  <a className='p-1 px-2 mw-20 flex-shrink-0 ml-auto rounded bg-orange text-white text-base text-center uppercase font-semibold' href='http://' target='_blank' rel='noopener noreferrer'>R$ 19,99</a>
                </div>
                <div className='bg-white p-3 rounded-2xl flex items-center mb-5 dark:bg-black lg:inline-flex lg:mb-0'>
                  <figure className='overflow-hidden w-16 h-16 flex-shrink-0 rounded-2xl'>
                    <img className='object-cover w-full h-full' src='https://cdn.mos.cms.futurecdn.net/ZaaM8Q3hpBHatBqMw8EUDF-970-80.jpg.webp' alt='Disney +'/>
                  </figure>
                  <div className='mx-4'>
                    <h4 className='text-base text-black mb-1 dark:text-white'>Disney +</h4>
                    <p className='col-span-2 text-xs text-gray-500 dark:text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                  </div>
                  <a className='p-1 px-2 mw-20 flex-shrink-0 ml-auto rounded bg-orange text-white text-base text-center uppercase font-semibold' href='http://' target='_blank' rel='noopener noreferrer'>R$ 19,99</a>
                </div>
                <div className='bg-white p-3 rounded-2xl flex items-center mb-5 dark:bg-black lg:inline-flex lg:mb-0'>
                  <figure className='overflow-hidden w-16 h-16 flex-shrink-0 rounded-2xl'>
                    <img className='object-cover w-full h-full' src='https://assets.materialup.com/uploads/147cc4e7-d765-4e1d-a329-cb51e3dd7b9c/preview.jpg' alt='Plex'/>
                  </figure>
                  <div className='mx-4'>
                    <h4 className='text-base text-black mb-1 dark:text-white'>Plex</h4>
                    <p className='col-span-2 text-xs text-gray-500 dark:text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                  </div>
                  <a className='p-1 px-2 mw-20 flex-shrink-0 ml-auto rounded bg-orange text-white text-base text-center uppercase font-semibold' href='http://' target='_blank' rel='noopener noreferrer'>R$ 19,99</a>
                </div>
              </div>
            </div>
            <div id='os-mais-populares'>
              <h3 className='text-2xl font-medium text-black dark:text-white'>Os mais populares</h3>
              <div className='grid grid-cols-card-movies grid-rows-2 gap-5 my-5 px-4 -mx-4 overflow-x-auto xl:grid-cols-5'>
                <CardMovie image='https://image.tmdb.org/t/p/w220_and_h330_face/tn8viCBxP2xdQ7SS2fww7zeoPwe.jpg' title='An Honest Liar' date='18 de abr de 2014' />
                <CardMovie image='https://image.tmdb.org/t/p/w220_and_h330_face/gOdYUhq6kexSzkobAvbvDiflg0l.jpg' title='Atração Mortal' date='31 de mar de 1989' />
                <CardMovie image='https://image.tmdb.org/t/p/w220_and_h330_face/yQZCTiMWnXNTeKtnBAOmGdUT0rf.jpg' title='Dead Rising: Endgame' date='20 de jun de 2016' />
                <CardMovie image='https://image.tmdb.org/t/p/w220_and_h330_face/2rC6JvsP6O673HSzmhmoxmn6MOb.jpg' title='O Escondido' date='30 de out de 1987' />
                <CardMovie image='https://image.tmdb.org/t/p/w220_and_h330_face/13ogcfzZ0vUfB7zgnYUCV83ByvC.jpg' title='Uma Mulher Desejada' date='26 de jan de 1994' />
                <CardMovie image='https://image.tmdb.org/t/p/w220_and_h330_face/owGZCAje2VKrGGdwxM7peVwhErx.jpg' title='Colheita Maldita' date='09 de mar de 1984' />
                <CardMovie image='https://image.tmdb.org/t/p/w220_and_h330_face/tq68HwUioABtXx03ujTK1chR6Ug.jpg' title='200 Cigarros' date='26 de fev de 1999' />
                <CardMovie image='https://image.tmdb.org/t/p/w220_and_h330_face/w6kJXPELCTjcGe1nSEHQgAoVZVX.jpg' title='A Colmeia' date='14 de set de 2015' />
                <CardMovie image='https://image.tmdb.org/t/p/w220_and_h330_face/rQ00XrDhtLZqxWMJsMiWiajfbkQ.jpg' title='Dead Rising: Watchtower - O Filme' date='27 de mar de 2015' />
                <CardMovie image='https://image.tmdb.org/t/p/w220_and_h330_face/fz3RPQPquiyb4xi0isCIf6lIx7F.jpg' title='A Qualquer Custo' date='12 de ago de 2016' />
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
