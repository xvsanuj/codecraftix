import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { ScrollTrigger } from "gsap/all";
import { Link } from "react-router-dom";

const Letstalk = ({handleLink}) => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".letstalk-span span", {
      y: 200,
      duration: 0.5,
      stagger: 0.1,
      ease: "expo",
      scrollTrigger: {
        trigger: ".letstalk",
        start: "top 70%",
        end: "30% 80%",
      },
    });

    gsap.from(".letstalk-pin span", {
      y: 200,
      duration: 0.6,
      stagger: 0.06,
      ease: "expo",
      scrollTrigger: {
        trigger: ".letstalk",
        start: "top 70%",
        end: "30% 80%",
      },
    });
  });

  return (
    <div className="letstalk h-fit w-full relative px-6 lg:px-20 pt-12">
      <div className="relative top-6 overflow-hidden">
        <h1 className="letstalk-span text-xl leading-none flex gap-2 pl-1">
          <span className="bebas tracking-widest inline-block font-semibold">
            let's
          </span>
          <span className="bebas tracking-widest inline-block font-semibold">
            have
          </span>
          <span className="bebas tracking-widest inline-block font-semibold">
            a
          </span>
          <span className="bebas tracking-widest inline-block font-semibold">
            chat
          </span>
        </h1>
      </div>
      <h1 className="lg:text-8xl text-6xl font-bold leading-none uppercase flex items-center gap-4">
        <div className="letstalk-pin h-fit flex pt-6 lg:pt-0 overflow-hidden">
          <span className="inline-block">l</span>
          <span className="inline-block">e</span>
          <span className="inline-block">t</span>
          <span className="inline-block">'</span>
          <span className="inline-block">s</span>
          <span className="inline-block">&nbsp;</span>
          <span className="inline-block">t</span>
          <span className="inline-block">a</span>
          <span className="inline-block">l</span>
          <span className="inline-block">k</span>
        </div>
        <img
          className="aspect-square hidden lg:block rotate-12 h-28 mb-4 drop-shadow-2xl"
          src="https://cdn3d.iconscout.com/3d/premium/thumb/chat-message-5796857-4863042.png"
          alt=""
        />
      </h1>
      <div>
        <h1 className="text-9xl font-bold">what's on your mind?</h1>
      </div>
      <div className="w-full flex justify-center mt-20">
        <Link 
          onClick={() => handleLink("/contact")}
          className="button-info relative overflow-hidden cursor-pointer border border-black px-14 py-4 rounded-full font-semibold"
        >
          <h1 className="relative">Let's Connect</h1>
        </Link>
      </div>
    </div>
  );
};

export default Letstalk;