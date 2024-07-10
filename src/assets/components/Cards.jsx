import React from 'react'

const Cards = () => {
    return (
        <div className=' w-full h-screen flex gap-6 px-20 py-40 text-white'>
            <div className="left w-1/2 h-[55vh] bg-[#004D43] rounded-3xl overflow-hidden">
                <div className=' w-full h-[85%] flex justify-center items-center'>
                    <img className=' w-32 mt-12' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                </div>
                <button className='ml-10 px-6 py-2 text-[0.9vw] border-[1px] border-[#CDEA68] text-[#CDEA68] rounded-full'>©️2019-2022</button>
            </div>
            <div className="mid w-1/4 h-[55vh] bg-[#212121] rounded-3xl overflow-hidden">
                <div className=' w-full h-[85%] flex justify-center items-center'>
                    <img className=' w-32 mt-12' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                </div>
                <button className='text-[0.9vw] ml-10 px-6 py-2 border-[1px]  rounded-full uppercase'>rating 5.0 on clutch</button>
            </div>
            <div className="right w-1/4 h-[55vh] bg-[#212121] rounded-3xl overflow-hidden">
                <div className=' w-full h-[85%] flex justify-center items-center'>
                    <img className=' w-32 mt-12' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                </div>
                <button className=' text-[0.9vw] ml-10 px-6 py-2 border-[1px]  rounded-full uppercase'>business bootcamp alumni</button>
            </div>
        </div>
    )
}

export default Cards
