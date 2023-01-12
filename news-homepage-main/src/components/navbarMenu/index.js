import React from 'react'

const NavbarMenu = ({ ulclass, liclass }) => {
  return (
    <ul className={ulclass}>
      <li className={liclass}>
        <a href='#Home'>Home</a>
      </li>
      <li className={liclass}>
        <a href='#New'>New</a>
      </li>
      <li className={liclass}>
        <a href='#Popular'>Popular</a>
      </li>
      <li className={liclass}>
        <a href='#Treding'>Trending</a>
      </li>
      <li className={liclass}>
        <a href='#Categories'>Categories</a>
      </li>
    </ul>
  )
}

export default NavbarMenu
