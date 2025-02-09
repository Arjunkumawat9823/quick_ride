import React from 'react'
import Navbar from '../Homepage/NavbarPage/Navbar'
import Service_Hero from './Service_Hero/Service_Hero'
import Manupoint from "../Homepage/Manupoint/Manupoint";
import Delicious from './Delicious/Delicious'
import SubscribeSection from '../Homepage/SubscribeSection/SubscribeSection';
import Footer from '../Homepage/Footer/Footer';
import Relax from './Relax/Relax';
import Comp from '../Fixed_Comp/Comp';

const Service = () => {
  return (
    <div className='bg-gradient-to-r from-orange-50 to-orange-100 max-w-7xl  mx-auto'>
        <Navbar/>
        <Service_Hero/>
        {/* <Happiness/> */}
        <Delicious/>
        <Manupoint />
        <Relax />
        <SubscribeSection />
        <Footer />
        <Comp/>
        </div>
  )
}

export default Service
