import React from 'react'

const index = ({ text, index, onClick, activeTab }) => {
  return (
    <li key={index} onClick={onClick} className='border-b-2 w-full px-12 py-4 '>
      <span
        className={` ${
          activeTab === index
            ? 'border-rose-600 text-zinc-700'
            : ' border-transparent text-zinc-300'
        } text-base px-12 py-4 border-b-4 lg:border-b-4  font-normal cursor-pointer duration-300 `}>
        {text}
      </span>
    </li>
  )
}

export default index
