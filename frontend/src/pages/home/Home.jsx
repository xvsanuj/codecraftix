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
  const [centerPos, setCenterPos] = useState(null);
  const [stickyElement, setStickyElement] = useState(null);
  const [stickyElemDims, setStickyElemDims] = useState(null);
  const [text, setText] = useState("");
  const [isHover, setIsHover] = useState(false);
  const textRef = useRef();
  const cursor = useRef();
  const inner = useRef();
  const smoothPosition = { x: 0, y: 0 };
  const mousePosition = { x: 0, y: 0 };
  const lerp = (x, y, a) => x * (1 - a) + y * a;
  const skewing = 3;
  useEffect(() => {
    if (centerPos) {
      window.removeEventListener("mousemove", (dets) => { }); //dets are actually stickyElementDets of mousemove
      const xMap = gsap.utils.mapRange(stickyElemDims.left, stickyElemDims.width + stickyElemDims.left, 0, 1, dets.clientX);
      const yMap = gsap.utils.mapRange(stickyElemDims.top, stickyElemDims.height + stickyElemDims.top, 0, 1, dets.clientY);
      const cursorDims = {
        height: cursor.current.offsetHeight,
        width: cursor.current.offsetWidth
      }
      const distance = {
        x: dets.clientX - centerPos.x,
        y: dets.clientY - centerPos.y
      }
      rotate(distance)
      const absDistance = Math.max(Math.abs(distance.x), Math.abs(distance.y))
      const xMapRange = gsap.utils.mapRange(0, cursorDims.width / 2, 1, 1.1, absDistance)
      const yMapRange = gsap.utils.mapRange(0, cursorDims.height / 2, 1, .9, absDistance)

      gsap.to(cursor.current, {
        x: center.x,
        y: center.y,
        scaleX: xMapRange,
        scaleY: yMapRange,
        height: "80px",
        width: "80px",
        ease: 'expo',
        duration: 0.5
      });
      gsap.to(stickyElement, {
        x: lerp(-50, 50, xMap),
        y: lerp(-50, 50, yMap),
      });

    } else {
      window.addEventListener("mousemove", (e) => {
        mousePosition.x = e.clientX;
        mousePosition.y = e.clientY;

        if (!smoothPosition.x && !smoothPosition.y) {
          smoothPosition.x = e.clientX;
          smoothPosition.y = e.clientY;
        }
      });
    }
    const setter = {
      x: gsap.quickSetter(cursor.current, "x", "px"),
      y: gsap.quickSetter(cursor.current, "y", "px"),
      rotation: gsap.quickSetter(cursor.current, "rotation", "deg"),
      scaleX: gsap.quickSetter(cursor.current, "scaleX"),
      scaleY: gsap.quickSetter(cursor.current, "scaleY"),
      innerRotation: gsap.quickSetter(inner.current, "rotation", "deg"),
    };

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
      window.removeEventListener("mousemove", () => { });
      gsap.ticker.remove(() => { });
    };
  }, []);
  useEffect(() => {
    if (text && isHover) {
      gsap.to(textRef.current, { scale: 1, opacity: 1, duration: .3, ease: "expo" });
    } else {
      gsap.to(textRef.current, { scale: 0, opacity: 0, duration: .3, ease: "expo" });
    }
  }, [text, isHover]);
  const rotate = (e) => {
    const angle = Math.atan2(e.y, e.x)
    gsap.to(cursor, {
      rotate: `${angle}rad`,
      duration: 0
    });
  }
  return (
    <div>
      <Header stickyElement={setStickyElement} elemDims={setStickyElemDims} setNavBtnPos={setCenterPos} lenis={lenis} />
      <Landing />
      <Description setIsHover={setIsHover} setText={setText} />
      <About />
      <Collaboration />
      <Projects setIsHover={setIsHover} setText={setText} />
      <Philosophy />
      <Footer />
      <Letstalk />
      <div ref={cursor} className={`cursor ${isHover ? "scale-up" : ""}`}>
        <div ref={inner} className="cursorInner">
          <div className="cursorText">
            {
              <span ref={textRef}>{text}</span>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;