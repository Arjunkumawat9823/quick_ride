import React from 'react'
import Navbar from '../Homepage/NavbarPage/Navbar'
import Lunch_hero from './Lunch_Hero_Section/Lunch_hero'
import Lunch_order_item from './Lunch_order_item/Lunch_order_item'
import Footer from '../Homepage/Footer/Footer'
import SubscribeSection from '../Homepage/SubscribeSection/SubscribeSection'
import Comp from '../Fixed_Comp/Comp'

const Lunch = () => {
  return (
    <div>
        <Navbar/>
        <Lunch_hero/>
        <Lunch_order_item/>
        <SubscribeSection/>
        <Footer/>
        <Comp/>
    </div>
  )
}

export default Lunch
