import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const WindowScroll = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); // Smooth scrolling to top
  }, [pathname]); // Runs whenever the route changes

  return null; // This component only handles scroll behavior
};

export default WindowScroll;
