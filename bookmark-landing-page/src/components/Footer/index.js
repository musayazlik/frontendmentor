import React from 'react'
import Logo from '../SvgIcon/Logo'
import Button from '../Button'
import Facebook from '../SvgIcon/Facebook'
import Twitter from '../SvgIcon/Twitter'
import Warning from '../SvgIcon/Warning'

const Footer = () => {
  const [email, setEmail] = React.useState({ value: '', error: false })

  const handleEmail = (e) => {
    e.preventDefault()
    function ValidateEmail(mail) {
      if (
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target[0].value)
      ) {
        return true
      }
      return false
    }

    if (ValidateEmail(e.target[0].value)) {
      setEmail({ value: e.target[0].value, error: true })
    } else {
      setEmail({ value: e.target[0].value, error: false })
    }
  }

  return (
    <footer>
      <section className='bg-blue-600 py-24'>
        <div className='lg:container text-center space-y-8'>
          <div className='flex flex-col justify-center'>
            <p className='uppercase text-sm text-white mb-6 tracking-[6px]  mx-auto '>
              35.000+ already joined
            </p>
            <div className='flex flex-col items-center gap-2 font-medium text-2xl sm:text-4xl text-white leading-6  mx-auto mb-6 px-4 '>
              <p>Stay up-to-date with what</p>
              <p>we're doing</p>
            </div>
            <form
              onSubmit={(e) => handleEmail(e)}
              className='flex flex-col sm:flex-row items-start gap-4 justify-center max-w-xl  sm:mx-auto w-full px-6 mx-auto '>
              <div
                className={`${
                  email.error === false ? 'bg-rose-600 p-0.5 pr-1' : ''
                }  rounded-md w-full relative duration-200`}>
                <input
                  type='text'
                  name='email'
                  className={` ${
                    email.error === false ? 'border-2 border-rose-600' : ''
                  } px-4 py-4  w-full  bg-white rounded-md  focus:outline-none text-lg duration-200`}
                  placeholder='Enter your email address'
                />
                {email.error === false ? (
                  <>
                    <p className=' bg-rose-600 text-sm sm:text-base  text-start px-4 py-1 rounded-b-md left-0 text-white font-medium italic duration-200 '>
                      Whoops, make sure it's an email
                    </p>
                    <span className='errorIcon absolute top-5 z-10 right-5 text-rose-600 duration-200 animate-pulse '>
                      <Warning />
                    </span>
                  </>
                ) : null}
              </div>
              <Button
                text='Contact Us'
                customClass={
                  'bg-rose-600 text-white px-7 py-4 rounded-md flex whitespace-nowrap border-2 border-rose-600 hover:bg-white hover:text-rose-600 duration-200 flex justify-center items-center w-full sm:w-auto'
                }
                textColor={'#fff'}
              />
            </form>
          </div>
        </div>
      </section>
      <section className='bg-[#242946]'>
        <div className='lg:container px-8 flex flex-col items-center justify-between py-8  md:flex-row gap-10 '>
          <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
            <div className='logo '>
              <Logo textColor={'#fff'} />
            </div>
            <nav className=''>
              <ul className='flex flex-col md:flex-row items-center gap-x-6 gap-6'>
                <li className=''>
                  <a
                    href='#Features'
                    className='uppercase text-white hover:text-rose-600 font-normal duration-200 text-base'>
                    Features
                  </a>
                </li>
                <li className=''>
                  <a
                    href='#Pricing'
                    className='uppercase text-white hover:text-rose-600 font-normal duration-200 text-base'>
                    Pricing
                  </a>
                </li>
                <li className=''>
                  <a
                    href='#Contact'
                    className='uppercase text-white hover:text-rose-600 font-normal duration-200 text-base'>
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className='social'>
            <ul className='flex items-center space-x-8'>
              <li className=''>
                <a
                  href='#Facebook'
                  className='uppercase text-white hover:text-rose-600 font-medium duration-200 text-sm'>
                  <Facebook />
                </a>
              </li>
              <li className=''>
                <a
                  href='#Twitter'
                  className='uppercase text-white hover:text-rose-600 font-medium duration-200 text-sm'>
                  <Twitter />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
