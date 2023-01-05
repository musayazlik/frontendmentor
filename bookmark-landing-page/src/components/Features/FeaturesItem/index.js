import React from 'react'
import Button from '../../Button'

const FeaturesItem = ({ image, title, paragraph }) => {
  return (
    <div className='grid grid-cols-12 justify-center space-x-28'>
      <div className=' col-span-6'>
        <img src={image} alt='' className='w-full px-10 ' />
      </div>
      <div className='w-full col-span-6 inline-flex flex-col justify-center items-start pr-40 '>
        <h3 className='mb-8 text-4xl font-semibold text-zinc-700'>{title}</h3>
        <p className='mb-10 text-xl text-zinc-400 font-normal'>{paragraph}</p>
        <Button
          text='More Info'
          customClass=' py-3 px-6 bg-blue-600 text-white hover:bg-white shadow-md shadow-blue-500/20  text-lg border-2 border-blue-600 hover:bg-white hover:text-blue-500 hover:border-2 hover:border-blue-500 block'
        />
      </div>
    </div>
  )
}

export default FeaturesItem
