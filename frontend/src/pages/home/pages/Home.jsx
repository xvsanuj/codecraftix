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

const Home = ({ setIsHover, setText }) => {

  return (
    <div>
      <Landing />
      <Description setIsHover={setIsHover} setText={setText}/>
      <About />
      <Collaboration />
      <Projects setIsHover={setIsHover} setText={setText} />
      <Philosophy />
      <Footer />
      <Letstalk />
    </div>
  );
};

export default Home;