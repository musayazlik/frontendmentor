import Content from './components/content'
import Header from './components/header'
import Sidebar from './components/sidebar'
import './styles/App.css'

function App() {
  return (
    <>
      <Header />
      <div className='container'>
        <div className='grid grid-cols-4 gap-y-5 md:gap-y-0 md:gap-x-5'>
          <div className='col-span-4 lg:col-span-2 xl:col-span-3'>
            <Content />
          </div>
          <div className='col-span-4 lg:col-span-2 xl:col-span-1 bg-p-dark  px-6 pt-10'>
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
