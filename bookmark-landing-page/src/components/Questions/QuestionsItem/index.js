import React from 'react'
import ArrowSvg from './arrowSvg'

const QuestionItem = ({ question, answer }) => {
  const [show, setShow] = React.useState(false)

  const handleShow = () => {
    setShow(!show)
  }
  return (
    <div className='border-b-2 first:border-t-2 '>
      <div className=' pr-4 flex flex-col justify-between '>
        <div
          className='flex justify-between items-center text-zinc-800 hover:text-rose-600 py-6 cursor-pointer space-x-6 '
          onClick={() => {
            handleShow()
          }}>
          <p className='text-base sm:text-xl font-medium duration-300 '>
            {question}
          </p>
          <ArrowSvg show={show} />
        </div>
        <p
          className={`relative -z-10 leading-7 sm:leading-10 text-md sm:text-xl text-zinc-500  duration-300 ${
            show === true ? 'h-auto   py-6' : 'h-0 overflow-hidden '
          } `}>
          {answer}
        </p>
      </div>
    </div>
  )
}

export default QuestionItem
