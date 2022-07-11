import React from 'react'

const Header = ({ onRulesClick }) => {
  return (
    <div className=" h-[100px] items-center justify-between space-y-4 sm:flex">
      <h2 className=" font-rubik text-3xl font-bold">GameVault Sweeps</h2>
      <div className="hidden space-x-1 text-center font-lato font-[300] sm:space-x-10">
        <button
          onClick={onRulesClick}
          className=" w-[130px] rounded-sm bg-green-200 bg-gradient-to-br from-cyan-500  to-blue-500 py-2 "
        >
          Rules
        </button>
        <a
          href="#"
          className=" inline-block w-[130px] rounded-sm border-[1px] border-solid border-[#3b5998] py-2 text-center hover:cursor-pointer "
        >
          Facebook
        </a>
      </div>
    </div>
  )
}

export default Header
