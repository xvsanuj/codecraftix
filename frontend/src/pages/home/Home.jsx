import React, { useEffect, useRef, useState } from "react";
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
  const [text, setText] = useState("");
  const [isSocial, setIsSocial] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [isExclusion, setIsExclusion] = useState(false);
  const textRef = useRef();
  const cursor = useRef();
  const inner = useRef();
  const smoothPosition = { x: 0, y: 0 };
  const mousePosition = { x: 0, y: 0 };
  const skewing = 3;
  useEffect(() => {
    const lerp = (start, end, factor) => start * (1 - factor) + end * factor;
    const setter = {
      x: gsap.quickSetter(cursor.current, "x", "px"),
      y: gsap.quickSetter(cursor.current, "y", "px"),
      rotation: gsap.quickSetter(cursor.current, "rotation", "deg"),
      scaleX: gsap.quickSetter(cursor.current, "scaleX"),
      scaleY: gsap.quickSetter(cursor.current, "scaleY"),
      innerRotation: gsap.quickSetter(inner.current, "rotation", "deg"),
    };

    const handleMouseMove = (e) => {
      mousePosition.x = e.clientX;
      mousePosition.y = e.clientY;
  
      if (!smoothPosition.x && !smoothPosition.y) {
        smoothPosition.x = e.clientX;
        smoothPosition.y = e.clientY;
      }
    };
  
    window.addEventListener("mousemove", handleMouseMove);
  
    const tickerFunction = () => {
      smoothPosition.x = lerp(smoothPosition.x, mousePosition.x, 0.1);
      smoothPosition.y = lerp(smoothPosition.y, mousePosition.y, 0.1);
      const velocity = Math.sqrt(
        Math.pow(mousePosition.x - smoothPosition.x, 2) +
        Math.pow(mousePosition.y - smoothPosition.y, 2)
      );
      const skewAmount = Math.min(velocity * 0.001, 0.15) * skewing;
      const angle =
        (180 *
          Math.atan2(
            mousePosition.y - smoothPosition.y,
            mousePosition.x - smoothPosition.x
          )) /
        Math.PI;
  
      setter.x(smoothPosition.x);
      setter.y(smoothPosition.y);
      setter.rotation(angle);
      setter.scaleX(1 + skewAmount);
      setter.scaleY(1 - skewAmount);
      setter.innerRotation(-angle);
    };

    gsap.ticker.add(tickerFunction);
    gsap.ticker.fps(90000);
  
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      gsap.ticker.remove(tickerFunction);
    };
  }, []);
  useEffect(() => {
    if (text && isHover) {
      gsap.to(textRef.current, { scale: 1, opacity: 1, duration: 0.3, ease: "expo" });
    } else {
      gsap.to(textRef.current, { scale: 0, opacity: 0, duration: 0.3, ease: "expo" });
    }
  }, [text, isHover]);

  return (
    <div>
      <Header setIsExclusion={setIsExclusion} setIsMenu={setIsMenu} setIsSocial={setIsSocial} setIsHover={setIsHover} lenis={lenis} />
      <Landing />
      <Description setIsHover={setIsHover} setText={setText}/>
      <About />
      <Collaboration />
      <Projects setIsHover={setIsHover} setText={setText} />
      <Philosophy />
      <Footer />
      <Letstalk />
      <div ref={cursor} className={`cursor ${isHover ? "scale-up-1" : ""} ${isMenu ? "scale-up-2" : ""} ${isSocial ? "scale-up-3" : ""} ${isExclusion ? "exclusion" : ""} rounded-full hidden lg:block`}>
        <div ref={inner} className="cursorInner relative rounded-full">
          <div className="cursorText rounded-full flex items-center justify-center h-full w-full">
            <span ref={textRef}>{text}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
