import React from 'react'
import Logo from '../SvgIcon/Logo'
import Button from '../Button'
import Facebook from '../SvgIcon/Facebook'
import Twitter from '../SvgIcon/Twitter'

const Footer = () => {
  return (
    <footer>
      <section className='bg-blue-600 py-24'>
        <div className='container text-center space-y-8'>
          <div className='flex flex-col justify-center'>
            <p className='uppercase text-sm text-white mb-6 tracking-[6px] w-1/2 mx-auto '>
              35.000+ already joined
            </p>
            <div className='flex flex-col items-center gap-2 font-medium text-4xl text-white w-1/2 mx-auto mb-6 '>
              <p>Stay up-to-date with what</p>
              <p>we're doing</p>
            </div>
            <div className='flex items-center gap-4 justify-center w-1/2 mx-auto px-28 '>
              <div className='w-full relative bg-rose-600 p-0.5 rounded-md'>
                <input
                  type='text'
                  className='px-4 py-4 border-2 border-rose-600 bg-white rounded-md w-full focus:outline-none text-lg  '
                  placeholder='Enter your email address'
                />
                <p className='absolute bg-rose-600 w-full text-start px-4 py-1 rounded-b-md text left-0 text-white font-medium italic'>
                  Whoops, make sure it's an email
                </p>
              </div>
              <Button
                text='Contact Us'
                customClass={
                  'bg-rose-600 text-white px-7 py-4 rounded-md flex whitespace-nowrap border-2 border-rose-600 hover:bg-white hover:text-rose-600 duration-200 flex justify-center items-center'
                }
                textColor={'#fff'}
              />
            </div>
          </div>
        </div>
      </section>
      <section className='bg-[#242946]'>
        <div className='container flex flex-col items-center justify-between py-8 space-y-8 md:flex-row md:space-y-0'>
          <div className='flex justify-between items-center '>
            <div className='logo mr-8'>
              <Logo textColor={'#fff'} />
            </div>
            <nav className='mr-20'>
              <ul className='flex items-center gap-x-2'>
                <li className='px-6 py-3'>
                  <a
                    href='#Features'
                    className='uppercase text-white hover:text-rose-600 font-normal duration-200 text-base'>
                    Features
                  </a>
                </li>
                <li className='px-6 py-3'>
                  <a
                    href='#Pricing'
                    className='uppercase text-white hover:text-rose-600 font-normal duration-200 text-base'>
                    Pricing
                  </a>
                </li>
                <li className='px-6 py-3'>
                  <a
                    href='#Contact'
                    className='uppercase text-white hover:text-rose-600 font-normal duration-200 text-base'>
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className='social'>
            <ul className='flex items-center'>
              <li className='px-6 py-3'>
                <a
                  href='#Facebook'
                  className='uppercase text-white hover:text-rose-600 font-medium duration-200 text-sm'>
                  <Facebook />
                </a>
              </li>
              <li className='px-6 py-3'>
                <a
                  href='#Twitter'
                  className='uppercase text-white hover:text-rose-600 font-medium duration-200 text-sm'>
                  <Twitter />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
