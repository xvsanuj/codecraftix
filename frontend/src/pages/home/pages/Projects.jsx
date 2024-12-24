import { Link } from "react-router-dom";
import Letstalk from "../homePages/Letstalk";
import Footer from "../homePages/Footer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Projects = ({ setIsHover, setText, handleLink }) => {
  const projects = [
    {
      class: "project-cards-1",
      image:
        "https://i.pinimg.com/736x/06/de/27/06de270cdc00638891b873f1015e2b1d.jpg",
      title: "Restraunt",
      description: "The Restaurant Website",
      link: "/projects/restaurant",
    },
    {
      class: "project-cards-2",
      image:
        "https://i.pinimg.com/736x/54/bf/24/54bf24ade13bc7def0d2b7b170deba8e.jpg",
      title: "Portfolio",
      description: "Personal Portfolio Website",
      link: "/projects/portfolio",
    },
    {
      class: "project-cards-3",
      image:
        "https://i.pinimg.com/736x/cc/a1/28/cca128f3190ac3307abbc7b815544f3f.jpg",
      title: "Talky",
      description: "The Chat App",
      link: "/projects/talky",
    },
  ];
  const projects2 = [
    {
      class: "project-cards-1",
      image:
        "https://i.pinimg.com/736x/29/ec/27/29ec2731bcf9f4c366506710250df10e.jpg",
      title: "Barber Shop",
      description: "The Berber Shop",
      link: "/projects/barber",
    },
    {
      class: "project-cards-2",
      image:
        "https://i.pinimg.com/736x/c7/98/0c/c7980c913690daf13e59c7645a8be918.jpg",
      title: "Traveller",
      description: "The Travelling Agency",
      link: "/projects/traveller",
    },
    {
      class: "project-cards-3",
      image:
        "https://i.pinimg.com/736x/ec/a4/a3/eca4a3ca8dae2181d7592bb727792acb.jpg",
      title: "Dressings",
      description: "The Dressings Website",
      link: "/projects/dressings",
    },
  ];
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (window.innerWidth > 1024) {
      gsap.from(".project-cards-1", {
        y: 200,
        opacity: 0,
        duration: 1.5,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".projects",
          start: "top 80%", 
          end: "top 20%",
          scrub: 1.5,
        },
      });

      gsap.from(".project-cards-2", {
        y: 200,
        opacity: 0,
        duration: 1.5,
        stagger: 0.3,
        ease: "power2.out", 
        scrollTrigger: {
          trigger: ".projects",
          start: "20% 80%",
          end: "20% 20%",
          scrub: 1.5,
        },
      });

      gsap.from(".project-cards-3", {
        y: 200,
        opacity: 0,
        duration: 1.5,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".projects", 
          start: "40% 80%",
          end: "40% 20%",
          scrub: 1.5,
        },
      });
    }
  });
  return (
    <div>
      <div className="h-fit w-full">
        <div className="w-full flex flex-col items-center justify-center pt-32">
          <h1 className="font-bold text-center text-6xl lg:text-9xl uppercase leading-none flex items-center">
            Projects
          </h1>
          <p
            className="lg:text-lg text-sm bebas tracking-widest"
            style={{ wordSpacing: "3.4vw" }}
          >
            all the projects are listed here.
          </p>
        </div>
        <div className="w-full h-full flex flex-col lg:flex-row lg:gap-40 gap-10 mb-20  pt-36 px-6 lg:pl-52">
          <div className="flex flex-col gap-10 lg:gap-36">
            {projects.map((project, index) => (
              <Link
                onClick={() => handleLink(project.link)}
                onMouseEnter={() => {
                  setIsHover(true);
                }}
                onMouseLeave={() => {
                  setIsHover(false);
                  setText("");
                }}
                key={index}
                className={project.class}
              >
                <div
                  onMouseEnter={() => {
                    setText("Show");
                    setIsHover(true);
                  }}
                  onMouseLeave={() => {
                    setIsHover(false);
                    setText("");
                  }}
                  className="lg:h-[70vh] h-[50vh] hover:scale-95 transition-all duration-700 cursor-pointer overflow-hidden rounded-3xl w-full lg:w-[25vw] bg-zinc-600"
                >
                  <img
                    src={project.image}
                    alt=""
                    className="h-full w-full hover:scale-110 transition-all duration-700 object-cover object-center"
                  />
                </div>
                <p className="font-base lg:text-2xl text-xl px-2 py-4 helvetica flex items-center">
                  <span className="lg:text-4xl text-2xl font-medium">
                    {project.title} -{" "}
                  </span>
                  {project.description}
                </p>
              </Link>
            ))}
          </div>
          <div className="lg:mt-44 flex flex-col gap-10 lg:gap-36">
            {projects2.map((project, index) => (
              <Link
                onClick={() => handleLink(project.link)}
                onMouseEnter={() => {
                  setIsHover(true);
                }}
                onMouseLeave={() => {
                  setIsHover(false);
                  setText("");
                }}
                key={index}
                className={project.class}
              >
                <div
                  onMouseEnter={() => {
                    setText("Show");
                    setIsHover(true);
                  }}
                  onMouseLeave={() => {
                    setIsHover(false);
                    setText("");
                  }}
                  className="lg:h-[70vh] hover:scale-95 transition-all duration-700 h-[50vh] cursor-pointer overflow-hidden rounded-3xl lg:w-[25vw] w-full bg-zinc-600"
                >
                  <img
                    src={project.image}
                    alt=""
                    className="h-full w-full hover:scale-110 transition-all duration-700 object-cover object-center"
                  />
                </div>
                <p className="font-base lg:text-2xl text-xl px-2 py-4 helvetica flex items-center">
                  <span className="lg:text-4xl text-2xl font-medium">
                    {project.title} -{" "}
                  </span>
                  {project.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
        <Footer />
        <Letstalk handleLink={handleLink} />
      </div>
    </div>
  );
};

export default Projects;
