import React from 'react'

const Collaboration = () => {
  return (
    <div className='relative'>
        <div className='h-[50vh] relative overflow-hidden w-full flex items-center bg-orange-400 px-20 pt-12 rounded-b-[10vh]'>
          <div className='flex items-center gap-10'>
            <div className='actual-collab text-[10vw] relative flex gap-10 flex-shrink-0 items-center top-5'>
              <h1 className='bebas text-white drop-shadow-2xl whitespace-nowrap flex-shrink-0'>CODECRAFTIX </h1>
              <h1 className='bebas text-white drop-shadow-2xl whitespace-nowrap flex-shrink-0'>CODECRAFTIX </h1>
              <h1 className='bebas text-white drop-shadow-2xl whitespace-nowrap flex-shrink-0'>CODECRAFTIX </h1>
            </div>
            <div className='actual-collab text-[10vw] relative flex gap-10 flex-shrink-0 items-center top-5'>
              <h1 className='bebas text-white drop-shadow-2xl whitespace-nowrap flex-shrink-0'>CODECRAFTIX </h1>
              <h1 className='bebas text-white drop-shadow-2xl whitespace-nowrap flex-shrink-0'>CODECRAFTIX </h1>
              <h1 className='bebas text-white drop-shadow-2xl whitespace-nowrap flex-shrink-0'>CODECRAFTIX </h1>
            </div>
          </div>
          <div className='absolute h-full w-80 blur-2xl bg-orange-400 top-0 -right-20'></div>
          <div className='absolute h-full w-80 blur-2xl bg-orange-400 top-0 -left-20'></div>
        </div>
        <div className='h-[10vh] absolute top-0 w-full bg-white rounded-b-[10vh]'></div>
    </div>
  )
}

export default Collaboration
