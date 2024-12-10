import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
const Landing = () => {
  useGSAP(()=>{
    gsap.from(".heading-text span", {
      y: 200,
      duration: 1,
      stagger: .1,
      ease: "expo"
    })
    gsap.from(".bold-heading-text span", {
      y: 200,
      duration: 1,
      stagger: .1,
      delay: .3,
      ease: "expo"
    })
    gsap.from(".big-text span", {
      y: 700,
      duration: 1,
      stagger: .1,
      delay: .3,
      ease: "expo"
    })
  })
  return (
    <div className="h-screen relative overflow-hidden">
      <div className="absolute top-[48%] -translate-y-2/4 left-1/2 -translate-x-2/4">
        <div className="h-fit overflow-hidden">
          <h1 className="heading-text text-[7rem] whitespace-nowrap text-center font-light uppercase leading-none overflow-hidden"><span className="neue inline-block">We</span> <span className="inline-block">don't</span> <span className="inline-block">Make</span> <span className="inline-block">good</span></h1>
        </div>
        <div className="h-fit overflow-hidden">
          <h1 className="bold-heading-text text-[12rem] flex items-center gap-6 leading-none"><span className="bebas inline-block">we</span> <span className="bebas inline-block">create's</span> <span className="bebas inline-block">Epic</span> <span className="bebas inline-block">shit</span></h1>
        </div>
      </div>
      <div className="absolute select-none top-1/2 left-[48%] -translate-x-2/4 -translate-y-2/4">
        <div className="h-fit overflow-hidden">
          <h1 className="big-text text-[40rem] opacity-5 leading-none flex drop-shadow-2xl"><span className="bebas inline-block">C</span><span className="bebas inline-block">R</span><span className="bebas inline-block">E</span><span className="bebas inline-block">A</span><span className="bebas inline-block">T</span><span className="bebas inline-block">I</span><span className="bebas inline-block">V</span><span className="bebas inline-block">E</span></h1>
        </div>
        <div className="absolute z-0 top-[55%] left-1/2 -translate-x-2/4 h-[60vw] opacity-50 w-[60vw] bg-orange-600 rounded-full blur-[10rem] "></div>
      </div>
    </div>
  );
};

export default Landing;
