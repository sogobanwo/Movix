import React from 'react'
import Exclusive from '../Components/ExclusiveSection/Exclusive'
import Featured from '../Components/FeaturedSection/Featured'
import FeaturedCasts from '../Components/FeaturedCasts'
import Footer from '../Components/Footer'
import HeroSection from '../Components/HeroSection/HeroSection'
import NewArrival from '../Components/NewArrivalSection/NewArrival'


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