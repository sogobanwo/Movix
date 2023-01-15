import React from 'react'
import Exclusive from '../Components/Exclusive'
import Featured from '../Components/Featured'
import FeaturedCasts from '../Components/FeaturedCasts'
import Footer from '../Components/Footer'
import HeroSection from '../Components/HeroSection'
import NewArrival from '../Components/NewArrival'


const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Featured />
      <NewArrival />
      <Exclusive />
      <FeaturedCasts />
      <Footer />
    </>
  )
}

export default HomePage