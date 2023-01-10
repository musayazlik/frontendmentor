import React from 'react'
import Button from '../../Button'

const FeaturesItem = ({ image, title, paragraph }) => {
  return (
    <div className='grid grid-cols-12 justify-center  space-y-20 lg:space-y-0 lg:space-x-10 xl:space-x-28 '>
      <div className=' col-span-12 lg:col-span-6 flex justify-center '>
        <img src={image} alt='' className='w-full max-w-lg lg:max-w-2xl' />
      </div>
      <div className='w-full col-span-12 lg:col-span-6 flex flex-col justify-center items-center lg:items-start  '>
        <h3 className='mb-6 text-2xl sm:text-4xl  font-semibold text-zinc-700 text-center lg:text-start mt-20 lg:mt-0'>
          {title}
        </h3>
        <p className='mb-10 text-md sm:text-xl text-zinc-400 font-normal max-w-xs sm:max-w-lg text-center lg:text-start'>
          {paragraph}
        </p>
        <Button
          text='More Info'
          customClass=' py-3 px-6 bg-blue-600 text-white hover:bg-white shadow-md shadow-blue-500/20  text-lg border-2 border-blue-600 hover:bg-white hover:text-blue-500 hover:border-2 hover:border-blue-500 hidden lg:block'
        />
      </div>
    </div>
  )
}

export default FeaturesItem
