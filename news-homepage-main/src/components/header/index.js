import React from 'react'

import Logo from '../../assets/images/logo.svg'

const Header = () => {
  return (
    <div>
      <div className='container mt-20 mb-14'>
        <nav className='flex justify-between w-full max-w-7xl mx-auto'>
          <img src={Logo} alt='' />

          <ul className='flex space-x-3'>
            <li className='text-p-light hover:text-p-red px-4 py-2 duration-200'>
              <a href='#Home'>Home</a>
            </li>
            <li className='text-p-light hover:text-p-red px-4 py-2 duration-200'>
              <a href='#New'>New</a>
            </li>
            <li className='text-p-light hover:text-p-red px-4 py-2 duration-200'>
              <a href='#Popular'>Popular</a>
            </li>
            <li className='text-p-light hover:text-p-red px-4 py-2 duration-200'>
              <a href='#Treding'>Treding</a>
            </li>
            <li className='text-p-light hover:text-p-red px-4 py-2 duration-200'>
              <a href='#Categories'>Categories</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header
