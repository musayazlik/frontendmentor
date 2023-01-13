import Content from './components/content'
import Header from './components/header'
import Sidebar from './components/sidebar'
import './styles/App.css'

function App() {
  return (
    <>
      <Header />
      <div className='container'>
        <div className='grid grid-cols-12 gap-y-7 lg:gap-y-0 md:gap-x-7'>
          <div className='col-span-12 lg:col-span-7 xl:col-span-8'>
            <Content />
          </div>
          <div className='col-span-12 lg:col-span-5 xl:col-span-4 bg-p-dark  px-8 pt-10 mt-10 lg:mt-0'>
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
