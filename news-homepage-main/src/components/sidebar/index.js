import React from 'react'

const Sidebar = () => {
  return (
    <>
      <h2 className='font-bold text-6xl text-p-orange mb-10 '>New</h2>
      <div className='list py'>
        <div className='listItem pb-10 border-b-2 border-p-light last:border-b-0 mb-10 last:mb-0 '>
          <h3 className='text-white font-bold text-3xl lg:text-2xl xl:text-3xl mb-2'>
            Hydrogen VS Electric Cars
          </h3>
          <p className='text-white/80 text-xl lg:text-lg xl:text-xl mt-4 leading-relaxed'>
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
        </div>
        <div className='listItem pb-10 border-b-2 border-p-light last:border-b-0 mb-10 last:mb-0 '>
          <h3 className='text-white font-bold text-3xl lg:text-2xl xl:text-3xl mb-2'>
            The Downsides of Al Artistry
          </h3>
          <p className='text-white/80 text-xl lg:text-lg xl:text-xl mt-4 leading-relaxed'>
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
        </div>
        <div className='listItem pb-10 border-b-2 border-p-light last:border-b-0 mb-8 last:mb-0 '>
          <h3 className='text-white font-bold text-3xl lg:text-2xl xl:text-3xl mb-2'>
            Is VC Funding Drying Up?
          </h3>
          <p className='text-white/80 text-xl lg:text-lg xl:text-xl mt-4 leading-relaxed'>
            Private funding by VC firms is down %50 YOY. We take a look at what
            that means.
          </p>
        </div>
      </div>
    </>
  )
}

export default Sidebar
