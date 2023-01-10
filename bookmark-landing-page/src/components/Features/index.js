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
    <section className='relative mt-24 lg:mt-0 overflow-x-hidden '>
      <div className='container'>
        <div className=' mx-auto flex flex-col items-center'>
          <h2 className='mb-6  font-semibold text-3xl sm:text-4xl text-zinc-700 text-center'>
            Features
          </h2>
          <p className='mb-12 text-md sm:text-xl text-zinc-400 font-normal max-w-xs sm:max-w-3xl text-center sm:px-20'>
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>
      </div>

      <div className='container'>
        <div className='flex justify-center mb-24'>
          <ul className='featuresTab flex flex-col lg:flex-row lg:inline-flex lg:mx-auto gap-x-6 lg:gap-x-0 justify-center lg:border-b-0 border-zinc-200 text-center lg:w-auto w-full'>
            {featuresData.map((item, index) => (
              <FeaturesTabItem
                key={index}
                text={item.tabName}
                customClass='text-zinc-300 w-full'
                activeTab={activeTab}
                index={index}
                onClick={() => handleTab(index)}
              />
            ))}
          </ul>
        </div>
      </div>
      <div className='tabWrapper relative pb-40'>
        <div className='container relative'>
          <FeaturesItem
            image={featuresData[activeTab].image}
            title={featuresData[activeTab].title}
            paragraph={featuresData[activeTab].paragraph}
          />
          <span className='absolute bottom-64 lg:-bottom-28 left-0 my-auto h-[328px] sm:h-[365px] md:h-[340px] xl:h-[400px] w-3/4 md:w-[60%] lg:w-[40%] bg-blue-600 -z-10 rounded-r-full'></span>
        </div>
      </div>

      <span className='absolute bottom-[416px] lg:bottom-12 left-0 my-auto h-[328px] sm:h-[365px] md:h-[340px] xl:h-[400px] w-3/4 md:w-[60%] lg:w-[45%]  bg-blue-600 -z-10 rounded-r-full'></span>
    </section>
  )
}

export default Features
