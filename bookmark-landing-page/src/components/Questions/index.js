/** Data */
import { questionData } from '../../api/questionData'
/** Components */
import Button from '../Button'
import QuestionItem from './QuestionsItem'

const Questions = () => {
  return (
    <section className='mb-40'>
      <div className='container grid grid-cols-6'>
        <div className=' mx-auto flex flex-col items-center col-span-12'>
          <h2 className='mb-6  font-semibold text-2xl sm:text-4xl text-zinc-700 text-center'>
            Frequently Asked Questions
          </h2>
          <p className='mb-12 text-md sm:text-xl text-zinc-400 font-normal max-w-xs sm:max-w-3xl text-center sm:px-20'>
            Here are some of our FAQs. If you have any other questions you'd
            like answered please feel free to email us.
          </p>
        </div>
        <div className='col-span-12 w-full sm:max-w-xl mx-auto mb-12'>
          {questionData.map((item, index) => {
            return (
              <QuestionItem
                key={index}
                question={item.question}
                answer={item.answer}
              />
            )
          })}
        </div>
        <div className='col-span-4 col-start-2 flex justify-center'>
          <Button
            text='More Info'
            customClass=' w-fit py-3 px-6 bg-blue-600 text-white shadow-md shadow-blue-500/20  text-md border-2 border-blue-600 hover:bg-white hover:text-blue-500 hover:border-2 hover:border-blue-500'
          />
        </div>
      </div>
    </section>
  )
}

export default Questions
