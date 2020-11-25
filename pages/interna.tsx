import Head from 'next/head'
import { FaPlay } from 'react-icons/fa'
import { IoMdArrowBack } from 'react-icons/io'

// Components
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Movies - Interna</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className='xl:flex'>
        <Sidebar />
        <div className='flex-grow'>
          <Header />
          <section className='bg-gray-100 rounded-tl-3xl h-dashboard-content overflow-y-auto xl:h-xl:dashboard-content'>
            <div id='banner' className='relative px-4 py-5'>
              <img src='https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/58PON1OrnBiX6CqEHgeWKVwrCn6.jpg' className='absolute top-0 left-0 h-full w-full object-cover' alt='Fear the Walking Dead' title='Fear the Walking Dead' />
              <button className='absolute left-4 top-6'><IoMdArrowBack color='#FFFFFF' size={35} /></button>
              <figure className='relative w-32 h-44 mt-16 overflow-hidden rounded-xl'>
                <img src='https://image.tmdb.org/t/p/w300_and_h450_bestv2/tbgPaIEZa9BuKKESdyapOn0CZh6.jpg' className='h-full w-full object-cover' alt='Fear the Walking Dead' title='Fear the Walking Dead' />
              </figure>
              <div className='relative mt-4'>
                <span className='text-sm text-white'>2015</span>
                <h2 className='text-xl text-white font-bold my-1'>Fear the Walking Dead</h2>
                <p className='text-sm text-white'>“Toda decisão é vida ou morte.”</p>
                <div className='text-base my-2'>
                  <span className='bg-clip-text' style={{ backgroundImage: 'linear-gradient(90deg, rgb(252, 238, 33) 90%, rgb(197, 200, 212) 90%);', WebkitTextFillColor: 'transparent' }}>★★★★★</span>
                </div>
                <div className='d-flex items-center'>
                  <p className='text-sm text-white mr-8 inline'><strong>43min</strong></p>
                  <p className='text-sm text-white inline'>Action & Adventure, Drama</p>
                </div>
              </div>
            </div>
            <div id='ver-trailer' className='px-4 py-5 flex items-center'>
              <div className='relative bg-orange rounded-full flex items-center justify-center h-6 w-6'>
                <FaPlay color='#FFFFFF' size={10} />
              </div>
              <p className='text-lg text-orange ml-3'>Ver trailer</p>
            </div>
            <div id='sinopse' className='px-4 pb-4'>
              <h3 className='text-2xl font-medium text-black'>Sinopse</h3>
              <p className='text-lg text-black leading-5 mt-2 mb-6'>
                Ambientada em Los Angeles, a série mostra o começo do apocalipse zumbi e a temível desintegração da sociedade pelos olhos de uma família disfuncional, que precisa se unir para tentar sobreviver ao caos do fim dos tempos.
              </p>
              <div className='grid grid-cols-2 grid-rows-3 gap-x-9 gap-y-5'>
                <div>
                  <h4 className='text-base font-medium text-black'>Situação</h4>
                  <p className='text-lg text-black'>Renovada</p>
                </div>
                <div>
                  <h4 className='text-base font-medium text-black'>Emissora</h4>
                  <p className='text-lg text-black'>AMC</p>
                </div>
                <div>
                  <h4 className='text-base font-medium text-black'>Tipo</h4>
                  <p className='text-lg text-black'>Roteirizada</p>
                </div>
                <div>
                  <h4 className='text-base font-medium text-black'>Idioma Original</h4>
                  <p className='text-lg text-black'>Inglês</p>
                </div>
                <div>
                  <h4 className='text-base font-medium text-black'>Classificação</h4>
                  <p className='text-lg text-black'>16 anos</p>
                </div>
              </div>
            </div>
            <div id='imagens-de-fundo' className='p-4'>
              <h3 className='text-2xl font-medium text-black'>Imagens de Fundo</h3>
              <div className='grid grid-cols-background-images grid-rows-background-images gap-5 mt-6 -mx-4 px-4 overflow-x-auto'>
                <figure className='overflow-hidden h-full w-full rounded-2xl'>
                  <img src='https://image.tmdb.org/t/p/w533_and_h300_bestv2/58PON1OrnBiX6CqEHgeWKVwrCn6.jpg' className='h-full w-full object-cover' alt=''/>
                </figure>
                <figure className='overflow-hidden h-full w-full rounded-2xl'>
                  <img src='https://image.tmdb.org/t/p/w533_and_h300_bestv2/agZoYZTHQq40H2WmuzvtnYmUCoc.jpg' className='h-full w-full object-cover' alt=''/>
                </figure>
                <figure className='overflow-hidden h-full w-full rounded-2xl'>
                  <img src='https://image.tmdb.org/t/p/w533_and_h300_bestv2/dvDkq5Mcv27vpHRvF1ywFGroh03.jpg' className='h-full w-full object-cover' alt=''/>
                </figure>
                <figure className='overflow-hidden h-full w-full rounded-2xl'>
                  <img src='https://image.tmdb.org/t/p/w533_and_h300_bestv2/wxErJ50CAG6Y3Wtk59TpVYXB5bJ.jpg' className='h-full w-full object-cover' alt=''/>
                </figure>
                <figure className='overflow-hidden h-full w-full rounded-2xl'>
                  <img src='https://image.tmdb.org/t/p/w533_and_h300_bestv2/92B6765nyQkIW8yLWt3pNcS6Cip.jpg' className='h-full w-full object-cover' alt=''/>
                </figure>
                <figure className='overflow-hidden h-full w-full rounded-2xl'>
                  <img src='https://image.tmdb.org/t/p/w533_and_h300_bestv2/dYJNSvRPu97Xc6REiTDxRvoA8JV.jpg' className='h-full w-full object-cover' alt=''/>
                </figure>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
