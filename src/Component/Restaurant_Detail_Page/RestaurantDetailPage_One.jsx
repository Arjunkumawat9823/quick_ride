import React from "react";
import { FaStar, FaRegClock } from "react-icons/fa";
import { MdRestaurantMenu } from "react-icons/md";
import { useParams } from "react-router-dom";
import hotel_img from "../../assets/hotel.jpg"; // Fixed import path
import Navbar from "../Homepage/NavbarPage/Navbar";
import Restourant_cart_hero from "./Add_to_cart/Restourant_cart_hero";
import Order from "./Order/Order";
import SeeAllButton from "./SeeAllButton/SeeAllButton";
import SubscriptionBanner from "../AboutPage/About_Slider/About_Slider";
import Footer from "../Homepage/Footer/Footer";
import Categery from "./Categery/Categery";
import Comp from "../Fixed_Comp/Comp";

const RestaurantDetailPage_One = () => {
  const { id } = useParams(); // Get the restaurant ID from the URL

  return (
    <>
      <Navbar />
      <Restourant_cart_hero />
      <Order />
      <SeeAllButton />
      <Categery />
      <SubscriptionBanner />
      <Footer />
      <Comp/>
    </>
  );
};

export default RestaurantDetailPage_One;
