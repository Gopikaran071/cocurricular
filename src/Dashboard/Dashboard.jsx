import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div className='mb-9 fixed'>
      <nav className='border flex  rounded-xl shadow-black/50 shadow-lg p-1 m-5'>
<a className='flex focus:shadow-sm ml-3' href='https://www.ritrjpm.ac.in/'>
  <img src="./ramcologo.jpg" alt="" className='h-9' />
  <span className='font-semibold mt-1 ml-2 text-xl'>RIT</span>
</a>
<h1 className='font-semibold mt-1 ml-[550px]   text-xl'>Co-Curricular</h1>
 <Link to='/Login'> <button   className='mt-1 p-1 rounded-lg bg-slate-400 font-bold px-2 ml-[600px]'>login</button></Link>
 <Link to='/Signup'> <button   className='mt-1 p-1 rounded-lg text-white bg-violet-950 ml-[10px]'>Sign Up</button></Link>
    </nav>

    <div className='border border-red-800 flex'>
    <div className='w-1/2 border h-screen border-green-700'>
      upcoming events
    </div>
    <div className='w-1/2 border border-purple-600'>
events
    </div>
    <div className='w-1/4'>
      refeere
    </div>
    </div>
    </div>
  
   
  )
}

export default Dashboard