import React from 'react'
import Navbar from '../Homepage/NavbarPage/Navbar'
import Footer from '../Homepage/Footer/Footer'
import Join_Courier_Hero from './Join_Courier_Hero/Join_Courier_Hero'
import Benefits_Section from './Benefits_Section/Benefits_Section'
import Community from '../Blog_2/Community/Community'
import News_about from '../Contact/News_about/News_about'
import SubscriptionBanner from '../AboutPage/About_Slider/About_Slider'

const Join_Courier = () => {
  return (
    <div>
        <Navbar/>
        <Join_Courier_Hero/>
        <Benefits_Section/>
        <Community/>
        <News_about/>
        <SubscriptionBanner/>



        <Footer/>
      
    </div>
  )
}

export default Join_Courier
