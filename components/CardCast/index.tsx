import React from 'react';

// import { Container } from './styles';

type CardCastProps = {
  image: string;
  name: string;
  character: string;
  episodes: string;
}

const CardCast= ({ image, name, character, episodes }: CardCastProps) => {
  return (
    <div className='bg-white rounded-xl p-4 cursor-pointer'>
      <figure className='overflow-hidden w-full h-60 rounded-xl'>
        <img className='w-full h-full object-cover' src={image} alt='Os Simpsons' />
      </figure>
      <h4 className='text-sm text-black text-center mt-2 leading-4'>{name}</h4>
      <p className='text-xs text-black text-center mt-1 mb-3'>{character}</p>
      <p className='text-xs text-gray-500 text-center'>{episodes}</p>
    </div>
  )
}

export default CardCast;