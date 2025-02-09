import React from "react";
import Navbar from "../Homepage/NavbarPage/Navbar";
import Blog_Hero from "./Blog_hero_section/Blog_Hero";
import Comp from "../Fixed_Comp/Comp";

const Blog = () => {
  return (
    <div>
      <Navbar />
      <Blog_Hero />
      <Blog_Hero />
      <Blog_Hero />
      
      
      <Comp/>
     
    </div>
  );
};

export default Blog;
