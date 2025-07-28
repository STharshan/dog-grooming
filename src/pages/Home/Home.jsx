import React from 'react'
import HeroSection from '../../components/Home/HeroSection/HeroSection'
import Hero from '../../components/Home/Hero/Hero'
import Services from '../../components/Home/Service/Service'
import DogGroomingPage from '../../components/Home/Details/Doggromming'
import TestimonialsCarousel from '../../components/Home/TestimonialsCarousel/TestimonialsCarousel'
import DogGroomingCTA from '../../components/Home/DogGroomingCTA/DogGroomingCTA'
import Certifications from '../../components/Home/Certifications/Certifications'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <Hero/>
      <Services/>
      <TestimonialsCarousel />
      <DogGroomingCTA/>
      <Certifications/>
    </div>
  )
}

export default Home
