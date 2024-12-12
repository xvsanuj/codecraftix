import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { ScrollTrigger } from "gsap/all";

const Letstalk = () => {
  useGSAP(()=>{
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
    <div className="h-screen w-full relative flex items-center justify-center flex-col">
      <div className="endScreen neue font-light text-9xl italic text-center leading-none">
        <div className="flex justify-center items-center gap-6">
          <div className="overflow-hidden h-fit w-fit px-1"><span className="neue inline-block">What</span>{" "}</div>
          <div className="overflow-hidden h-fit w-fit px-1"><span className="neue inline-block">about</span>{" "}</div>
          <div className="overflow-hidden h-fit w-fit px-1 py-1"><span className="neue inline-block">your</span>{" "}</div>
        </div>
        <div className="flex justify-center items-center gap-6">
          <div className="overflow-hidden h-fit w-fit px-1"><span className="helvetica font-light inline-block">next</span>{" "}</div>
          <div className="overflow-hidden h-fit w-fit px-1"><span className="helvetica font-light inline-block">idea</span>{" "}</div>
          <div className="overflow-hidden h-fit w-fit px-3"><span className="helvetica font-light inline-block">?</span></div>
        </div>
      </div>
      <div className="flex items-center gap-6 pt-6">
        <button className="px-8 py-3 bg-zinc-900 rounded-full text-white font-medium ">
          Mail me
        </button>
        <button className="px-8 py-3 bg-orange-400 rounded-full text-white font-medium ">
          Whatsapp
        </button>
      </div>
    </div>
  );
};

export default Letstalk;
