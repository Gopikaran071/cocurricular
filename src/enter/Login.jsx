import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <div>
        <div className='flex border bg-gradient-to-br from-slate-500 to-slate-900 justify-center items-center h-screen  '>
          <div>
            <form action="">
              <div className='h-[500px] w-[900px] backdrop-blur-sm shadow-2xl border rounded-2xl flex'>
                <div className='w-1/2 border rounded-lg'>
                  <div className='text-end mt-[430px] mr-9'>
                  <Link to='/Signup'> <span >Create a account sigup</span></Link>
                  </div>
                </div>

                <div className='w-1/2'>
                  <h1 className='text-4xl font-bold text-center  mt-4'>Login</h1>
                  <div className='ml-[120px]'>
                    <label className='relative '>
                      <input type="text" required className=' bg-transparent  border  rounded-lg outline-none text-sm px-7 py-2 mt-14 peer' />
                      <span className='absolute left-0 top-[1px] tracking-wide ml-3 peer-focus:text-white pointer pointer-events-none duration-200 peer-focus:text-sm peer-focus:-translate-y-5 peer-valid:-translate-y-5 peer-valid:text-white peer-valid:text-sm'>user name</span>
                    </label>
                  </div>
                  <div className='ml-[120px]'>
                    <label className='relative '>
                      <input type="password" required className=' bg-transparent  border  rounded-lg outline-none text-sm px-7 py-2 mt-11   peer' />
                      <span className='absolute left-0 top-[1px] tracking-wide ml-3 peer-focus:text-white pointer pointer-events-none duration-200 peer-focus:text-sm peer-focus:-translate-y-5 peer-focus:valid peer-valid:-translate-y-5 peer-valid:text-white peer-valid:text-sm'>password</span>
                    </label>
                  </div>

                  <div>  <Link to='/Home' >
                    <button className=' ml-[180px] border rounded-lg border-green-500 px-6 py-1 mt-12 hover:text-white focus:text-white focus:bg-green-500 hover:bg-green-500 duration-200'>login</button> </Link>
                  </div>

                  <div className='mt-9 ml-[150px]'><Link to='/Password'>
                    <button className='text-slate-500'> forget yours password ?</button></Link>
                  </div>

                </div>

              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Login