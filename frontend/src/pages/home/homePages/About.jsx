import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";
import { Link } from "react-router-dom";

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
        duration: 1,
        stagger: 0.15,
        ease: "circ",
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
    <div className="about h-screen w-full relative px-6 lg:px-20 pt-12">
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
      <h1 className="lg:text-8xl text-6xl font-bold leading-none uppercase flex items-center gap-4">
        <div className="about-pin h-fit flex pt-6 lg:pt-0 overflow-hidden">
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
          className="aspect-square hidden lg:block rotate-12 lg:h-28 h-16 mb-4 drop-shadow-2xl"
          src="https://cdn3d.iconscout.com/3d/premium/thumb/knowledge-3d-icon-download-in-png-blend-fbx-gltf-file-formats--education-study-learning-innovation-pack-science-technology-icons-7915185.png?f=webp"
          alt=""
        />
      </h1>
      <div className="lg:h-[70vh] h-fit flex items-center w-full rounded-2xl mt-1 overflow-hidden">
        <div className="about-video hidden lg:flex h-full w-1/2 items-center">
          <video
            className="h-[80%] w-[80%] hidden lg:block object-contain object-center"
            autoPlay
            loop
            muted
            src="https://cuberto.com/assets/home/summary/1.mp4?3"
          ></video>
        </div>
        <div className="h-full lg:w-1/2 w-full lg:py-10 flex lg:items-start flex-col lg:justify-center">
          <h1 className="about-para lg:text-5xl text-[5vh] lg:p-0 pt-10 px-5 font-light lg:w-[80%] w-full">
            <div className="flex flex-col lg:flex-row gap-0 lg:gap-2 lg:items-center">
              <div className="lg:h-14 h-[6.7vh] overflow-hidden">
                <span className="helvetica whitespace-nowrap inline-block">
                  Craftix is a leading{" "}
                </span>
              </div>
              <div className="lg:h-14 h-[6.7vh] overflow-hidden">
                <span className="helvetica whitespace-nowrap inline-block">
                  digital product{" "}
                </span>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-0 lg:gap-2 lg:items-center">
              <div className="lg:h-14 h-[6.7vh] overflow-hidden">
                <span className="helvetica whitespace-nowrap inline-block">
                  agency focused
                </span>
              </div>
              <div className="lg:h-14 h-[6.7vh] overflow-hidden">
                <span className="helvetica whitespace-nowrap inline-block">
                  on branding, UI/UX
                </span>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-0 lg:gap-2 lg:items-center">
              <div className="lg:h-14 h-[6.7vh] overflow-hidden">
                <span className="helvetica inline-block">
                  design, mobile,
                </span>
              </div>
              <div className="lg:h-14 h-[6.7vh] overflow-hidden">
                <span className="helvetica inline-block">
                  and web
                </span>
              </div>
            </div>
            <div className="lg:h-14 h-[6.7vh] overflow-hidden">
              <span className="helvetica inline-block">
                development.
              </span>
            </div>
          </h1>
          <Link to="/projects" className="big-btn flex items-center justify-center ml-3 lg:w-[35vw] lg:h-full h-28 mb-3 w-72 rounded-full lg:text-3xl text-2xl border-2 border-black mt-10">
            <div className="big-btn-div flex flex-col h-10 overflow-hidden">
              <span className="inline-block py-1 lg:p-0">What we do</span>
              <span className="inline-block py-1 lg:p-0">What we do</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
