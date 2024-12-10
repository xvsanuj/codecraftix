import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

const About = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".about-span span", {
      y: 200,
      duration: 0.5,
      stagger: 0.1,
      ease: "expo",
      scrollTrigger: {
        trigger: ".about",
        start: "top 70%",
        end: "30% 80%",
      },
    });
    gsap.from(".about-pin span", {
      y: 200,
      duration: 0.6,
      stagger: 0.06,
      ease: "expo",
      scrollTrigger: {
        trigger: ".about",
        start: "top 70%",
        end: "30% 80%",
      },
    });
    gsap.from(
      ".about-para span",
      {
        y: 200,
        duration: 1.5,
        stagger: 0.15,
        ease: "expo",
        scrollTrigger: {
          trigger: ".about",
          start: "top 50%",
          end: "30% 80%",
        },
      },
      ">"
    );
  });
  return (
    <div className="about h-screen w-full relative px-20 pt-12 rounded-b-full">
      <div className="relative top-6 overflow-hidden">
        <h1 className="about-span text-xl leading-none flex gap-2 pl-1">
          <span className="bebas tracking-widest inline-block font-semibold">
            we
          </span>
          <span className="bebas tracking-widest inline-block font-semibold">
            are
          </span>
          <span className="bebas tracking-widest inline-block font-semibold">
            specialized
          </span>
          <span className="bebas tracking-widest inline-block font-semibold">
            in
          </span>
        </h1>
      </div>
      <h1 className="text-8xl font-bold leading-none uppercase flex items-center gap-4">
        <div className="about-pin h-fit overflow-hidden">
          <span className="inline-block">c</span>
          <span className="inline-block">r</span>
          <span className="inline-block">e</span>
          <span className="inline-block">a</span>
          <span className="inline-block">t</span>
          <span className="inline-block">i</span>
          <span className="inline-block">v</span>
          <span className="inline-block">i</span>
          <span className="inline-block">t</span>
          <span className="inline-block">y</span>
        </div>
        <img
          className="aspect-square rotate-12 h-28 mb-4 drop-shadow-2xl"
          src="https://cdn3d.iconscout.com/3d/premium/thumb/knowledge-3d-icon-download-in-png-blend-fbx-gltf-file-formats--education-study-learning-innovation-pack-science-technology-icons-7915185.png?f=webp"
          alt=""
        />
      </h1>
      <div className="h-[70vh] flex items-center w-full rounded-2xl mt-1 overflow-hidden">
        <div className="about-video h-full w-1/2 flex items-center">
          <video
            className="h-[80%] w-[80%] object-contain object-center"
            autoPlay
            loop
            muted
            src="https://cuberto.com/assets/home/summary/1.mp4?3"
          ></video>
        </div>
        <div className="h-full w-1/2 py-10 flex items-start flex-col justify-center">
          <h1 className="about-para text-5xl font-light w-[80%]">
            <div className="h-14 overflow-hidden">
              <span className="helvetica inline-block">
                Craftix is a leading digital product{" "}
              </span>
            </div>
            <div className="h-14 overflow-hidden">
              <span className="helvetica inline-block">
                agency focused on branding, UI/UX
              </span>
            </div>
            <div className="h-14 overflow-hidden">
              <span className="helvetica inline-block">
                design, mobile, and web
              </span>
            </div>
            <div className="h-14 overflow-hidden">
              <span className="helvetica inline-block">development.</span>
            </div>
          </h1>
          <button className="big-btn px-52 py-24 rounded-full text-3xl border-2 border-black mt-10">
            <div className="big-btn-div flex flex-col h-10 overflow-hidden">
              <span className="inline-block">What we do</span>
              <span className="inline-block">What we do</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
