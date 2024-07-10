import React from 'react'

const Featured = () => {
    return (

        <div className=' w-full min-h-screen'>
            <h1 className=' text-[3.5vw] px-20 my-10'>Featured projects</h1>
            <div className=' w-full h-screen border-t-[1px] border-zinc-500 px-20 flex gap-8'>
                <div className="first py-5 w-[49%] h-screen">
                    <h1 className=' text-xl'><span className='h-3 w-3  bg-black inline-block rounded-full mr-2 mt-7'></span>FYDE</h1>
                    <div className=' w-full h-[75vh]  rounded-2xl mt-10 overflow-hidden hover:scale-95 transition-all transform duration-700'>
                        <img className=' w-full h-full object-cover hover:scale-110 transition-all transform duration-700' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                    </div>
                    <div className='buttons my-7 flex gap-4'>
                        <button className=' px-6 py-2 border-black border-[1px] rounded-full uppercase'>Audit</button>
                        <button className=' px-6 py-2 border-black border-[1px] rounded-full uppercase'>copywriting</button>
                        <button className=' px-6 py-2 border-black border-[1px] rounded-full uppercase'>sales deck</button>
                        <button className=' px-6 py-2 border-black border-[1px] rounded-full uppercase'>slides design</button>
                    </div>
                </div>
                <div className="second py-5 w-[49%] h-screen">
                    <h1 className=' text-xl'><span className='h-3 w-3 bg-black inline-block rounded-full mr-2 mt-7'></span>VISE</h1>
                    <div className=' w-full h-[75vh]  rounded-2xl mt-10 overflow-hidden hover:scale-95 transition-all transform duration-700'>
                        <img className='hover:scale-110 transition-all transform duration-700 w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                    </div>
                    <div className='buttons my-7 flex gap-4'>
                        <button className=' px-6 py-2 border-black border-[1px] rounded-full uppercase'>AGency</button>
                        <button className=' px-6 py-2 border-black border-[1px] rounded-full uppercase'>company presentation</button>
                    </div>
                </div>
            </div>

            <div className=' w-full h-screen border-zinc-500 px-20 flex gap-8'>
                <div className="first py-5 w-[49%] h-screen">
                    <h1 className=' text-xl'><span className='h-3 w-3 bg-black inline-block rounded-full mr-2 mt-7'></span>TRAWA</h1>
                    <div className=' w-full h-[75vh] rounded-2xl mt-10 overflow-hidden hover:scale-95 transition-all transform duration-700'>
                        <img className=' w-full h-full object-cover hover:scale-110 transition-all transform duration-700' src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" alt="" />
                    </div>
                    <div className='buttons my-7 flex gap-4'>
                        <button className=' px-6 py-2 border-black border-[1px] rounded-full uppercase'>brand identity</button>
                        <button className=' px-6 py-2 border-black border-[1px] rounded-full uppercase'>design research</button>
                        <button className=' px-6 py-2 border-black border-[1px] rounded-full uppercase'>investors deck</button>
                    </div>
                </div>
                <div className="second py-5 w-[49%] h-screen">
                    <h1 className=' text-xl'><span className='h-3 w-3 bg-black inline-block rounded-full mr-2 mt-7'></span>PREMIUM BLEND</h1>
                    <div className=' w-full h-[75vh]  rounded-2xl mt-10 overflow-hidden hover:scale-95 transition-all transform duration-700'>
                        <img className='hover:scale-110 transition-all transform duration-700 w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png" alt="" />
                    </div>
                    <div className='buttons my-7 flex gap-4'>
                        <button className=' px-6 py-2 border-black border-[1px] rounded-full uppercase'>Branded template</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured
