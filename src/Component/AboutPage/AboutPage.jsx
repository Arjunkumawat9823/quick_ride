import React from 'react'
// import HometHeroSection from './AboutHeroSection/AboutHeroSection'
import Navbar from '../Homepage/NavbarPage/Navbar'
import AboutHeroSection from './AboutHeroSection/AboutHeroSection'
import SaveSection from './SaveSection/SaveSection'
import CardSection from './CardSection/CardSection'
import DeliicesSection from './DeliicesSection/DeliicesSection'
import Service_Section from './Service_Section/Service_Section'
import Our_Team_Section from './Team_Section/Our_Team_Section'
import Partner_Section from './Partner_Section/Partner_Section'
 import SubscriptionBanner from './About_Slider/About_Slider'
 import Footer from '../Homepage/Footer/Footer'
import Comp from '../Fixed_Comp/Comp'
 
const AboutPage = () => {
  return (
    <div>
      <Navbar/>
      <AboutHeroSection />
      <SaveSection />
      <CardSection />
      <DeliicesSection />
      <Service_Section />
      <Our_Team_Section />
      <Partner_Section />
      <SubscriptionBanner />
      <Footer/>
      <Comp/>
  
    </div>
  )
}

export default AboutPage
