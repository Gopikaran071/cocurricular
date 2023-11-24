import React from 'react'

function Circular() {
    const dept = "DEPARTMENT OF COMPUTER SCIENCE AND BUSINESS SYSTEMS"
    return (
        <div className='scrollbar-hide '>
            <div className='border  m-6  border-red-800 p-3  mx-[300px] '>
                <div className='border border-red-800 p-5 px-9'>
                    <div className='flex'>
                        <img src="/ramcologo.jpg" alt=" ramcologo" className='h-[95px]' />
                        <div className=''>
                            <span className='ml-[100px] font-bold font-serif'>RAMCO INSTITUTE OF TECHNOLOGY </span>
                            <span className='ml-[180px] font-bold font-serif'>RAJAPALAYAM</span><br />
                            <span className='font-serif font-bold  ml-[50px] text-xs'>{dept}</span><br />
                            <span className='ml-[180px]  font-serif  font-bold'>RIT–TECHNEBIZ</span><br />
                            <span className='ml-[200px]  font-serif  font-bold'><u>CIRCULAR</u></span>
                        </div>
                    </div>
                    {/* below header */}
                    <div className='flex'>
                        <div className='border border-red-800 p-5 w-1/2'>

                        </div>
                        <div className='border border-red-800 pl-5 w-1/2'>
                            <form action="">
                            <div className='mt-3'>
                            <div className='flex'>
                            <label htmlFor="" className='font-serif  font-semibold' >Event Name</label>
                            <textarea name="" id="eventname" cols="25" rows="1" className=' ml-2'></textarea>
                            </div>

                            <div>
                                <label htmlFor="" className='font-serif  font-semibold'> Date</label>
                            </div>
                            
                            </div>
                            </form>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Circular