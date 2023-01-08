import React from 'react'

const index = ({ text, index, onClick, activeTab }) => {
  return (
    <li
      key={index}
      onClick={onClick}
      className={`border-b-2 w-full px-12 lg:px-0 py-6  `}>
      <span
        className={` ${
          activeTab === index
            ? 'border-rose-600 text-zinc-700'
            : ' border-transparent text-zinc-300'
        } text-base px-0 lg:px-16 py-6 border-b-4 lg:border-b-4  font-normal cursor-pointer duration-300 whitespace-nowrap hover:text-rose-600 `}>
        {text}
      </span>
    </li>
  )
}

export default index
