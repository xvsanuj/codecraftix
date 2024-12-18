import React from 'react'

const Footer = () => {
  return (
    <div className='h-fit w-full relative pt-12'>
      <div>
        <h1 className='uppercase font-semibold text-xl pt-4 lg:px-32 pl-10'>Social media and contacts</h1>
        <div className='lg:mt-14 mt-10'>
          {['Instagram', 'LinkedIN', 'GitHub', 'Youtube', 'Twitter', 'Dribbble'].map((platform, index) => (
            <div key={index} className='opener-divs h-32 w-full flex items-center border-b-[1px] relative cursor-pointer border-black' style={index === 0 ? { borderTop: '1px solid black' } : {}}>
              <h1 className='font-medium lg:text-4xl text-3xl lg:px-32 pl-10'>{platform}</h1>
              <div className='flex items-center absolute gap-6 overflow-hidden top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 h-0 w-full bg-orange-600 text-white'>
                {[1, 2].map((_, rowIndex) => (
                  <div key={rowIndex} className='footer-div gap-6 flex items-center'>
                    {Array(15).fill(null).map((_, i) => (
                      <h1 key={i} className='text-3xl helvetica'>
                        {platform}
                      </h1>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className='lg:px-32 px-0 py-10 flex flex-col gap-10 lg:gap-0 lg:flex-row justify-between items-center'>
          <h1 className='text-lg font-medium lg:w-96 w-full pl-10 lg:pl-0'>Main Office - <span className='text-3xl helvetica font-normal'>901 N Pitt Street
            Alexandria VA, 22314</span></h1>
          <div className='button-info relative overflow-hidden cursor-pointer border border-black px-14 py-4 rounded-full font-semibold'>
            <h1 className='relative'>info@craftix@gmail.com</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer