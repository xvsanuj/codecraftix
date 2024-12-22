import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
const Landing = () => {
  useGSAP(()=>{
    gsap
    .from(".heading-text span", {
      y: 200,
      duration: 1,
      delay: .5,
      stagger: .1,
      ease: "expo"
    })
    gsap.from(".bold-heading-text span", {
      y: 200,
      duration: 1,
      stagger: .1,
      delay: .5,
      ease: "expo"
    })
    gsap.from(".big-text span", {
      y: 700,
      duration: 1,
      delay: .5,
      stagger: .1,
      ease: "expo"
    })
  })
  return (
    <div className="h-screen bg-white relative overflow-hidden">
      <div className="absolute lg:top-[48%] top-[35%] -translate-y-2/4 left-1/2 -translate-x-2/4">
        <div className="h-fit overflow-hidden">
          <h1 className="heading-text text-[3rem] lg:text-[7rem] whitespace-nowrap lg:text-center font-light uppercase leading-none overflow-hidden">
            <span className="neue inline-block pr-4">We</span>
            <span className="inline-block">don't</span> <br className="lg:hidden" />
            <span className="inline-block pr-4">Make</span>
            <span className="inline-block">good</span></h1>
        </div>
        <div className="h-fit mt-2 lg:m-0 overflow-hidden">
          <h1 className="bold-heading-text text-[4rem] lg:text-[12rem] flex flex-col lg:flex-row lg:items-center lg:gap-6 leading-none">
            <div className="flex lg:gap-6 gap-4">
              <span className="bebas inline-block">we</span>
              <span className="bebas inline-block">create's</span>
            </div>
            <div className="flex lg:gap-6 gap-4">
              <span className="bebas inline-block">Epic</span>
              <span className="bebas inline-block">shit</span>
            </div>
          </h1>
        </div>
      </div>
      <div className="absolute lg:block select-none top-[60%] lg:top-1/2 left-[48%] -translate-x-2/4 -translate-y-2/4">
        <div className="h-fit overflow-hidden">
          <h1 className="big-text text-[6.7rem] lg:text-[40rem] flex opacity-10 lg:opacity-5 leading-none drop-shadow-2xl">
            <div className="flex"><span className="bebas inline-block">C</span><span className="bebas inline-block">R</span><span className="bebas inline-block">E</span><span className="bebas inline-block">A</span></div>
            <div className="flex"><span className="bebas inline-block">T</span><span className="bebas inline-block">I</span><span className="bebas inline-block">V</span><span className="bebas inline-block">E</span></div>
          </h1>
        </div>
        <div className="absolute z-0 top-[55%] left-1/2 -translate-x-2/4 lg:h-[60vw] h-[300vw] opacity-50 lg:w-[60vw] w-[300vw] bg-orange-600 rounded-full blur-[5rem] lg:blur-[10rem]"></div>
      </div>
    </div>
  );
};

export default Landing;
