import { useGSAP } from '@gsap/react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import React, { useRef } from 'react'
import { GoArrowUpRight } from "react-icons/go";


const LandingPage = () => {

    let tl = gsap.timeline();
    const anime = useRef();
    const anime2 = useRef();
    useGSAP(() => {
        tl.from(anime.current, {
            x: -100,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            delay: 1
        })
        tl.from(anime2.current, {
            y: 20,
            opacity: 0,
            duration: 0.1,
        })
    })


    return (
        <div data-scroll data-scroll-speed="-.3" className=' w-full h-screen pt-1 '>
            <div ref={anime} className="textstructure mt-52 px-20 overflow-hidden">
                {["We Create", "Eye Opening", "Presentation"].map((item, index) => {
                    return <div key={index} className="masker ">
                        <div className=' w-fit flex items-center '>
                            {index === 1 && (<motion.div initial={{ width: 0 }} animate={{ width: "9vw" }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }} className='w-[9vw] h-[5.5vw]  mt-5 rounded-xl overflow-hidden'>
                                <video autoPlay muted loop className=' w-full h-full object-cover ' src="src\assets\videos\6eb9eb9f647b2cd6e19d3a194a6421d1.mp4"></video>
                            </motion.div>)}
                            <h1 className=' uppercase text-[7.5vw] leading-[6.5vw] tracking-tighter font-medium'>{item}</h1>
                        </div>
                    </div>
                })}
            </div>
            <div ref={anime2} className=' border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-5 px-20'>
                {["For public and private companies", "From the first pitch to IPO "].map((item, index) => {
                    return <p key={index} className='text-xl  tracking-tight leading-none'>{item}</p>
                })}
                <div className="start flex gap-3">
                    <button
                        class="px-6 z-30 py-2 bg-[#F1F1F1] border-[1px] border-black  rounded-full text-black relative font-semibold font-sans after:-z-20 after:absolute after:h-1 after:w-1 after:bg-black  after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 text-xl hover:text-white"
                    >
                        START THE PROJECT
                    </button>
                    <button
                        class="px-3 z-30 py-2 bg-[#F1F1F1] border-[1px] border-black  rounded-full text-black relative font-semibold font-sans after:-z-20 after:absolute after:h-1 after:w-1 after:bg-black  after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 text-xl hover:text-white"
                    >
                        <GoArrowUpRight />
                    </button>

                </div>
            </div>
        </div>
    )
}

export default LandingPage
