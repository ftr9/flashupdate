import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GrClose } from 'react-icons/gr'
const listVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
}
const listElement = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  show: {
    opacity: 1,
    x: 0,
  },
}
const Rules = ({ onModalClick }) => {
  return (
    <AnimatePresence>
      <motion.div
        variants={listVariant}
        initial={'hidden'}
        animate="show"
        className="rulesModal sm:w-[600px]"
        exit={{ opacity: 0 }}
      >
        <div className="item-center flex justify-between">
          <h2 className=" text-2xl font-bold text-black">
            CASHOUT & CASHIN RULES
          </h2>
          <button
            className=" rounded-full bg-transparent p-2 sm:bg-[#ffffff19]"
            onClick={onModalClick}
          >
            {<GrClose size={20} />}
          </button>
        </div>
        <div className="mt-5 space-y-1">
          <motion.div className="modalListEl" variants={listElement}>
            <span className="modalListNum"></span>
            <p className=" leading-5">
              The minimum deposit is 10 doller for every Game.
            </p>
          </motion.div>
          <motion.div className="modalListEl" variants={listElement}>
            <span className=" modalListNum"></span>
            <p className="leading-5">
              The minimum cashout is 50 doller for every game.
            </p>
          </motion.div>
          <motion.div className="modalListEl" variants={listElement}>
            <span className="modalListNum"></span>
            <p className="leading-5">
              Maximum payout is 10 times of the last deposit.
            </p>
          </motion.div>
          <motion.div className="modalListEl" variants={listElement}>
            <span className="modalListNum"></span>
            <p className="leading-5">
              Credit out of the limit will be wiped out from the system.
            </p>
          </motion.div>
        </div>

        <div className="mt-7 text-center text-black">
          <span className="font-semibold">Note :</span> We offer 10% bonus on
          most of the deposits. We donot offer any freeplay or credit right now.
          We work hard and try our best.
        </div>
        <div className="mt-5 text-center text-xl font-semibold text-black">
          We work hard and try our best.
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Rules
