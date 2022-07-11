import React, { useEffect, useState } from 'react'

const Footer = ({ onRulesClicked }) => {
  const [isMakeToTop, setToTop] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', async (e) => {
      if (window.scrollY > 100) {
        setToTop(true)
      } else {
        setToTop(false)
      }
    })
  }, [])

  return (
    <div
      className={`fixed ${isMakeToTop ? 'top-0' : 'top-[10%]'} ${
        isMakeToTop && 'bg-[#1e1e1e93] p-5'
      }   left-1/2 w-[100%] -translate-x-1/2 md:left-[80%] md:w-[50%]`}
    >
      <div className="space-x-1 text-center font-lato font-[300] sm:space-x-10">
        <button
          onClick={onRulesClicked}
          className="mb-2 w-[125px] rounded-sm border-[1px] border-transparent bg-green-200 bg-gradient-to-br from-[#e03131] to-[#c2255c]  py-2 sm:mb-0 "
        >
          Rules
        </button>
        <a
          href="#"
          className="inline-block w-[125px] rounded-sm border-[1px] border-solid border-[#e03131] py-2 text-center hover:cursor-pointer "
        >
          Facebook
        </a>
      </div>
    </div>
  )
}

export default Footer
