import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";
import { Link } from "react-router-dom";

const Projects = ({ setIsHover, setText, handleLink }) => {
  const projects = [
    {
      class: "project-cards-1",
      image: "https://i.pinimg.com/736x/06/de/27/06de270cdc00638891b873f1015e2b1d.jpg",
      title: "Restraunt",
      description: "The Restaurant Website",
      link: "/projects/restaurant"
    },
    {
      class: "project-cards-2",
      image: "https://i.pinimg.com/736x/54/bf/24/54bf24ade13bc7def0d2b7b170deba8e.jpg",
      title: "Portfolio",
      description: "Personal Portfolio Website",
      link: "/projects/portfolio"
    },
    {
      class: "project-cards-3",
      image: "https://i.pinimg.com/736x/cc/a1/28/cca128f3190ac3307abbc7b815544f3f.jpg",
      title: "Talky",
      description: "The Chat App",
      link: "/projects/talky"
    }
  ];
  const projects2 = [
    {
      class: "project-cards-1",
      image: "https://i.pinimg.com/736x/29/ec/27/29ec2731bcf9f4c366506710250df10e.jpg",
      title: "Barber Shop",
      description: "The Berber Shop",
      link: "/projects/barber"
    },
    {
      class: "project-cards-2",
      image: "https://i.pinimg.com/736x/c7/98/0c/c7980c913690daf13e59c7645a8be918.jpg",
      title: "Traveller",
      description: "The Travelling Agency",
      link: "/projects/traveller"
    },
    {
      class: "project-cards-3",
      image: "https://i.pinimg.com/736x/ec/a4/a3/eca4a3ca8dae2181d7592bb727792acb.jpg",
      title: "Dressings",
      description: "The Dressings Website",
      link: "/projects/dressings"
    }
  ];
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".projects-span span", {
      y: 200,
      duration: 0.5,
      stagger: 0.1,
      ease: "expo",
      scrollTrigger: {
        trigger: ".projects",
        start: "top 70%",
        end: "30% 80%",
      },
    });
    gsap.from(".projects-pin span", {
      y: 200,
      duration: 0.6,
      stagger: 0.06,
      ease: "expo",
      scrollTrigger: {
        trigger: ".projects",
        start: "top 70%",
        end: "30% 80%",
      },
    });
    if (window.innerWidth > 1024) {
      gsap.from(".project-cards-1", {
        y: 400,
        opacity: 0,
        duration: 1,
        stagger: .3,
        scrollTrigger: {
          trigger: ".projects",
          start: "top 70%",
          end: "30% top",
          scrub: true,
        },
      });
      gsap.from(".project-cards-2", {
        y: 300,
        opacity: 0,
        duration: 1,
        stagger: .3,
        scrollTrigger: {
          trigger: ".projects",
          start: "30% 50%",
          end: "50% top",
          scrub: true
        },
      });
      gsap.from(".project-cards-3", {
        y: 400,
        opacity: 0,
        duration: 1,
        stagger: .3,
        scrollTrigger: {
          trigger: ".projects",
          start: "60% 60%",
          end: "90% top",
          scrub: true
        },
      });
    }
  });
  return (
    <div className="projects h-fit w-full relative px-6 lg:px-20 pt-12">
      <div className="relative top-6 overflow-hidden">
        <h1 className="projects-span text-xl leading-none flex gap-2 pl-1">
          <span className="bebas tracking-widest inline-block font-semibold">
            it's
          </span>
          <span className="bebas tracking-widest inline-block font-semibold">
            time
          </span>
          <span className="bebas tracking-widest inline-block font-semibold">
            to
          </span>
          <span className="bebas tracking-widest inline-block font-semibold">
            showoff
          </span>
        </h1>
      </div>
      <h1 className="lg:text-8xl text-6xl font-bold leading-none uppercase flex items-center gap-4">
        <div className="projects-pin h-fit flex pt-6 lg:pt-0 overflow-hidden">
          <span className="inline-block">p</span>
          <span className="inline-block">r</span>
          <span className="inline-block">o</span>
          <span className="inline-block">j</span>
          <span className="inline-block">e</span>
          <span className="inline-block">c</span>
          <span className="inline-block">t</span>
          <span className="inline-block">s</span>
        </div>
        <img
          className="aspect-square hidden lg:block rotate-12 h-28 mb-4 drop-shadow-2xl"
          src="https://cdn3d.iconscout.com/3d/premium/thumb/web-design-3d-icon-download-in-png-blend-fbx-gltf-file-formats--layout-template-website-development-digitalisation-pack-future-technology-icons-7374550.png"
          alt=""
        />
      </h1>
      <div className="w-full rounded-2xl mt-20 overflow-hidden flex lg:flex-row flex-col gap-10 lg:gap-36">
        <div className="flex flex-col gap-10 lg:gap-36">
          {projects.map((project, index) => (
            <Link onClick={() => handleLink(project.link)} onMouseEnter={() => { setIsHover(true) }} onMouseLeave={() => { setIsHover(false); setText("") }} key={index} className={project.class}>
              <div
                onMouseMove={() => { setText('Show'); setIsHover(true) }}
                onMouseLeave={() => { setIsHover(false); setText("") }}
                className="lg:h-[70vh] h-[50vh] cursor-pointer overflow-hidden rounded-3xl w-full lg:w-[25vw] bg-zinc-600"
              >
                <img
                  src={project.image}
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <p className="font-base lg:text-2xl text-xl px-2 py-4 helvetica flex items-center">
                <span className="lg:text-4xl text-2xl font-medium">{project.title} - </span>
                {project.description}
              </p>
            </Link>
          ))}
        </div>
        <div className="lg:mt-44 flex flex-col gap-10 lg:gap-36">
          {projects2.map((project, index) => (
            <Link onClick={() => handleLink(project.link)} onMouseEnter={() => { setIsHover(true) }} onMouseLeave={() => { setIsHover(false); setText("") }} key={index} className={project.class}>
              <div
                onMouseMove={() => { setText('Show'); setIsHover(true) }}
                onMouseLeave={() => { setIsHover(false); setText("") }}
                className="lg:h-[70vh] h-[50vh] cursor-pointer overflow-hidden rounded-3xl lg:w-[25vw] w-full bg-zinc-600"
              >
                <img
                  src={project.image}
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <p className="font-base lg:text-2xl text-xl px-2 py-4 helvetica flex items-center">
                <span className="lg:text-4xl text-2xl font-medium">{project.title} - </span>
                {project.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
