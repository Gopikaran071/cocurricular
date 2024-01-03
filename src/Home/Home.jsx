import React from 'react'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div>

      <nav className='border flex rounded-xl shadow-black/50 shadow-lg p-1'>
        <a className='flex focus:shadow-sm ml-3' href='https://www.ritrjpm.ac.in/'>
          <img src="/ramcologo.jpg" alt="" className='h-9' />
          <span className='font-semibold mt-1 ml-2 text-xl'>RIT</span>
        </a>
        <h1 className='font-semibold mt-1 lg:ml-[490px] text-xl   md:ml-[550px]'>Co-Curricular</h1>
      </nav>

      {/* side taskbar */}
      <div className='float-right mr-2 '>
        <div className='mt-[20px]'>
          <div className='float-right border  shadow-lg rounded-2xl '>
            <Link to='/Form'>
              <button className=' rounded-lg p-[30px]  bg-blue-900 text-xs text-white '><span>annual <br />registration form</span></button>
            </Link>
          </div>

          <div className='w-1/2 flex float-right mt-2'>
            <div className='border  w-1/2 mr-2'>
              <Link to='/Circular'>
                <button className=' rounded-lg p-[15px] h-[130px] w-full float-right bg-violet-600 '><span className='text-xs text-white text-wrap text-center'>circular</span></button>
              </Link>
            </div>
            <div className='border  w-1/2'>
              <Link to='/Report'>
                <button className=' rounded-lg p-[15px] h-[130px] w-full float-right bg-violet-600 '><span className='text-xs text-white text-wrap text-center'>report</span></button>
              </Link>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  )
}

export default Home