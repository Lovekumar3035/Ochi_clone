import React from 'react'

const About = () => {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.1" className=' w-full min-h-screen bg-[#CDEA68] text-[#212121] rounded-t-3xl -mt-10 overflow-hidden'>
            <div className=' w-full h-[40%] overflow-hidden'>
                <h1 className='px-20 pt-[4vw] text-[4vw] leading-[4vw] tracking-tighter w-[90%]'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, <span className=' border-b-[3px] border-[#212121]'>sell products, explain complex ideas,</span> and <span className='border-b-[3px] border-[#212121]'>hire great people.</span></h1>
            </div>
            <div className='mt-20 w-full h-[50%] border-t-[1px] border-b-[1px] border-zinc-600 px-20 py-10 flex'>
                <div className="first w-[50%] h-full ">
                    <h1 className=' text-[1.1vw]'>What you can expect:</h1>
                </div>
                <div className="second w-[23%] h-full ">
                    <h1 className=' text-[1.1vw]'>
                        We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it's live or digital, delivered for one or a hundred people.</h1>
                    <h1 className=' text-[1.1vw] mt-[60px]'>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</h1>
                </div>
                <div className="third w-[27%] h-full  flex flex-col justify-center">
                    <a className=' text-[1.1vw] ml-56 mb-4' href="#">S:</a>
                    <a className=' text-[1.1vw] ml-56' href="#">Instagram</a>
                    <a className=' text-[1.1vw] ml-56' href="#">Behance</a>
                    <a className=' text-[1.1vw] ml-56' href="#">Facebook</a>
                    <a className=' text-[1.1vw] ml-56' href="#">Linkedin</a>
                </div>
            </div>
            <div className="imageDiv h-[80vh] w-full px-20  py-10 flex justify-between">
                <div className="left w-[45%] h-full">
                    <h1 className=' text-[3.6vw] tracking-tighter'>Our approach:</h1>
                    <button
                        class="px-6 z-30 py-4 bg-[#212121] border-[1px] border-black  rounded-full text-white relative font-semibold font-sans after:-z-20 after:absolute after:h-1 after:w-1 after:bg-black  after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 text-xl hover:text-white uppercase border-none flex items-center justify-between gap-16"
                    >Read more
                        <div className=' w-3 h-3 bg-zinc-100 rounded-full'></div>
                    </button>
                </div>
                <div className="right w-[50%] h-full rounded-3xl overflow-hidden  ">
                    <img className=' w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default About
