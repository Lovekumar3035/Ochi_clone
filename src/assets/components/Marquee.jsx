import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
    return (
        <div data-scroll data-scroll-section data-scroll-speed=".3" className=' w-full py-20 bg-[#004D43] rounded-t-3xl text-white overflow-hidden'>
            <div className="text border-t-2 border-b-2 pb-5  border-zinc-300 flex  whitespace-nowrap overflow-hidden ">
                <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 5 }} className=' text-[20vw] tracking-tighter leading-none font-bold uppercase pr-32'>we are ochi</motion.h1>
                <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 5 }} className=' text-[20vw] tracking-tighter leading-none font-bold uppercase pr-32 '>we are ochi</motion.h1>
            </div>
        </div>
    )
}

export default Marquee
