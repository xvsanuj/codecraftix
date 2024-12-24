import React, { useEffect, useRef, useState } from 'react';

const Loader = ({ progress }) => {
    const element = useRef();
    const elementDims = useRef();
    const incElem = useRef();
    const loadingText = useRef();
    const [width, setWidth] = useState(0);

    // Handle width calculations
    useEffect(() => {
        const updateWidth = () => {
            if (elementDims.current) {
                setWidth(elementDims.current.offsetWidth);
            }
        };

        // Wait for fonts to load before calculating width
        document.fonts.ready.then(() => {
            updateWidth();
        });

        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    return (
        <div className="h-screen select-none w-full relative bg-white flex items-center justify-center" ref={element}>
            <div className="absolute uppercase font-semibold" style={{ width: `${width}px`, left: '50%', transform: 'translateX(-50%)' }}>
                <div className="relative">
                    <h1 ref={elementDims} className="opacity-20 whitespace-nowrap lg:text-8xl text-[5.5vh] overflow-hidden absolute top-1/2 transform -translate-y-1/2 animate-fade-in">
                        Craftix Studio
                    </h1>
                    <h1 
                        ref={incElem} 
                        style={{ width: `${progress}%` }} 
                        className="absolute transition-all ease-linear duration-[800] will-change-auto w-0 whitespace-nowrap lg:text-8xl text-[5.5vh] overflow-hidden top-1/2 transform -translate-y-1/2 animate-fade-in"
                    >
                        Craftix Studio
                    </h1>
                </div>
                <p 
                    ref={loadingText}
                    style={{ wordSpacing: "1.8rem" }} 
                    className='absolute text-xs lg:text-base whitespace-nowrap left-1/2 -translate-x-2/4 lg:top-14 top-8 bebas tracking-widest animate-fade-in'
                >
                    Your web experience is loading...
                </p>
            </div>
        </div>
    );
};

export default Loader;