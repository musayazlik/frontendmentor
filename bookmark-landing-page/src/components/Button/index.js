import React from 'react'

const Button = ({ text, customClass }) => {
  return (
    <button
      className={` rounded-md block font-medium duration-200 ${customClass} `}>
      {text}
    </button>
  )
}

export default Button
