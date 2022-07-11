import React from 'react'
import GameCard from './card/GameCard'
import { VaultImage, juwaImage, milkywayImage, orionImage } from './assets'

const games = [
  {
    name: 'MilkyWay',
    link: 'https://milkywayapp.xyz',
    image: milkywayImage,
  },
  {
    name: 'Orion',
    link: 'http://orionstars.vip:8580/index.html',
    image: orionImage,
  },
  {
    name: 'Juwa',
    link: 'https://dl.juwa777.com/',
    image: juwaImage,
  },
  {
    name: 'GameVault',
    link: 'https://download.gamevault999.com/',
    image: VaultImage,
  },
]

const Header = () => {
  return (
    <div>
      <h2 className="mt-2 mb-5 text-center font-lato text-2xl font-bold">
        Games For You ..
      </h2>
      <div className="flex flex-wrap justify-center space-x-5 space-y-6 ">
        {games.map((game, index) => (
          <GameCard
            indexNumber={index}
            key={game.name}
            name={game.name}
            image={game.image}
            link={game.link}
          />
        ))}
      </div>
    </div>
  )
}

export default Header
