import React from 'react'

const Card = ({ title, text }) => {
  return (
    <div className='listItem pb-10 border-b-2 border-p-light last:border-b-0 mb-10 last:mb-0 '>
      <h3 className='text-white font-bold text-2xl sm:text-3xl lg:text-2xl xl:text-3xl mb-2'>
        {title}
      </h3>
      <p className='text-white/80 text-xl lg:text-lg xl:text-xl mt-4 leading-relaxed'>
        {text}
      </p>
    </div>
  )
}

export default Card
