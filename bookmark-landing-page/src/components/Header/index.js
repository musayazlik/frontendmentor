import React from 'react'
import Logo from '../SvgIcon/Logo'
import Hero from '../../assets/images/hero.svg'
import Button from '../Button'
import Close from '../SvgIcon/Close'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  return (
    <>
      <header>
        <div className='lg:container mx-auto pl-12 pr-8 md:px-12'>
          <div className='flex justify-between items-center pt-8'>
            <div className='logo'>
              <Logo textColor={'#232536'} />
            </div>
            <nav className=' lg:mr-10 hidden md:flex'>
              <ul className='flex items-center gap-x-2'>
                <li className='px-6 py-3'>
                  <a
                    href='#Features'
                    className='uppercase text-zinc-700 hover:text-rose-600 font-medium duration-200 text-sm'>
                    Features
                  </a>
                </li>
                <li className='px-6 py-3'>
                  <a
                    href='#Pricing'
                    className='uppercase text-zinc-700 hover:text-rose-600 font-medium duration-200 text-sm'>
                    Pricing
                  </a>
                </li>
                <li className='px-6 py-3'>
                  <a
                    href='#Contact'
                    className='uppercase text-zinc-700 hover:text-rose-600 font-medium duration-200 text-sm'>
                    Contact
                  </a>
                </li>

                <Button
                  text='Login'
                  customClass='uppercase border-2 bg-rose-600 text-white border-rose-600 hover:bg-white hover:text-rose-600 text-md py-2 px-8 ml-4 '
                />
              </ul>
            </nav>
            {/* Mobile Menu */}
            <div className='md:hidden'>
              <button
                onClick={() => setIsMenuOpen(true)}
                className='flex items-center px-3 py-2  rounded text-zinc-700 hover:text-rose-600 hover:border-rose-600'>
                <svg
                  className='fill-current h-7 w-7'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <title>Menu</title>
                  <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
                </svg>
              </button>
              <nav
                className={`${
                  isMenuOpen === true ? 'block' : 'hidden'
                } fixed w-screen h-screen bg-slate-900/90 left-0 top-0 px-12 py-12`}>
                <div className='mb-12 flex justify-between items-center'>
                  <Logo
                    textColor={'#fff'}
                    circleFill={'#fff'}
                    circlePath={'#0F172A'}
                  />
                  <button
                    className='flex items-center px-3 py-2  rounded text-zinc-200 hover:text-rose-600 hover:border-rose-600 close scale-105 duration-200 '
                    onClick={() => setIsMenuOpen(false)}>
                    <Close />
                  </button>
                </div>
                <ul className='flex flex-col items-center h-full w-full'>
                  <li className='px-6 py-5 border-b-2 first:border-t-2 border-slate-600/50 w-full text-center'>
                    <a
                      href='#Features'
                      className='uppercase text-white hover:text-rose-600 font-medium duration-200 text-sm'>
                      Features
                    </a>
                  </li>
                  <li className='px-6 py-5 border-b-2 border-slate-600/50 w-full text-center'>
                    <a
                      href='#Pricing'
                      className='uppercase text-white hover:text-rose-600 font-medium duration-200 text-sm'>
                      Pricing
                    </a>
                  </li>
                  <li className='px-6 py-5 border-b-2 border-slate-600/50 w-full text-center'>
                    <a
                      href='#Contact'
                      className='uppercase text-white hover:text-rose-600 font-medium duration-200 text-sm'>
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <section>
        <div className='lg:container mx-auto px-6'>
          <div className=' flex flex-col-reverse md:grid grid-cols-12 gap-x-12 md:flex-row justify-between items-center pt-8 md:pt-16 pb-8'>
            <div className='text-center md:text-left col-span-12 md:col-span-6 mb-4 flex flex-col items-center md:items-start '>
              <h1 className='text-3xl lg:text-5xl font-semibold text-zinc-700 leading-snug'>
                A Simple Bookmark <br /> Manager
              </h1>
              <p className='text-zinc-500 text-base md:text-lg mt-4 w-full sm:w-3/4'>
                A clean and simple interface to organize your favourite
                websites. Open a new browser tab and see your sites load
                instantly. Try it for free.
              </p>
              <div className='mt-8 flex justify-center md:justify-start space-x-2 sm:space-x-4'>
                <Button
                  text='Get it on Chrome'
                  customClass=' py-3 px-3 sm:px-6 bg-blue-600 text-white hover:bg-white shadow-md shadow-blue-500/20 text-xs sm:text-sm border-2 border-blue-600 hover:bg-white hover:text-blue-500 hover:border-2 hover:border-blue-500'
                />
                <Button
                  text='Get it on Firefox'
                  customClass=' py-3 px-3 sm:px-6  bg-white bg-zinc-300 text-zinc-700 shadow-md shadow-zinc-400/30 text-sm border-2 border-zinc-300 hover:bg-white hover:text-zinc-500 hover:border-2 hover:border-zinc-500 '
                />
              </div>
            </div>
            <div className='mt-8 md:mt-0 col-span-12 md:col-span-6'>
              <img
                src={Hero}
                alt='hero'
                className='w-full h-full object-contain max-h-[400px]'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Header
