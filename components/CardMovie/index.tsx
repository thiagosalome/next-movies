import React from 'react';
import Link from 'next/link'

type CardMovieProps = {
  link: string;
  image: string;
  title: string;
  rate?: number;
  date: string;
}

const CardMovie= ({ link, image, title, rate, date }: CardMovieProps) => {
  const fillYellow = rate * 10
  const fillGray = (10 - rate) * 10
  return (
    <Link href={link}>
      <a className='bg-white rounded-xl p-4 cursor-pointer dark:bg-black'>
        <figure className='overflow-hidden w-full h-60 rounded-xl'>
          <img className='w-full h-full object-cover' src={image} alt={title} />
        </figure>
        <h4 className='text-sm text-black text-center mt-2 leading-4 dark:text-white'>{title}</h4>
        <div className='text-base text-center mt-1 mb-2'>
          <span className='bg-clip-text' style={{ backgroundImage: `linear-gradient(90deg, rgb(252, 238, 33) ${fillYellow}%, rgb(197, 200, 212) ${fillGray}%)`, WebkitTextFillColor: 'transparent' }}>★★★★★</span>
        </div>
        <p className='text-xs text-gray-500 text-center dark:text-white'>{date}</p>
      </a>
    </Link>
  )
}

CardMovie.defaultProps = {
  rate: 5
}

export default CardMovie;