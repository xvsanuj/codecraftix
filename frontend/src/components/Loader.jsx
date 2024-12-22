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
    },[])
    useGSAP(() => {
        gsap.to(element.current, { opacity: 1, duration: 0.5, ease: 'power2.inOut' });
    }, []);

    return (
        <div
            className="h-screen w-full relative bg-white opacity-0"
            ref={element}
        >
            <div style={{paddingRight: `${width}px`}} className="text-8xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase font-semibold">
                <div>
                    <h1 ref={elementDims} className="opacity-20 whitespace-nowrap overflow-hidden absolute top-1/2 transform -translate-y-1/2">
                        Craftix Studio
                    </h1>
                    <h1 ref={incElem} style={{width: `${progress}%`}} className="absolute transition-all ease-in-out duration-300 w-0 whitespace-nowrap overflow-hidden top-1/2 transform -translate-y-1/2">
                        Craftix Studio
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Loader;
