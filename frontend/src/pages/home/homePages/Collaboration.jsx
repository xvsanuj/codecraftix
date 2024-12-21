import React from 'react'

const Collaboration = () => {
  return (
    <div className='relative'>
        <div className='lg:h-[50vh] h-[28vh] relative overflow-hidden w-full flex items-center bg-orange-400 px-20 pt-12 lg:rounded-b-[10vh] rounded-b-3xl'>
          <div className='flex items-center gap-10'>
            <div className='actual-collab lg:text-[10vw] text-[10vh] relative flex gap-10 flex-shrink-0 items-center top-5'>
              {[1, 2, 3, 4, 5].map((_, index) => (
                <h1 key={index} className='bebas text-white drop-shadow-2xl whitespace-nowrap flex-shrink-0'>
                  CODECRAFTIX
                </h1>
              ))}
            </div>
            <div className='actual-collab lg:text-[10vw] text-[10vh] relative flex gap-10 flex-shrink-0 items-center top-5'>
              {[1, 2, 3, 4, 5].map((_, index) => (
                <h1 key={index} className='bebas text-white drop-shadow-2xl whitespace-nowrap flex-shrink-0'>
                  CODECRAFTIX
                </h1>
              ))}
            </div>
          </div>
          <div className='absolute h-full w-40 lg:w-80 blur-2xl bg-orange-400 top-0 -right-20'></div>
          <div className='absolute h-full w-40 lg:w-80 blur-2xl bg-orange-400 top-0 -left-20'></div>
        </div>
        <div className='h-[10vh] absolute top-0 w-full bg-white lg:rounded-b-[10vh] rounded-b-3xl'></div>
    </div>
  )
}

export default Collaboration
