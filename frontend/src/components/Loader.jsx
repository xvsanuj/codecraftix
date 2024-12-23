import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';

const Loader = ({progress}) => {
    const element = useRef();
    const elementDims = useRef();
    const incElem = useRef();
    const [width, setWidth] = useState(0);
    useEffect(()=>{
        console.log(elementDims.current.offsetWidth);
        setWidth(elementDims.current.offsetWidth);
    },[elementDims])
    useGSAP(() => {
        gsap.to(element.current, { opacity: 1, duration: 0.5, ease: 'power2.inOut' });
    }, []);

    return (
        <div
            className="h-screen select-none w-full relative bg-white opacity-0"
            ref={element}
        >
            <div style={{paddingRight: `${width}px`}} className="absolute lg:top-1/2 top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase font-semibold">
                <div>
                    <h1 ref={elementDims} className="opacity-20 whitespace-nowrap lg:text-8xl text-[5.5vh] overflow-hidden absolute top-1/2 transform -translate-y-1/2">
                        Craftix Studio
                    </h1>
                    <h1 ref={incElem} style={{width: `${progress}%`}} className="absolute transition-all ease-linear duration-[800] will-change-auto w-0 whitespace-nowrap lg:text-8xl text-[5.5vh] overflow-hidden top-1/2 transform -translate-y-1/2">
                        Craftix Studio
                    </h1>
                </div>
                <p style={{wordSpacing: "1.8rem"}} className='absolute text-xs lg:text-base whitespace-nowrap left-1/2 -translate-x-2/4 lg:top-14 top-8 bebas tracking-widest'>Your web experience is loading...</p>
            </div>
        </div>
    );
};

export default Loader;
