import React from "react";
import Navbar from "./NavbarPage/Navbar";
import Herosection from "./HeroSection/Herosection";
import Manupoint from "./Manupoint/Manupoint";
import Starsection from "./StarSection/Starsection";
import Introsection from "./Introsection/Introsection";
import Btn from "./Btn/Btn";
import RecordSection from "./RecordSection/RecordSection";
import CardSection from "./CardSection/CardSection";
import LearnSection from "./LearnSection/LearnSection";
import NewsSection from "./NewsSection/NewsSection";
import SubscribeSection from "./SubscribeSection/SubscribeSection";
import Footer from "./Footer/Footer";
import Comp from "../Fixed_Comp/Comp";
 


const HomePage = () => {
  
  return (
    < >
 
      <Navbar />
      <Herosection />
      <Manupoint />
      <Starsection />
      {/* <Data /> */}
      <Btn />
      <Introsection />
      <RecordSection />
      <CardSection />
      <LearnSection />
      <NewsSection />
      <SubscribeSection />
      <Footer />
      <Comp/>
 
     </>
  );
};

export default HomePage;
