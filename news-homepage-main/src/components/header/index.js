import React from 'react'

import Logo from '../../assets/images/logo.svg'
import MenuIcon from '../../assets/images/icon-menu.svg'
import CloseMenuIcon from '../../assets/images/icon-menu-close.svg'
import NavbarMenu from '../navbarMenu'

const Header = () => {
  const [showMenu, setShowMenu] = React.useState(false)

  const handleMenu = () => {
    setShowMenu(!showMenu)
  }
  return (
    <div>
      <div className='container mt-10 md:mt-20 mb-14 '>
        <nav className='flex items-center justify-between w-full  mx-auto'>
          <img src={Logo} alt='' />

          {/* Desktop Menu */}

          <NavbarMenu
            ulclass={'hidden md:flex space-x-3'}
            liclass={'text-p-light hover:text-p-red px-4 py-2 duration-200'}
          />

          {/* Mobile Menu */}
          <div className='md:hidden '>
            <button onClick={() => handleMenu()}>
              <img src={MenuIcon} alt='' />
            </button>
            <div
              className={`${
                showMenu === true ? 'right-[0]' : '-right-[300px]'
              } fixed top-0 h-full bg-white min-w-[300px] items-start pl-3 pr-3 pt-9 z-20 duration-300`}>
              <div className='flex justify-end'>
                <button className='px-4 mb-8' onClick={() => handleMenu()}>
                  <img src={CloseMenuIcon} alt='Close Icon' width={40} />
                </button>
              </div>
              <NavbarMenu
                liclass={
                  'text-p-dark text-2xl hover:text-p-red px-4 py-2 duration-200'
                }
                ulclass={'flex flex-col gap-2 mt-20'}
              />
            </div>
            <div
              className={`${
                showMenu === true ? 'z-10 visible ' : '-z-10 invisible'
              } absolute top-0 left-0 bg-p-dark/50 z-10 h-screen w-screen duration-300`}
              onClick={handleMenu}></div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header
