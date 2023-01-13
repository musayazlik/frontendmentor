import React from 'react'
import ImageDesktop from '../../assets/images/image-web-3-desktop.jpg'
import ImageMobile from '../../assets/images/image-web-3-mobile.jpg'

const Content = () => {
  return (
    <>
      <div className='image'>
        <img src={ImageDesktop} alt='' className='hidden lg:block' />
        <img src={ImageMobile} alt='' className='block lg:hidden' />
      </div>
      <div className='grid grid-cols-12 mt-8 lg:mt-12 gap-6'>
        <div className='col-span-12 lg:col-span-6  '>
          <h2 className='font-extrabold leading-[1.10] lg:leading-snug text-5xl lg:text-4xl xl:text-7xl  flex flex-col'>
            The Bright Future of Web 3.0?
          </h2>
        </div>
        <div className='col-span-12 lg:col-span-6 flex flex-col justify-between items-start '>
          <p className='mb-4 text-2xl text-p-light leading-snug'>
            We dive into the evolution of the web that claim to put the put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className='px-8 py-4 bg-p-red text-white uppercase font-bold tracking-[4px] mt-8'>
            read more
          </button>
        </div>
      </div>
    </>
  )
}

export default Content
