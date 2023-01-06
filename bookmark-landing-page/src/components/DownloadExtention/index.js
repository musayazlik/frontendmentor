import React from 'react'
import Chrome from '../../assets/images/chrome.svg'
import Firefox from '../../assets/images/firefox.svg'
import Opera from '../../assets/images/opera.svg'
import Dots from '../../assets/images/dots.svg'
import Button from '../Button'

const DownloadExtention = () => {
  return (
    <section className=' mb-40'>
      <div className='container grid grid-cols-6'>
        <div className='col-start-2 col-span-4'>
          <h2 className='mb-6  font-semibold text-4xl text-zinc-700 text-center'>
            Download the extension
          </h2>
          <p className='mb-12 text-xl text-center text-zinc-400 font-normal leading-8 px-40'>
            We've got more browsers in the pipeline. Please do let us know if
            you've got a favourite you'd like us to prioritize.
          </p>
        </div>
        <div className='col-start-2 col-span-4'>
          <div className='grid grid-cols-12 gap-x-10'>
            <div className='card-1 shadow-xl col-span-4 shadow-blue-300/20 rounded-2xl bg-white w-full h-max '>
              <div className='flex flex-col justify-between items-center  gap-10 pt-7 '>
                <img src={Chrome} alt='' className='w-28' />
                <div className='inline-flex flex-col items-center justify-start  '>
                  <h3 className='text-xl font-semibold text-zinc-700 mb-1.5'>
                    Add to Chrome
                  </h3>
                  <p className='text-zinc-400 text-sm'>Minimum version 62</p>
                </div>
                <div className='flex flex-col items-center pb-7'>
                  <img src={Dots} alt='' className='scale-110 mb-7' />
                  <Button
                    text='Add & Install Extension'
                    customClass='w-fit py-3 px-6 bg-blue-600 text-white shadow-md shadow-blue-500/20 text-md border-2 border-blue-600 hover:bg-white hover:text-blue-500 hover:border-2 hover:border-blue-500'
                  />
                </div>
              </div>
            </div>
            <div className='card-2 shadow-xl col-span-4 shadow-blue-300/20 rounded-2xl bg-white w-full h-max mt-20'>
              <div className='flex flex-col justify-between items-center  gap-10 pt-7'>
                <img src={Firefox} alt='' className='w-28' />
                <div className='inline-flex flex-col items-center justify-start  '>
                  <h3 className='text-xl font-semibold text-zinc-700 mb-1.5'>
                    Add to Firefox
                  </h3>
                  <p className='text-zinc-400 text-sm'>Minimum version 55</p>
                </div>
                <div className='flex flex-col items-center pb-7'>
                  <img src={Dots} alt='' className='scale-110 mb-7' />
                  <Button
                    text='Add & Install Extension'
                    customClass='w-fit py-3 px-6 bg-blue-600 text-white shadow-md shadow-blue-500/20 text-md border-2 border-blue-600 hover:bg-white hover:text-blue-500 hover:border-2 hover:border-blue-500'
                  />
                </div>
              </div>
            </div>
            <div className='card-3 shadow-xl col-span-4 shadow-blue-300/20 rounded-2xl bg-white w-full h-max mt-40'>
              <div className='flex flex-col justify-between items-center  gap-10 pt-7 '>
                <img src={Opera} alt='' className='w-28' />
                <div className='inline-flex flex-col items-center justify-start  '>
                  <h3 className='text-xl font-semibold text-zinc-700 mb-1.5'>
                    Add to Opera
                  </h3>
                  <p className='text-zinc-400 text-sm'>Minimum version 46</p>
                </div>
                <div className='flex flex-col items-center pb-7'>
                  <img src={Dots} alt='' className='scale-110 mb-7' />
                  <Button
                    text='Add & Install Extension'
                    customClass='w-fit py-3 px-6 bg-blue-600 text-white shadow-md shadow-blue-500/20 text-md border-2 border-blue-600 hover:bg-white hover:text-blue-500 hover:border-2 hover:border-blue-500'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DownloadExtention
