import React from 'react'
import Header from '../../components/About/Header/Header'
import MeetBernie from '../../components/About/MeetBernie/MeetBernie'
import WhyChoose from '../../components/About/WhyChoose/WhyChoose'
import Certifications from '../../components/Certifications/Certifications'
import Qualifications from '../../components/About/Qualifications/Qualifications'
import CallToAction from '../../components/About/CallToAction/CallToAction'
import DogGroomingCTA from '../../components/Home/DogGroomingCTA/DogGroomingCTA'

const About = () => {
  return (
    <div> 
      <Header/>
      <MeetBernie/>
      <WhyChoose/>
      <Certifications/>
      <Qualifications/>
      <DogGroomingCTA />
    </div>
  )
}

export default About
