import React from 'react'
import Navbar from '../Homepage/NavbarPage/Navbar'
import Contectus_Herosection from './Contectus_Hero/Contectus_Herosection'
import SubscribeSection from '../Homepage/SubscribeSection/SubscribeSection'
import Footer from '../Homepage/Footer/Footer'
import Map_Section from './Map_Section/Map_Section'
import Comp from '../Fixed_Comp/Comp'

const Contactus = () => {
  return (
    <div>
      <Navbar/>
      <Contectus_Herosection/>
      <Map_Section/>
      <SubscribeSection/>
      <Footer/>

      <Comp/>
    </div>
  )
}

export default Contactus
