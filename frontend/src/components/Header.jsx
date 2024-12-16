import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const Header = ({ lenis, setIsHover, setIsExclusion }) => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [menuOpen, setmenuOpen] = useState(false);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [isAnimating, setIsAnimating] = useState(false);
  const tl = gsap.timeline();
  const navbar = useRef();
  const line = useRef();
  const fulloffset = useRef();
  const secondline = useRef();
  const offsetBar = useRef();
  let lastScroll = 0;
  useEffect(() => {
    const hoverLinks = document.querySelectorAll(".hover-links p");
  
    hoverLinks.forEach(link => {
      const spans = link.querySelectorAll("span");
      link.addEventListener("mouseenter", () => {
        gsap.to(spans, {
          y: "-115%",
          duration: 1.5,
          ease: "elastic",
        });
      });
  
      link.addEventListener("mouseleave", () => {
        gsap.to(spans, {
          y: "0%",
          duration: 1.5,
          ease: "elastic",
        });
      });
    });
  
    return () => {
      hoverLinks.forEach(link => {
        link.removeEventListener("mouseenter", () => {});
        link.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);
  
  useEffect(() => {
    const onScroll = () => {
      const currentScroll = lenis.scroll;
      setIsNavbarVisible(currentScroll <= lastScroll);
      lastScroll = currentScroll;
    };
    lenis.on("scroll", onScroll);
    return () => lenis.off("scroll", onScroll);
  }, [lenis]);
  useEffect(() => {
    if (!menuOpen) {
      if (isNavbarVisible) {
        gsap.to(navbar.current, {
          y: "0%",
          duration: 0.8,
          ease: "power2.out",
        });
      } else {
        gsap.to(navbar.current, {
          y: "-100%",
          duration: 0.8,
          ease: "power2.out",
        });
      }
    }
  }, [isNavbarVisible]);
  useEffect(() => {
    if (line.current) {
      setSize({
        width: line.current.clientWidth,
        height: line.current.clientHeight,
      });
    }
  }, []);
  const handleNavClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    const newTimeline = gsap.timeline({
      onComplete: () => setIsAnimating(false),
    });

    if (!menuOpen) {
      setIsExclusion(true);
      newTimeline
        .to(
          [line.current, secondline.current],
          { width: 0, duration: 0.3 },
          "timeSet"
        )
        .set(line.current, { rotate: 45, top: 0 })
        .set(secondline.current, { rotate: -45, top: 0, bottom: "auto" })
        .to([line.current, secondline.current], {
          width: "100%",
          y: "-50%",
          top: "50%",
          duration: 0.3,
          stagger: 0.2,
        })
        .to(secondline.current, { y: "-50%", bottom: "50%", duration: 0.3 })
        .to(
          offsetBar.current,
          { right: 0, ease: "expo.out", duration: 1.5 },
          "timeSet"
        )
        .to(
          fulloffset.current,
          {
            display: "block",
            duration: 0,
          },
          "timeSet"
        )
        .to(
          fulloffset.current,
          {
            opacity: "50%",
            duration: 1,
          },
          "<"
        );
    } else {
      setIsExclusion(false);
      newTimeline
        .to(
          [line.current, secondline.current],
          { rotate: 0, duration: 0.3 },
          "timeSet"
        )
        .to([line.current, secondline.current], {
          y: 0,
          top: "32%",
          duration: 0.3,
        })
        .to(
          secondline.current,
          { rotate: 0, top: "68%", y: -size.height, duration: 0.3 },
          "<"
        )
        .to(offsetBar.current, { right: "-50%", duration: 0.5 }, "timeSet")
        .to(
          fulloffset.current,
          {
            opacity: 0,
            duration: 1,
          },
          "timeSet"
        )
        .set(fulloffset.current, {
          display: "none",
        });
    }
    setmenuOpen((prev) => !prev);
  };
  const handleOutsideClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsExclusion(false);
    tl.to(
      [line.current, secondline.current],
      { rotate: 0, duration: 0.3 },
      "timeSet"
    )
      .to([line.current, secondline.current], {
        y: 0,
        top: "32%",
        duration: 0.3,
      })
      .to(
        secondline.current,
        { rotate: 0, top: "68%", y: -size.height, duration: 0.3 },
        "<"
      )
      .to(offsetBar.current, { right: "-50%" }, "timeSet")
      .to(
        fulloffset.current,
        {
          opacity: 0,
          duration: 1,
        },
        "timeSet"
      )
      .set(fulloffset.current, {
        display: "none",
      });
    setmenuOpen((prev) => !prev);
    setIsAnimating(false);
  };
  return (
    <div
      ref={navbar}
      className="h-[10vh] backdrop-blur-xl flex w-full fixed top-0 left-0 z-50 items-center justify-between px-20">
      <div className="brandLogo w-[20%] select-none flex items-center gap-3">
        <a href="/">
          <img
            className="h-[6vh] w-[6vh] drop-shadow-2xl rounded-full"
            src="./logo.jpg"
            alt=""
          />
        </a>
        <span className="h-6 w-[2px] bg-black rounded-full inline-block"></span>
        <div>
          <p className="font-semibold leading-none">The Craftix Studio</p>
          <p className="leading-none text-sm">Business faculties</p>
        </div>
      </div>
      <div className="LoginLinks w-[60%] justify-center flex items-center gap-8">
        {["Home", "About", "Services", "Contact"].map((item, index) => (
          <a key={index} className="text-sm uppercase font-medium" href={`/${item}`}>
            {item}
          </a>
        ))}
      </div>
      <div className="menuButtons z-50 w-[20%] flex justify-end">
        <div onClick={handleNavClick} className="px-10 py-10 rounded-full cursor-pointer">
          <div
            className="relative cursor-pointer h-[35px] w-[35px]">
            <div
              ref={line}
              className="line absolute left-0 top-[32%] w-full h-[.1vw] bg-black"
            ></div>
            <div
              ref={secondline}
              className="line absolute left-auto right-0 top-auto bottom-[32%] w-full h-[.1vw] bg-black"
            ></div>
          </div>
        </div>
      </div>
      <div
        ref={fulloffset}
        onClick={handleOutsideClick}
        className="fixed h-screen top-0 left-0 bg-black hidden z-30 w-full"
      ></div>
      <div
        ref={offsetBar}
        className="fixed top-0 -right-1/2 w-1/2 h-screen z-40 bg-white">
        <div>
          <div className="mt-48 pl-36">
            <div className="flex gap-28">
              <div>
                <h1 className="font-medium text-zinc-500">Social Media</h1>
                <div className="flex flex-col gap-4 mt-10">
                  <p className="flex h-6 overflow-hidden gap-2 flex-col">
                    <span className="text-zinc-500">Instagram</span>
                    <span className="text-zinc-500">Instagram</span>
                  </p>
                  <p className="flex h-6 overflow-hidden gap-2 flex-col">
                    <span className="text-zinc-500">Facebook</span>
                    <span className="text-zinc-500">Facebook</span>
                  </p>
                  <p className="flex h-6 overflow-hidden gap-2 flex-col">
                    <span className="text-zinc-500">LinkedIn</span>
                    <span className="text-zinc-500">LinkedIn</span>
                  </p>
                  <p className="flex h-6 overflow-hidden gap-2 flex-col">
                    <span className="text-zinc-500">Twitter</span>
                    <span className="text-zinc-500">Twitter</span>
                  </p>
                  <p className="flex h-6 overflow-hidden gap-2 flex-col">
                    <span className="text-zinc-500">Youtube</span>
                    <span className="text-zinc-500">Youtube</span>
                  </p>
                  <p className="flex h-6 overflow-hidden gap-2 flex-col">
                    <span className="text-zinc-500">Tiktok</span>
                    <span className="text-zinc-500">Tiktok</span>
                  </p>
                </div>
              </div>
              <div>
                <h1 className="font-medium text-zinc-500">Menu</h1>
                <div className="hover-links flex flex-col mt-10">
                  {["Home", "Projects", "Workflow", "Minority", "Pricing"].map((item, index) => (
                    <p 
                      key={index}
                      onMouseEnter={() => setIsHover(true)} 
                      onMouseLeave={() => setIsHover(false)} 
                      className="flex h-[8vh] py-2 overflow-hidden gap-2 leading-10 cursor-pointer flex-col"
                    >
                      <span className="text-5xl py-1 inline-block">{item}</span>
                      <span className="text-5xl py-1 inline-block">{item}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
