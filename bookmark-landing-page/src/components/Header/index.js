import React from 'react'
import Logo from '../../assets/images/logo.svg'
import Hero from '../../assets/images/hero.svg'
import Button from '../Button'

const Header = () => {
  return (
    <>
      <header>
        <div className='container'>
          <div className='flex justify-between items-center pt-8'>
            <div className='logo'>
              <img src={Logo} alt='logo' />
            </div>
            <nav className='mr-20'>
              <ul className='flex items-center gap-x-2'>
                <li className='px-6 py-3'>
                  <a
                    href='#Features'
                    className='uppercase text-zinc-700 hover:text-rose-500 font-medium duration-200 text-sm'>
                    Features
                  </a>
                </li>
                <li className='px-6 py-3'>
                  <a
                    href='#Pricing'
                    className='uppercase text-zinc-700 hover:text-rose-500 font-medium duration-200 text-sm'>
                    Pricing
                  </a>
                </li>
                <li className='px-6 py-3'>
                  <a
                    href='#Contact'
                    className='uppercase text-zinc-700 hover:text-rose-500 font-medium duration-200 text-sm'>
                    Contact
                  </a>
                </li>

                <Button
                  text='Login'
                  customClass='uppercase border-2 bg-rose-500 text-white border-rose-500 hover:bg-white hover:text-rose-500 text-md py-2 px-8 ml-4 '
                />
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <section>
        <div className='container'>
          <div className='grid grid-cols-12 gap-x-12 md:flex-row justify-between items-center pt-16 pb-8'>
            <div className='text-center md:text-left col-span-6 mb-4'>
              <h1 className='text-5xl font-semibold text-zinc-700 leading-snug'>
                A Simple Bookmark <br /> Manager
              </h1>
              <p className='text-zinc-500 text-lg mt-4'>
                A clean and simple interface to organize your favourite
                websites. Open a new browser tab and see your sites load
                instantly. Try it for free.
              </p>
              <div className='mt-8 flex space-x-4'>
                <Button
                  text='Get it on Chrome'
                  customClass=' py-3 px-6 bg-blue-600 text-white hover:bg-white shadow-md shadow-blue-500/20  text-sm border-2 border-blue-600 hover:bg-white hover:text-blue-500 hover:border-2 hover:border-blue-500'
                />
                <Button
                  text='Get it on Firefox'
                  customClass=' py-3 px-6  bg-white bg-zinc-300 text-zinc-700 shadow-md shadow-zinc-400/30 text-sm border-2 border-zinc-300 hover:bg-white hover:text-zinc-500 hover:border-2 hover:border-zinc-500 '
                />
              </div>
            </div>
            <div className='mt-8 md:mt-0 col-span-6'>
              <img
                src={Hero}
                alt='hero'
                className='w-full h-full object-contain'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Header
