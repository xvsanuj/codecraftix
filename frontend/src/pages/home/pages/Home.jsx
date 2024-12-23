import React from "react";
import Landing from "../homePages/Landing";
import Description from "../homePages/Description";
import About from "../homePages/About";
import Collaboration from "../homePages/Collaboration";
import Projects from "../homePages/Projects";
import Philosophy from "../homePages/Philosophy";
import Footer from "../homePages/Footer";
import Letstalk from "../homePages/Letstalk";

const Home = ({ setIsHover, setText, handleLink }) => {
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
    </div>
  );
};

export default Home;