import React, { useEffect, useRef, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/pages/Home';
import ErrorPage from '../pages/home/ErrorPage';
import Projects from '../pages/home/pages/Projects';
import Navbar from '../components/Navbar';
import gsap from 'gsap';
import Bookings from '../pages/home/pages/Bookings';
import About from '../pages/home/pages/About';
import Pricing from '../pages/home/pages/Pricing';
import Workflow from '../pages/home/pages/Workflow';
import Loader from '../components/Loader';

const HomeRoutes = ({ lenis, ScrollTrigger }) => {
  const [progress, setProgress] = useState(0);
  const [isSocial, setIsSocial] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const [isExclusion, setIsExclusion] = useState(false);
  const [text, setText] = useState('');
  const [isHover, setIsHover] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const textRef = useRef();
  const cursor = useRef();
  const inner = useRef();
  const smoothPosition = { x: 0, y: 0 };
  const mousePosition = { x: 0, y: 0 };
  const skewing = 3;

  // Cursor logic
  useEffect(() => {
    const lerp = (start, end, factor) => start * (1 - factor) + end * factor;
    const setter = {
      x: gsap.quickSetter(cursor.current, 'x', 'px'),
      y: gsap.quickSetter(cursor.current, 'y', 'px'),
      rotation: gsap.quickSetter(cursor.current, 'rotation', 'deg'),
      scaleX: gsap.quickSetter(cursor.current, 'scaleX'),
      scaleY: gsap.quickSetter(cursor.current, 'scaleY'),
      innerRotation: gsap.quickSetter(inner.current, 'rotation', 'deg'),
    };

    const handleMouseMove = (e) => {
      mousePosition.x = e.clientX;
      mousePosition.y = e.clientY;

      if (!smoothPosition.x && !smoothPosition.y) {
        smoothPosition.x = e.clientX;
        smoothPosition.y = e.clientY;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

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
      window.removeEventListener('mousemove', handleMouseMove);
      gsap.ticker.remove(tickerFunction);
    };
  }, []);

  // Loader logic
  useEffect(() => {
    setIsLoading(true);
    let progressInterval;
    let startTime = Date.now();
    const MINIMUM_LOADING_TIME = 1000; // 2 seconds minimum loading time
    const handleLoad = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, MINIMUM_LOADING_TIME - elapsedTime);
      
      // Delay the completion phase if we haven't reached minimum time
      setTimeout(() => {
        progressInterval = setInterval(() => {
          setProgress(prev => {
            const newProgress = prev + (100 - prev) * 0.1;
            if (newProgress >= 99.9) {
              clearInterval(progressInterval);
              setTimeout(() => {
                setProgress(100);
                setIsLoading(false);
              }, 100);
              return 100;
            }
            return newProgress;
          });
        }, 50);
      }, remainingTime);
    };

    // Start progress from 0 to 70% while waiting for load
    const simulateInitialProgress = setInterval(() => {
      setProgress(prev => {
        if (prev >= 70) {
          clearInterval(simulateInitialProgress);
          return prev;
        }
        return prev + (70 - prev) * 0.1;
      });
    }, 100);

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      document.addEventListener('DOMContentLoaded', handleLoad);
    }

    return () => {
      clearInterval(simulateInitialProgress);
      clearInterval(progressInterval);
      window.removeEventListener('load', handleLoad);
      document.removeEventListener('DOMContentLoaded', handleLoad);
    };
  }, []);

  // Handle hover text animation
  useEffect(() => {
    if (text && isHover) {
      gsap.to(textRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: 'expo',
      });
    } else {
      gsap.to(textRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'expo',
      });
    }
  }, [text, isHover]);

  return (
    <div>
      {isLoading ? (
        <Loader progress={progress} />
      ) : (
        <div className="main-content">
          <Navbar
            setIsExclusion={setIsExclusion}
            setIsMenu={setIsMenu}
            setIsSocial={setIsSocial}
            setIsHover={setIsHover}
            lenis={lenis}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  lenis={lenis}
                  setText={setText}
                  setIsHover={setIsHover}
                  ScrollTrigger={ScrollTrigger}
                />
              }
            />
            <Route path="/projects" element={<Projects />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/workflow" element={<Workflow />} />
            <Route path="/about-us" element={<About />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      )}
      <div
        ref={cursor}
        className={`cursor ${isHover ? 'scale-up-1' : ''} ${
          isMenu ? 'scale-up-2' : ''
        } ${isSocial ? 'scale-up-3' : ''} ${
          isExclusion ? 'exclusion' : ''
        } rounded-full hidden lg:block`}
      >
        <div ref={inner} className="cursorInner relative rounded-full">
          <div className="cursorText rounded-full flex items-center justify-center h-full w-full">
            <span ref={textRef}>{text}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeRoutes;
