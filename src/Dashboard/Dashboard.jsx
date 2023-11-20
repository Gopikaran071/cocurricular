import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div className='m-7'>
        <Link to='Login'><div className='py-1 px-2 border border-green-600 rounded-xl bg-green-500 float-right '>
            lon
        </div></Link>
        <Link to='Signup'><div className='py-1 px-2 border border-red-600 rounded-xl bg-red-500 float-right '>
            Signup
        </div></Link>
        </div>
  )
}

export default Dashboard