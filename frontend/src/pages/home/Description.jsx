import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";

const Description = ({ setText, setIsHover }) => {
  const video = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".text-span span", {
      y: 200,
      duration: 0.5,
      stagger: 0.1,
      ease: "expo",
      scrollTrigger: {
        trigger: ".desc",
        start: "top 70%",
        end: "30% 80%",
      },
    });
    gsap.from(".tag-pin span", {
      y: 200,
      duration: 0.6,
      stagger: 0.06,
      ease: "expo",
      scrollTrigger: {
        trigger: ".desc",
        start: "top 70%",
        end: "30% 80%",
      },
    });
    gsap.from(video.current, {
      top: 400,
      opacity: 0,
      duration: 1,
      ease: "expo",
      scrollTrigger: {
        trigger: ".desc",
        start: "top 70%",
        end: "30% top",
        scrub: 1,
      },
    });
  });
  return (
    <div className="desc h-screen w-full relative px-20 pt-12">
      <div className="relative top-6 overflow-hidden">
        <h1 className="text-span text-xl leading-none flex gap-2 pl-1">
          <span className="bebas tracking-widest inline-block font-semibold">
            our
          </span>
          <span className="bebas tracking-widest inline-block font-semibold">
            Websites
          </span>
          <span className="bebas tracking-widest inline-block font-semibold">
            are
          </span>
        </h1>
      </div>
      <h1 className="text-8xl font-bold leading-none uppercase flex items-center gap-4">
        <div className="tag-pin h-fit overflow-hidden">
          <span className="inline-block">I</span>
          <span className="inline-block">N</span>
          <span className="inline-block">t</span>
          <span className="inline-block">r</span>
          <span className="inline-block">e</span>
          <span className="inline-block">s</span>
          <span className="inline-block">t</span>
          <span className="inline-block">I</span>
          <span className="inline-block">n</span>
          <span className="inline-block">g</span>
        </div>
        <img
          className="aspect-square rotate-12 h-28 mb-4 drop-shadow-2xl"
          src="https://cdn3d.iconscout.com/3d/premium/thumb/smiling-face-with-star-eyes-3d-icon-download-in-png-blend-fbx-gltf-file-formats--smiley-emoji-happy-smile-pack-sign-symbols-icons-7914975.png"
          alt=""
        />
      </h1>
      <div
        ref={video}
        onMouseMove={() => {setText('Play'); setIsHover(true)}}
        onMouseLeave={() => {setText(''); setIsHover(false)}}
        className="hover-video h-[70vh] relative w-full rounded-2xl mt-1 overflow-hidden bg-zinc-300"
      >
        <video
          className="h-full scale-110 w-full object-cover absolute object-center"
          autoPlay
          loop
          muted
          src="https://cuberto.com/assets/showreel/short.mp4"
        ></video>
      </div>
    </div>
  );
};

export default Description;
