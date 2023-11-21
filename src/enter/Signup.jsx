import React from 'react'
import {Link} from 'react-router-dom'

const Signup = () => {
  return (
    <div>
      <div className='flex border bg-gradient-to-br from-slate-500 to-slate-900 justify-center items-center h-screen '>
        <div>
          <form action="">
            <div className='h-[500px] w-[900px] backdrop-blur-sm shadow-2xl border rounded-2xl  flex'>
              <div className=''>
                <div className='flex'>
                  <h1 className='text-2xl font-bold text-center ml-[170px]  mt-4'>Welcome to Association</h1>
                  <h1 className='text-xl font-bold text-center ml-9 text-slate-800 mt-5'>Create an account</h1>
                </div>
                <div className='grid grid-cols-2'>
                  <div className='ml-[180px] ' >
                    <label className='relative '>
                      <input type="text" required className=' bg-transparent  border  rounded-lg outline-none text-sm px-7 py-2 mt-8 peer' />
                      <span className='absolute left-0 top-[1px] tracking-wide ml-3 peer-focus:text-white pointer pointer-events-none duration-200 peer-focus:text-sm peer-focus:-translate-y-5 peer-valid:-translate-y-5 peer-valid:text-white peer-valid:text-sm'>user name</span>
                    </label>
                  </div>
                  <div className='ml-[120px]  mt-4'>
                    <label className='relative '>
                      <input type="text" required className=' bg-transparent  border  rounded-lg outline-none text-sm px-7 py-2 mt-4 peer' />
                      <span className='absolute left-0 top-[1px] tracking-wide ml-3 peer-focus:text-white pointer pointer-events-none duration-200 peer-focus:text-sm peer-focus:-translate-y-5 peer-valid:-translate-y-5 peer-valid:text-white peer-valid:text-sm'>roll number</span>
                    </label>
                  </div>
                  <div className=' ml-[180px] mt-5  '>
                      <label className='relative '>
                        <input list='yr' className=' bg-transparent  border focus:font-bold rounded-lg outline-none text-sm px-7 py-2 mt-4 peer' placeholder='year' />
                        <datalist id="yr">
                          <option value="I" />
                          <option value="II" />
                          <option value="III" />
                          <option value="IV" />
                        </datalist>
                      </label>  
                    </div>
                    
                
                  <div className='ml-[120px] mt-4  '>
                    <label className='relative '>
                      <input type="mail" required className=' bg-transparent  border  rounded-lg outline-none text-sm px-7 py-2 mt-4 peer' />
                      <span className='absolute left-0 top-[1px] tracking-wide ml-3 peer-focus:text-white pointer pointer-events-none duration-200 peer-focus:text-sm peer-focus:-translate-y-5 peer-valid:-translate-y-5 peer-valid:text-white peer-valid:text-sm'>mail</span>
                    </label>
                  </div>
                  <div className='ml-[180px] mt-5 '  >
                    <label className='relative '>
                      <input type="password" className=' bg-transparent  border  rounded-lg outline-none text-sm px-7 py-2 mt-4 peer' required />
                      <span className='absolute left-0 top-[1px] tracking-wide ml-3 peer-focus:text-white pointer pointer-events-none duration-200 peer-focus:text-sm peer-focus:-translate-y-5 peer-valid:-translate-y-5 peer-valid:text-white peer-valid:text-sm'>password</span>
                    </label>
                  </div>
                  

                  <div className=' ml-[120px] mt-4  '>
                    <label className='relative '>
                      <input list='dept' className=' bg-transparent  border focus:font-bold rounded-lg outline-none text-sm px-7 py-2 mt-4 peer' placeholder='department' />

                      <datalist id="dept">
                        <option value="CSBS" />
                        <option value="IT" />
                        <option value="CSE" />
                        <option value="AIDS" />
                        <option value="CIVIL" />
                        <option value="MECH" />
                        <option value="ECE" />
                        <option value="EEE" />
                      </datalist>
                    </label></div>
                    
                    <div className=' ml-[180px] mt-5   '>
                      <label className='relative '>
                        <input list='student' className=' bg-transparent  border focus:font-bold rounded-lg outline-none text-sm px-7 py-2 mt-4 peer' placeholder='student' />
                        <datalist id="student">
                          <option value="student" />
                          <option value="Faculty" />
                        </datalist>
                      </label>  
                    </div>
                    <div className='ml-[120px] mt-5 '>
                    <label className='relative '>
                      <input type="password"  className=' bg-transparent  border  rounded-lg outline-none text-sm px-7 py-2 mt-4 peer' required/>
                      <span className='absolute left-0 top-[1px] tracking-wide ml-3 peer-focus:text-white pointer pointer-events-none duration-200 peer-focus:text-sm peer-focus:-translate-y-5 peer-valid:-translate-y-5 peer-valid:text-white peer-valid:text-sm'>confirm password</span>
                    </label>
                  </div>
                  
                 
                  
                </div>
                <div><Link to="/Home">
                  <button type='submit' className=' ml-[380px] border rounded-lg duration-200 hover:text-white border-violet-950-500 px-6 py-1 mt-11 focus:text-white hover:bg-violet-950 text-white font-semibold focus:bg-red-500' > submit</button></Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Signup