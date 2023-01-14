import React from 'react'
import FooterCard from '../footerCard'
import Card1Image from '../../assets/images/image-retro-pcs.jpg'
import Card2Image from '../../assets/images/image-top-laptops.jpg'
import Card3Image from '../../assets/images/image-gaming-growth.jpg'

const Footer = () => {
  return (
    <footer className='container my-24'>
      <div className='grid lg:grid-cols-3 gap-10 2xl:gap-12'>
        <FooterCard
          cardImg={Card1Image}
          cardNumber={`01`}
          cardTitle={`Reviving Retro PCs`}
          cardText={`What happens when old PCs are given modern upgrades?`}
        />

        <FooterCard
          cardImg={Card2Image}
          cardNumber={`02`}
          cardTitle={'Top 10 Laptops of 2022'}
          cardText={'Our best picks for various needs and budgers.'}
        />

        <FooterCard
          cardImg={Card3Image}
          cardNumber={`03`}
          cardTitle={'The Growth of Gaming'}
          cardText={'How the pandemic has sparked fresh opportunities.'}
        />
      </div>
    </footer>
  )
}

export default Footer
