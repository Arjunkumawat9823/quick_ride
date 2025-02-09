import React from 'react'
import Navbar from '../Homepage/NavbarPage/Navbar'
import Restorant_Hero_Index from './Restorant_Hero_Page/Restorant_Hero_Index'
import Food_Page from './Food_Page/Food_Page'
import SubscribeSection from '../Homepage/SubscribeSection/SubscribeSection'
import Footer from '../Homepage/Footer/Footer'
import Btn from '../Homepage/Btn/Btn'
import Comp from '../Fixed_Comp/Comp'

const Restourant = () => {
  return (
    <div>
      <Navbar/>
      <Restorant_Hero_Index/>
      <Food_Page/>
      <Btn/>
      <SubscribeSection/>
      <Footer/>
        
      <Comp/>
     </div>
  )
}

export default Restourant
