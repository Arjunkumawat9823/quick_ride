import React from "react";
import Navbar from "../Homepage/NavbarPage/Navbar";
import Faq_hero from "./Faq_Hero.jsx/Faq_hero";
import Faq_search from "./Faq_search/Faq_search";
import Question from "./Question_section/Question";
import Question_Massage from "./Question_Massage/Question_Massage";
import Footer from "../Homepage/Footer/Footer";

const Faq = () => {
  return (
    <>
      <Navbar />
      <Faq_hero />
      <Faq_search />
      <Question />
      <Question_Massage />
      <Footer />
    </>
  );
};

export default Faq;
