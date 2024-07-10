import React from 'react'

const Section = () => {
    return (
        <div className=' w-full min-h-screen'>
            <div className=' mt-20 px-20'>
                <button
                    class="px-6 z-30 mx-auto py-5 bg-[#212121] border-[1px] border-black  rounded-full text-white relative font-semibold font-sans after:-z-20 after:absolute after:h-1 after:w-1 after:bg-black  after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 text-xl hover:text-white uppercase border-none flex items-center justify-between gap-16"
                >view all case studies
                    <div className=' w-3 h-3 bg-zinc-100 rounded-full'></div>
                </button>
                <h1 className=' text-[3.5vw] mt-20'>Clients' reviews</h1>
            </div>
            <div className='w-full h-[70vh] px-20 mt-10  border-t-[1px] border-zinc-400 py-8 flex'>
                <div className="first w-[25%]  h-full">
                    <h1 className='w-fit text-[1.1vw]  border-b-[1px] border-black'>Karman Ventures</h1>
                </div>
                <div className="second w-[25%] h-full  flex flex-col gap-5">
                    <h1 className='w-fit text-[1.1vw]  mb-20'>Services:</h1>
                    <button className='w-fit px-6 py-2 border-black border-[1px] rounded-full uppercase'>investor deck</button>
                    <button className=' w-fit px-6 py-2 border-black border-[1px] rounded-full uppercase'>sales deck</button>
                </div>
                <div className="third w-[36%] h-full ">
                    <h1 className='w-fit text-[1.1vw]  mb-[94px]'>William Barnes</h1>
                    <div className=' w-[132px] h-[132px] bg-red-500 rounded-2xl overflow-hidden'>
                        <img className=' w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png" alt="" />
                    </div>
                    <p className='text-[1.1vw] mt-7
                    '>They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5</p>
                </div>
                <div className="fourth w-[15%] h-full">
                    <h1 className=' text-[1.1vw]  border-b-[1px text-zinc-500 text-right'>READ</h1>

                </div>
            </div>
            <div className='w-full'>
                <div className='w-full py-5  border-t-[1px] border-zinc-500 flex justify-between px-20 items-center'>
                    <div className=' w-[40%]'>
                        <h1 className='w-fit text-[1.1vw] border-b-[1px]'>Planetly</h1>
                    </div>
                    <div className=' w-[40%]'>
                        <h1 className='text-[1.1vw]'>Nina Walloch</h1>
                    </div>
                    <h1 className='text-[1.1vw] border-b-[1px] uppercase'>Read</h1>
                </div>
                <div className='w-full py-5  border-t-[1px] border-zinc-500 flex justify-between items-center px-20 '>
                    <div className='w-[40%]'>
                        <h1 className='w-fit text-[1.1vw] border-b-[1px]'>Workiz Easy</h1>
                    </div>
                    <div className='w-[40%]'>
                        <h1 className='   text-[1.1vw]'>Tomer Levy</h1>
                    </div>
                    <h1 className='text-[1.1vw] border-b-[1px] uppercase'>Read</h1>
                </div>
                <div className='w-full py-5  border-t-[1px] border-zinc-500 flex justify-between items-center px-20 '>
                    <div className='w-[40%]'>
                        <h1 className='w-fit text-[1.1vw] border-b-[1px]'>Premium Blend</h1>
                    </div>
                    <div className='w-[40%]'>
                        <h1 className='   text-[1.1vw]'>Ellen Kim</h1>
                    </div>
                    <h1 className='text-[1.1vw] border-b-[1px] uppercase'>Read</h1>
                </div>
                <div className='w-full py-5  border-t-[1px] border-zinc-500 flex justify-between items-center px-20 '>
                    <div className='w-[40%]'>
                        <h1 className='w-fit text-[1.1vw] border-b-[1px]'>Hypercare Systems</h1>
                    </div>
                    <div className='w-[40%]'>
                        <h1 className='   text-[1.1vw]'>Brendan Goss </h1>
                    </div>
                    <h1 className='text-[1.1vw] border-b-[1px] uppercase'>Read</h1>
                </div>
                <div className='w-full py-5  border-t-[1px] border-zinc-500 flex justify-between items-center px-20 '>
                    <div className='w-[40%]'>
                        <h1 className='w-fit text-[1.1vw] border-b-[1px]'>Premium Blend</h1>
                    </div>
                    <div className='w-[40%]'>
                        <h1 className='   text-[1.1vw]'>
                            Raff Labrie</h1>
                    </div>
                    <h1 className='text-[1.1vw] border-b-[1px] uppercase'>Read</h1>
                </div>
                <div className='w-full py-5  border-t-[1px] border-zinc-500 flex justify-between items-center px-20 '>
                    <div className='w-[40%]'>
                        <h1 className='w-fit text-[1.1vw] border-b-[1px]'>Orderlion</h1>
                    </div>
                    <div className='w-[40%]'>
                        <h1 className='   text-[1.1vw]'>Stefan Strohmer</h1>
                    </div>
                    <h1 className='text-[1.1vw] border-b-[1px] uppercase'>Read</h1>
                </div>
                <div className='w-full py-5  border-t-[1px] border-zinc-500 flex justify-between items-center px-20 '>
                    <div className='w-[40%]'>
                        <h1 className='w-fit text-[1.1vw] border-b-[1px]'>Black Book</h1>
                    </div>
                    <div className='w-[40%]'>
                        <h1 className='   text-[1.1vw]'>Jaci Smith</h1>
                    </div>
                    <h1 className='text-[1.1vw] border-b-[1px] uppercase'>Read</h1>
                </div>
                <div className='w-full py-5  border-t-[1px] border-zinc-500 flex justify-between items-center px-20 border-b-[1px] '>
                    <div className='w-[40%]'>
                        <h1 className='w-fit text-[1.1vw] border-b-[1px]'>Trawa Energy</h1>
                    </div>
                    <div className='w-[40%]'>
                        <h1 className='   text-[1.1vw]'>
                            David Budde</h1>
                    </div>
                    <h1 className='text-[1.1vw] border-b-[1px] uppercase'>Read</h1>
                </div>

            </div>
        </div>
    )
}

export default Section
