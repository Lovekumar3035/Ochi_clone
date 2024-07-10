import React from 'react'
import Navbar from './assets/components/Navbar'
import LandingPage from './assets/components/LandingPage'
import Marquee from './assets/components/Marquee'
import About from './assets/components/About'
import Eyes from './assets/components/Eyes'
import Featured from './assets/components/Featured'
import Section from './assets/components/Section'
import Cards from './assets/components/Cards'
import SecondEyes from './assets/components/SecondEyes'
import Footer from './assets/components/Footer'
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className=' w-full min-h-screen bg-[#F1F1F1]'>
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Section />
      <Cards />
      <SecondEyes />
      <Footer />
    </div>
  )
}

export default App
