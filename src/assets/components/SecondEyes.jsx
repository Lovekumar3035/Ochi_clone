import React, { useEffect, useState } from 'react'

const SecondEyes = () => {

    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;


            let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

            setRotate(angle - 180);
        })
    })

    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.2" className=' w-full min-h-screen bg-[#CDEA68] py-40 relative'>
            <h1 className='text-center text-[13vw] uppercase font-bold tracking-[-0.9vw] leading-[10.4vw]'>Ready <br /> to start <br />the project ?</h1>
            <div data-scroll data-scroll-section data-scroll-speed="-.4" className='eyes py-20'>
                <div className=' absolute top-[40%] left-1/2 -translate-x-[50%] -translate-y-[50%]  flex gap-10'>
                    <div className=' w-[15vw] h-[15vw] bg-zinc-100 rounded-full flex items-center justify-center'>
                        <div className=' w-2/3 h-2/3 bg-zinc-900 rounded-full relative'>
                            <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className="line absolute top-1/2 left-1/2 -translate-x-[50%]  -translate-y-[50%] w-full h-10 ">
                                <div className=' w-10 h-10 bg-zinc-100 rounded-full'></div>
                            </div>
                        </div>
                    </div>

                    <div className=' w-[15vw] h-[15vw] bg-zinc-100 rounded-full flex items-center justify-center'>
                        <div className=' w-2/3 h-2/3 bg-zinc-900 rounded-full relative'>
                            <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className="line absolute top-1/2 left-1/2 -translate-x-[50%]  -translate-y-[50%] w-full h-10">
                                <div className=' w-10 h-10 bg-zinc-100 rounded-full'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className='mx-auto px-10 py-5 text-[1vw] bg-black rounded-full text-white  uppercase flex items-center gap-12 mt-16'>start the project
                <div className=' w-3 h-3 bg-zinc-100 rounded-full'></div>
            </button>
            <h1 className='text-center text-[1.1vw] mt-5'>OR</h1>
            <button className='mx-auto mt-5 px-10 py-5 text-[1vw] bg-[#CDEA68] rounded-full  border-[1px] border-black text-black  uppercase flex items-center gap-12'>Hello@ochi.design
                <div className=' w-3 h-3 bg-black rounded-full'></div>
            </button>
        </div>
    )
}

export default SecondEyes
