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
  const [text, setText] = useState("Play");
  const [isHover, setIsHover] = useState(true);
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
    window.addEventListener("mousemove", (e) => {
      mousePosition.x = e.clientX;
      mousePosition.y = e.clientY;
  
      if (!smoothPosition.x && !smoothPosition.y) {
        smoothPosition.x = e.clientX;
        smoothPosition.y = e.clientY;
      }
    });
  
    gsap.ticker.add(() => {
      // Smooth the position using lerp
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
    });

    gsap.ticker.fps(999999999);
  
    return () => {
      window.removeEventListener("mousemove", () => {});
      gsap.ticker.remove(() => {});
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
      <div ref={cursor} className={`cursor ${isHover ? "scale-up" : ""}`}>
        <div ref={inner} className="cursorInner">
          <div className="cursorText">
            {
              <span>{text}</span>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
