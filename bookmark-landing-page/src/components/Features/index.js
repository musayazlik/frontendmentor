import React, { useState } from 'react'
import { featuresData } from '../../api/featuresData'

import FeaturesItem from './FeaturesItem'
import FeaturesTabItem from './FeaturesTabItem'

const Features = () => {
  const [activeTab, setActiveTab] = useState(0)

  const handleTab = (index) => {
    console.log(index)
    setActiveTab(index)
  }

  return (
    <section className='relative'>
      <div className='container'>
        <div className='w-1/2 mx-auto'>
          <h2 className='mb-6  font-semibold text-4xl text-zinc-700 text-center'>
            Features
          </h2>
          <p className='mb-12 text-xl text-center text-zinc-400 font-normal px-20'>
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>
      </div>

      <div className='container'>
        <div className='flex justify-center mb-24'>
          <div className='featuresTab inline-flex mx-auto gap-x-6 flex-row justify-center border-b-2 border-zinc-200'>
            {featuresData.map((item, index) => (
              <FeaturesTabItem
                key={index}
                text={item.tabName}
                customClass='text-zinc-300'
                activeTab={activeTab}
                index={index}
                onClick={() => handleTab(index)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className='tabWrapper relative pb-24 mb-24'>
        <div className='container'>
          <FeaturesItem
            image={featuresData[activeTab].image}
            title={featuresData[activeTab].title}
            paragraph={featuresData[activeTab].paragraph}
          />
        </div>
        {/* <span className='absolute h-72 w-[35pc] bg-blue-600 block bottom-0 my-auto rounded-r-full -z-10'></span> */}
      </div>
    </section>
  )
}

export default Features
