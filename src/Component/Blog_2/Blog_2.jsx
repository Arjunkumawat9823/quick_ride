import React from "react";
import Blog_hero from "./Blog_hero_section/Blog_hero";
import Navbar from "../Homepage/NavbarPage/Navbar";
import Parallaxpart from "./Blog_Parallax/Blog_Parallax";
import Delivery_boy from "./Delivery_boy/Delivery_boy";
import Comment_Section from "./Comment_Section/Comment_Section";
import Footer from "../Homepage/Footer/Footer";
import Comp from "../Fixed_Comp/Comp";
import Profile_Section from "./Profile_Section/Profile_Section";

const Blog_2 = () => {
  return (
    <div>
      <Navbar />
      <Blog_hero />
      <Parallaxpart />
      <Profile_Section />
      <Delivery_boy />
      <Comment_Section />
      <Footer/>
      <Comp/>
    </div>
  );
};

export default Blog_2;
