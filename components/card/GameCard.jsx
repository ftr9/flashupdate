import React from 'react'
import Image from 'next/image'
// opacity-30 transition-opacity duration-100 ease-linear hover:opacity-50
const GameCard = ({ name, image, link, indexNumber }) => {
  return (
    <div
      className={`w-[250px] space-y-6 overflow-hidden border-b-2 border-[#d6336c] pb-2 ${
        indexNumber === 0 ? 'ml-5 mt-6' : ''
      }`}
    >
      <a href={link} className=" relative block h-[150px] overflow-y-hidden">
        <Image
          src={image}
          height={480}
          objectFit="cover"
          className=" bg-black opacity-50"
        />
        <p className="absolute top-[58%] left-1/2 z-20 mb-1 w-full -translate-x-1/2 -translate-y-1/2 text-center font-lato text-[18px] font-[600] opacity-95  shadow-sm">
          <span className=" border-b-[2px] border-[white] drop-shadow-sm text-shadow-sm">
            click here to download
          </span>
        </p>
      </a>
      <a href={link} className=" block text-center">
        {name}
      </a>
    </div>
  )
}

export default GameCard
