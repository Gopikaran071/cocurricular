import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <div className='float-right border border-green-300 mr-4'>
      <Link to='/Form'>
          <button className=' rounded-lg p-[50px] ml-3 bg-green-500 mr-7 mt-[300px] '></button>
          </Link>
      </div>
      <div className='float-right border border-red-300 mr-4'>
      <Link to='/Circular'>
          <button className=' rounded-lg p-[50px] ml-3 bg-red-500 mr-7 mt-[300px] '></button>
          </Link>
      </div>
    </div>
  )
}

export default Home