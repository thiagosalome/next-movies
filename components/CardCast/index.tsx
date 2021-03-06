import React from 'react'
import Image from 'next/image'

type CardCastProps = {
  image: string;
  name: string;
  character: string;
  episodes: string;
}

const CardCast = ({
  image, name, character, episodes
}: CardCastProps) => (
  <div className="bg-white rounded-xl p-4 cursor-pointer dark:bg-black">
    <figure className="overflow-hidden relative w-full h-60 rounded-xl">
      <Image className="w-full h-full object-cover" src={image} layout='fill' alt={name} />
    </figure>
    <h4 className="text-sm text-black text-center mt-2 leading-4 dark:text-white">{name}</h4>
    <p className="text-xs text-black text-center mt-1 mb-3 dark:text-white">{character}</p>
    <p className="text-xs text-gray-500 text-center dark:text-white">{episodes}</p>
  </div>
)

export default CardCast
