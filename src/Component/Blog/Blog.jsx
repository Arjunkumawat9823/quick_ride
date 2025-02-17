import React from "react";
import Navbar from "../Homepage/NavbarPage/Navbar";
import Blog_Hero from "./Blog_hero_section/Blog_Hero";
import Comp from "../Fixed_Comp/Comp";
import Working_Page from "../Working_Page/Working_Page";
import Order_Item from "../Order_Item/Order_Item";
import SubscribeSection from "../Homepage/SubscribeSection/SubscribeSection";
import Footer from "../Homepage/Footer/Footer";

const Blog = () => {
  return (
    <div>
      <Navbar />
      <Blog_Hero />
      <Working_Page />
      <Order_Item />
      <SubscribeSection />
      <Footer />

      <Comp />
    </div>
  );
};

export default Blog;
