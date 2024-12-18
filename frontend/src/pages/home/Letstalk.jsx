import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { ScrollTrigger } from "gsap/all";

const Letstalk = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".endScreen span", {
      y: 200,
      duration: 1,
      stagger: 0.2,
      ease: "expo",
      scrollTrigger: {
        trigger: ".endScreen",
        start: "top 80%",
        end: "bottom 50%",
      },
    });
  }, []);
  return (
    <div className="h-screen w-full relative flex items-center justify-center flex-col p-4">
      <div className="endScreen neue font-light text-6xl md:text-6xl lg:text-9xl lg:italic text-center leading-none">
        <div className="flex justify-center items-center lg:gap-2 md:gap-4 lg:gap-6 flex-wrap">
          <div className="flex lg:flex-row flex-col lg:gap-6">
            <div className="overflow-hidden h-fit w-fit px-1">
              <span className="inline-block">What</span>{" "}
            </div>
            <div className="overflow-hidden h-fit w-fit px-1">
              <span className="inline-block">about</span>{" "}
            </div>
          </div>
          <div className="overflow-hidden text-8xl lg:text-9xl md:text-6xl h-fit w-fit px-1 lg:py-1">
            <span className="neue leading-none inline-block">your</span>{" "}
          </div>
        </div>
        <div className="flex justify-center items-center gap-2 md:gap-4 lg:gap-6 flex-wrap">
          <div className="overflow-hidden h-fit w-fit px-1">
            <span className="helvetica font-light w-fit pr-2 inline-block">next</span>{" "}
          </div>
          <div className="overflow-hidden h-fit w-fit px-1">
            <span className="helvetica font-light w-fit pr-2 inline-block">idea</span>{" "}
          </div>
          <div className="overflow-hidden h-fit w-fit px-3">
            <span className="helvetica font-light w-fit pr-2 inline-block">?</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 md:gap-6 pt-6 flex-wrap justify-center">
        <button className="px-6 md:px-8 py-2 md:py-3 bg-zinc-900 rounded-full text-white font-medium text-sm md:text-base">
          Mail me
        </button>
        <button className="px-6 md:px-8 py-2 md:py-3 bg-orange-400 rounded-full text-white font-medium text-sm md:text-base">
          Whatsapp
        </button>
      </div>
    </div>
  );
};

export default Letstalk;