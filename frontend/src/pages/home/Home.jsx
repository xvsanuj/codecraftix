import React, { useEffect, useRef } from "react";
import Header from "../../components/Header";
import Landing from "./Landing";
import Description from "./Description";
import About from "./About";
import Collaboration from "./Collaboration";
import Projects from "./Projects";
import Philosophy from "./Philosophy";
import Footer from "./Footer";
import Letstalk from "./Letstalk";
import gsap from "gsap";

const Home = ({ lenis }) => {
  const cursor = useRef();
  const mouse = { x: 0, y: 0 };
  const smoothMouse = { x: 0, y: 0 };
  const mouseVelocity = { x: 0, y: 0 };
  const lerp = (x, y, a) => x * (1 - a) + y * a;
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // GSAP QuickSetters for cursor manipulation
    const setter = {
      x: gsap.quickSetter(cursor.current, "x", "px"),
      y: gsap.quickSetter(cursor.current, "y", "px"),
      scaleY: gsap.quickSetter(cursor.current, "scaleY"),
      scaleX: gsap.quickSetter(cursor.current, "scaleX"),
      rotation: gsap.quickSetter(cursor.current, "rotation", "deg"),
      wc: gsap.quickSetter(cursor.current, "willChange"),
    };

    // GSAP Ticker for smooth animations
    const ticker = () => {
      smoothMouse.x = lerp(smoothMouse.x, mouse.x, 0.15);
      smoothMouse.y = lerp(smoothMouse.y, mouse.y, 0.15);

      mouseVelocity.x = Math.abs(mouse.x - smoothMouse.x);
      mouseVelocity.y = Math.abs(mouse.y - smoothMouse.y);

      const angle =
        Math.atan2(mouse.y - smoothMouse.y, mouse.x - smoothMouse.x) *
        (180 / Math.PI);
      const scaleAmount = Math.min(
        (mouseVelocity.x + mouseVelocity.y) * 0.0035,
        0.5
      );

      setter.x(smoothMouse.x);
      setter.y(smoothMouse.y);
      setter.scaleY(1 - scaleAmount);
      setter.scaleX(1 + scaleAmount);
      setter.rotation(angle);
      setter.wc("transform");
    };

    gsap.ticker.add(ticker);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      gsap.ticker.remove(ticker);
    };
  }, []);
  return (
    <div>
      <Header lenis={lenis} />
      <Landing />
      <Description />
      <About />
      <Collaboration />
      <Projects />
      <Philosophy />
      <Footer />
      <Letstalk />
      <div
        ref={cursor}
        className="fixed z-50 top-0 left-0 pointer-events-none -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-black grid place-items-center">
      </div>
    </div>
  );
};

export default Home;
