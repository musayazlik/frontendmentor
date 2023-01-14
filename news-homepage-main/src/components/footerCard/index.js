import React from 'react'

const FooterCard = ({ cardImg, cardNumber, cardTitle, cardText }) => {
  return (
    <div className='card grid grid-cols-12 gap-x-8 lg:gap-x-4 xl:gap-x-8'>
      <div className='cardLeft col-span-4'>
        <img src={cardImg} alt={cardTitle} />
      </div>
      <div className='cardRight col-span-8'>
        <p className='cardNumber font-bold text-4xl mb-4 sm:text-6xl lg:text-4xl xl:text-5xl md:mb-6 lg:mb-1 xl:mb-5 text-p-light/30'>
          {cardNumber}
        </p>
        <h3 className='cardTitle  font-extrabold text-xl sm:text-4xl lg:text-base xl:text-lg 2xl:text-xl mb-4 sm:mb-8 lg:mb-2'>
          {cardTitle}
        </h3>
        <p className='cardText text-xl sm:text-2xl lg:text-sm xl:text-base 2xl:text-lg'>
          {cardText}
        </p>
      </div>
    </div>
  )
}

export default FooterCard
