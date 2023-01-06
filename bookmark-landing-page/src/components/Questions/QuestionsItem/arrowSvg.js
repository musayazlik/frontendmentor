import React from 'react'

const ArrowSvg = ({ show }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={`transform duration-300 ${
        show === true ? 'rotate-90' : 'rotate-[-90deg]'
      }`}
      width='1.6em'
      height='1.6em'
      preserveAspectRatio='xMidYMid meet'
      viewBox='0 0 24 24'>
      <path
        fill={`${show === true ? '#F46262' : '#2563eb'}`}
        d='M16 22L6 12L16 2l1.775 1.775L9.55 12l8.225 8.225Z'
      />
    </svg>
  )
}

export default ArrowSvg
