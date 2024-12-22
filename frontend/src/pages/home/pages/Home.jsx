import React, { useEffect, useRef, useState } from "react";
import Header from "../../../components/Navbar";
import Landing from "../homePages/Landing";
import Description from "../homePages/Description";
import About from "../homePages/About";
import Collaboration from "../homePages/Collaboration";
import Projects from "../homePages/Projects";
import Philosophy from "../homePages/Philosophy";
import Footer from "../homePages/Footer";
import Letstalk from "../homePages/Letstalk";
import gsap from "gsap";
import { useLocation, useNavigate } from "react-router-dom";

const Home = ({ setIsHover, setText }) => {
  const location = useLocation();
  const transitionPage = useRef();
  const navigate = useNavigate();
  const handleLink = async (path) => {
    // First make sure we start from the correct position
    gsap.set(transitionPage.current, { top: '100vh' });
    
    // Create a timeline for better control
    const tl = gsap.timeline();
    await tl.to(transitionPage.current, {
      top: 0,
      duration: 1,
      ease: "expo.inOut"
    });
    navigate(path);
    // Second animation: slide up to reveal new page
    await tl.to(transitionPage.current, {
      top: "-100vh",
      duration: 1,
      ease: "expo.inOut"
    });

    // Reset position after animation completes
    
    tl.set(transitionPage.current, { 
      top: "100vh"
    });
    
  };
  
  
  
  return (
    <div>
      <Landing />
      <Description setIsHover={setIsHover} setText={setText}/>
      <About handleLink={handleLink} />
      <Collaboration />
      <Projects handleLink={handleLink} setIsHover={setIsHover} setText={setText} />
      <Philosophy />
      <Footer />
      <Letstalk handleLink={handleLink} />
      <div ref={transitionPage} className="h-screen w-full bg-orange-600 fixed top-[100vh] left-0 z-[100]"></div>
    </div>
  );
};

export default Home;