import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Header, Footer, GameList } from '../components'
import Rules from '../components/modal/Rules'
import FooterTwo from '../components/FooterTwo'
const Home: NextPage = () => {
  const [isModalOpen, setModelOpen] = useState(true)
  const onModalClik = () => {
    setModelOpen(!isModalOpen)
  }

  //#212529
  return (
    <div className=" min-w-screen relative  mx-auto min-h-screen max-w-[1500px] bg-gradient-to-bl from-[#212529] to-[#1864ab] py-2 px-1 text-white sm:px-5">
      <Head>
        <title>GameVault Sweeps</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header onRulesClick={onModalClik} />
      <GameList />
      <Footer onRulesClicked={onModalClik} />
      <FooterTwo />
      {isModalOpen && <Rules onModalClick={onModalClik} />}
    </div>
  )
}

export default Home
