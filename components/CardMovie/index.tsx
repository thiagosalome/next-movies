import React from 'react';

// import { Container } from './styles';

type CardMovieProps = {
  image: string;
  title: string;
  rate?: number;
  date: string;
}

const CardMovie= ({ image, title, rate, date }: CardMovieProps) => {
  return (
    <div className='bg-white rounded-xl p-4 cursor-pointer dark:bg-black'>
      <figure className='overflow-hidden w-full h-60 rounded-xl'>
        <img className='w-full h-full object-cover' src={image} alt='Os Simpsons' />
      </figure>
      <h4 className='text-sm text-black text-center mt-2 leading-4 dark:text-white'>{title}</h4>
      <div className='text-base text-center mt-1 mb-2'>
        <span className='bg-clip-text' style={{ backgroundImage: 'linear-gradient(90deg, rgb(252, 238, 33) 90%, rgb(197, 200, 212) 90%);', WebkitTextFillColor: 'transparent' }}>★★★★★</span>
      </div>
      <p className='text-xs text-gray-500 text-center dark:text-white'>{date}</p>
    </div>
  )
}

CardMovie.defaultProps = {
  rate: 5
}

export default CardMovie;