import React from 'react'

const index = ({ text, index, onClick, activeTab }) => {
  return (
    <span
      onClick={onClick}
      className={` ${
        activeTab === index
          ? 'border-rose-600 text-zinc-700'
          : ' border-transparent text-zinc-300'
      } text-base px-12 py-4 border-b-4  font-normal cursor-pointer duration-300 `}>
      {text}
    </span>
  )
}

export default index
