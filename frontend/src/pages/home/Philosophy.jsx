import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";

const Philosophy = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".phil-span span", {
      y: 200,
      duration: 0.5,
      stagger: 0.1,
      ease: "expo",
      scrollTrigger: {
        trigger: ".phil",
        start: "top 70%",
        end: "30% 80%",
      },
    });
    gsap.from(".phil-pin span", {
      y: 200,
      duration: 0.6,
      stagger: 0.06,
      ease: "expo",
      scrollTrigger: {
        trigger: ".phil",
        start: "top 70%",
        end: "30% 80%",
      },
    });
    gsap.from(
      ".phil-para span",
      {
        y: 200,
        duration: 1.5,
        stagger: 0.15,
        ease: "expo",
        scrollTrigger: {
          trigger: ".phil",
          start: "top 50%",
          end: "30% 80%",
        },
      },
      ">"
    );
  });
  return (
    <div className="phil h-screen w-full relative px-6 lg:px-20 pt-12">
      <div className="relative top-6 overflow-hidden">
        <h1 className="phil-span text-xl leading-none flex gap-2 pl-1">
          <span className="bebas tracking-widest inline-block font-semibold">
            let's
          </span>
          <span className="bebas tracking-widest inline-block font-semibold">
            talk
          </span>
          <span className="bebas tracking-widest inline-block font-semibold">
            about
          </span>
          <span className="bebas tracking-widest inline-block font-semibold">
            our
          </span>
        </h1>
      </div>
      <h1 className="lg:text-8xl text-6xl font-bold leading-none uppercase flex items-center gap-4">
        <div className="phil-pin h-fit flex pt-6 lg:pt-0 overflow-hidden">
          <span className="inline-block">p</span>
          <span className="inline-block">h</span>
          <span className="inline-block">i</span>
          <span className="inline-block">l</span>
          <span className="inline-block">o</span>
          <span className="inline-block">s</span>
          <span className="inline-block">o</span>
          <span className="inline-block">p</span>
          <span className="inline-block">h</span>
          <span className="inline-block">y</span>
        </div>
        <img
          className="aspect-square hidden lg:block rotate-12 h-28 mb-4 drop-shadow-2xl"
          src="https://cdn3d.iconscout.com/3d/premium/thumb/artificial-intelligence-brain-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--meta-logo-metaverse-ai-cyberpunk-pack-crime-security-illustrations-4639092.png"
          alt=""
        />
      </h1>
      <div className="lg:h-[70vh] h-fit flex flex-col lg:flex-row lg:items-center w-full rounded-2xl lg:mt-1 mt-5 overflow-hidden">
        <div className="h-full flex w-1/2 items-center">
          <video
            className="lg:h-[80%] lg:w-[80%] h-[30vh] w-[30vh] object-contain object-center"
            autoPlay
            loop
            muted
            src="https://cuberto.com/assets/home/summary/2.mp4?3"
          ></video>
        </div>
        <div className="h-full phil-para lg:w-1/2 w-full lg:py-10 flex items-start flex-col justify-center">
          <h1 className="lg:text-4xl hidden lg:block text-5xl helvetica font-light lg:w-[80%] w-full">
            <div className="h-fit overflow-hidden whitespace-nowrap"><span className="helvetica w-full inline-block">In our team, developers work alongside </span></div>
            <div className="h-fit overflow-hidden whitespace-nowrap"><span className="helvetica w-full inline-block">designers, strategists and analysts. Cuberto </span></div>
            <div className="h-fit overflow-hidden whitespace-nowrap"><span className="helvetica w-full inline-block">doesn't do cookie-cutter solutions and we build </span></div>
            <div className="h-fit overflow-hidden whitespace-nowrap"><span className="helvetica w-full inline-block">products exactly as they were during the design </span></div>
            <div className="h-fit overflow-hidden whitespace-nowrap"><span className="helvetica w-full inline-block">phase, no short cuts or simplifications. </span></div>
          </h1>
          <h1 className="lg:text-4xl text-5xl helvetica font-light lg:w-[80%] w-full mt-6 lg:mt-0">
            <div className="flex flex-col lg:flex-row gap-0 lg:gap-2 lg:items-center">
              <div className="h-fit overflow-hidden whitespace-nowrap"><span className="helvetica w-full inline-block">We're driven by </span></div>
              <div className="h-fit overflow-hidden whitespace-nowrap"><span className="helvetica w-full inline-block">user‑centered </span></div>
              <div className="h-fit overflow-hidden whitespace-nowrap"><span className="helvetica w-full inline-block">design that </span></div>
            </div>
            <div className="flex flex-col lg:flex-row gap-0 lg:gap-2 lg:items-center">
              <div className="h-fit overflow-hidden whitespace-nowrap"><span className="helvetica w-full inline-block">drives productivity </span></div>
              <div className="h-fit overflow-hidden whitespace-nowrap"><span className="helvetica w-full inline-block">and increases </span></div>
              <div className="h-fit overflow-hidden whitespace-nowrap"><span className="helvetica w-full inline-block">revenue. </span></div>
              <div className="h-fit overflow-hidden whitespace-nowrap hidden lg:block"><span className="helvetica w-full inline-block"> Our </span></div>
            </div>
            <div className="h-fit overflow-hidden whitespace-nowrap hidden lg:block"><span className="helvetica w-full inline-block">expertise and ingenuity are remarkable, yet we </span></div>
            <div className="h-fit overflow-hidden whitespace-nowrap hidden lg:block"><span className="helvetica w-full inline-block">always strive to outdo and outperform our </span></div>
            <div className="h-fit overflow-hidden whitespace-nowrap hidden lg:block"><span className="helvetica w-full inline-block">previous achievements. </span></div>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;