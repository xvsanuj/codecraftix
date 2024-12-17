import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const Header = ({ lenis, setIsMenu, setIsExclusion, setIsSocial }) => {
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
    const hoverLinks = document.querySelectorAll(".hover-links p, .hover-social p");
  
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
        if (window.innerWidth < 480) {
          newTimeline.to(
            offsetBar.current,
            { right: "0%", ease: "expo.out", duration: 1 },
            "timeSet"
          )
        }else{
          newTimeline.to(
            offsetBar.current,
            { right: "0%", ease: "expo.out", duration: 1.5 },
            "timeSet"
          )
        }
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
        if (window.innerWidth < 480) {
          newTimeline.to(offsetBar.current, { right: "-100%", duration: .5 }, "timeSet")
        }else{
          newTimeline.to(offsetBar.current, { right: "-100%", duration: 1 }, "timeSet")
        }
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
      className="h-[10vh] backdrop-blur-xl flex w-full fixed top-0 left-0 z-50 items-center justify-between px-6 lg:px-20">
      <div className="brandLogo w-full lg:w-[20%] select-none flex items-center gap-2 lg:gap-3">
        <a href="/">
          <img
            className="h-[6vh] w-[6vh] drop-shadow-2xl rounded-full"
            src="./logo.jpg"
            alt="codecraftix"
          />
        </a>
        <span className="h-6 w-[2px] bg-black rounded-full inline-block"></span>
        <div>
          <p className="font-semibold leading-none whitespace-nowrap">The Craftix Studio</p>
          <p className="leading-none text-sm">Business faculties</p>
        </div>
      </div>
      <div className="LoginLinks hidden lg:flex w-[60%] justify-center items-center gap-8">
        {["Home", "About", "Services", "Contact"].map((item, index) => (
          <a key={index} className="text-sm uppercase font-medium" href={`/${item}`}>
            {item}
          </a>
        ))}
      </div>
      <div className="menuButtons z-50 w-[20%] flex justify-end">
        <div onClick={handleNavClick} className="lg:p-10 p-3 rounded-full cursor-pointer">
          <div
            className="relative cursor-pointer h-[35px] w-[35px]">
            <div
              ref={line}
              className="line absolute left-0 top-[32%] w-full lg:h-[.1vw] h-[.6vw] rounded-full bg-black"
            ></div>
            <div
              ref={secondline}
              className="line absolute left-auto right-0 top-auto bottom-[32%] w-full lg:h-[.1vw] h-[.6vw] rounded-full bg-black"
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
        className="fixed top-0 -right-full lg:w-1/2 w-full h-screen z-40 bg-white">
        <div>
          <div className="mt-28 lg:mt-48 pl-16 lg:pl-36">
            <div className="flex gap-28">
              <div className="lg:block hidden">
                <h1 className="font-medium text-zinc-500 select-none">Social Media</h1>
                <div className="hover-social flex flex-col mt-10">
                  {["Instagram", "Facebook", "LinkedIn", "Twitter", "Youtube", "Tiktok"].map((item, index) => (
                    <p 
                      key={index} 
                      onMouseEnter={() => setIsSocial(true)}
                      onMouseLeave={() => setIsSocial(false)}
                      className="flex h-[5vh] py-2 select-none overflow-hidden gap-2 leading-10 cursor-pointer flex-col"
                    >
                      <span className="font-medium">{item}</span>
                      <span className="font-medium">{item}</span>
                    </p>
                  ))}
                </div>
              </div>
              <div>
                <h1 className="font-medium text-zinc-500 select-none">Menu</h1>
                <div className="hover-links flex flex-col lg:mt-10 mt-5">
                  {["Home", "Projects", "Workflow", "Minority", "Pricing"].map((item, index) => (
                    <p 
                      key={index}
                      onMouseEnter={() => setIsMenu(true)} 
                      onMouseLeave={() => setIsMenu(false)} 
                      className="flex h-[8vh] py-2 overflow-hidden select-none gap-2 leading-10 cursor-pointer flex-col"
                    >
                      <span className="text-5xl py-1 inline-block">{item}</span>
                      <span className="text-5xl py-1 inline-block">{item}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 lg:mt-32 pl-16 lg:pl-36">
            <h1 className="font-medium text-zinc-600">Get in touch</h1>
            <p className="border-[1px] border-zinc-950 my-2 w-fit px-4 font-semibold rounded-full">hello@pixelflow.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;