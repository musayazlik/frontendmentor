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
          <p className='uppercase text-sm text-white tracking-[6px] '>
            35.000+ already joined
          </p>
          <p className=''></p>
          <div className='flex flex-col items-center gap-2 font-medium text-4xl text-white'>
            <p>Stay up-to-date with what</p>
            <p>we're doing</p>
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
                    className='uppercase text-white hover:text-rose-500 font-normal duration-200 text-base'>
                    Features
                  </a>
                </li>
                <li className='px-6 py-3'>
                  <a
                    href='#Pricing'
                    className='uppercase text-white hover:text-rose-500 font-normal duration-200 text-base'>
                    Pricing
                  </a>
                </li>
                <li className='px-6 py-3'>
                  <a
                    href='#Contact'
                    className='uppercase text-white hover:text-rose-500 font-normal duration-200 text-base'>
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
                  className='uppercase text-white hover:text-rose-500 font-medium duration-200 text-sm'>
                  <Facebook />
                </a>
              </li>
              <li className='px-6 py-3'>
                <a
                  href='#Twitter'
                  className='uppercase text-white hover:text-rose-500 font-medium duration-200 text-sm'>
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
