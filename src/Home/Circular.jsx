import React from 'react'

function Circular() {
    const dept = "COMPUTER SCIENCE AND BUSINESS SYSTEMS"
    const ass = 'RIT–TECHNEBIZ'
    
    return (
        <div className='scrollbar-hide '>
            <div className='border  m-6  border-red-800 p-3  mx-[300px] '>
                <div className='border border-red-800 p-5 px-9'>
                    <div className='flex'>
                        <img src="/ramcologo.jpg" alt=" ramcologo" className='h-[95px]' />
                        <div className=''>
                            <span className='ml-[100px] font-bold font-serif'>RAMCO INSTITUTE OF TECHNOLOGY </span>
                            <span className='ml-[180px] font-bold font-serif'>RAJAPALAYAM</span><br />
                            <span className='font-serif font-bold  ml-[50px] text-xs'>DEPARTMENT OF {dept}</span><br />
                            <span className='ml-[180px]  font-serif  font-bold'>{ass}</span><br />
                            <span className='ml-[200px]  font-serif  font-bold'><u>CIRCULAR</u></span>
                        </div>
                    </div>
                    {/* below header */}
                    <div className='flex'>
                        <div className='border border-red-800 p-2 w-1/2'>

                        </div>
                        <div className='border border-red-800 pl-5 w-1/2'>
                            <form action="">
                                <div className='mt-7'>
                                    <div className='flex'>
                                        <label htmlFor="Event Name" className='font-serif text-sm  font-semibold ' >Event Name  </label>
                                        <span className='font-bold ml-[13px]'>:</span>
                                        <textarea name="EventName" id="eventname" cols="20" rows="1" className=' text-sm ml-3'></textarea>
                                    </div>
                                    <div className='mt-2'>
                                        <label htmlFor="date" className='font-serif  text-xs font-semibold'> Date </label>
                                        <span className='font-bold ml-[65px]'>:</span>
                                        <input type="text" name="date" id="date" className='ml-3 text-sm ' />
                                    </div>
                                    <div className='mt-2'>
                                        <label htmlFor="time" className='font-serif  text-xs font-semibold'> Time </label>
                                        <span className='font-bold ml-[61px] '>:</span>
                                        <input type="text" name="time" id="time" className='ml-3 text-sm ' />
                                    </div>
                                    <div className='mt-2'>
                                        <label htmlFor="venue" className='font-serif text-xs  font-semibold'> Venue </label>
                                        <span className='font-bold ml-[55px]'>:</span>
                                        <textarea name="Participants" id="Participants" cols="20" rows="1" className=' text-sm ml-3'></textarea>
                                    </div>
                                    <div className='mt-2'>
                                        <label htmlFor="Participants" className='font-serif text-xs  font-semibold'> Participants </label>
                                        <span className='font-bold ml-[19px]'>:</span>
                                        <textarea name="Participants" id="Participants" cols="20" rows="1" className=' text-sm ml-3'></textarea>
                                    </div>
                                    <div className='mt-2'>
                                        <label htmlFor="Rules" className='font-serif text-xs  font-semibold'> Rules </label>
                                        <span className='font-bold ml-[61px]'>:</span>
                                        <div className='mt-3'>
                                            <textarea name="Rules" id="Rules" cols="40" rows="1" className=' text-sm ml-3'></textarea>
                                        </div>
                                    </div>
                                    <div>
                                        <span className='font-serif text-xs  font-semibold'>  PO Mapping   </span>
                                        <span className='font-bold ml-[10px]'>:</span>
                                    </div>
                                    <div className='border border-black '>
                                        <div className='mt-3'>
                                            <input type="text" name="" id="" className='h-5 w-[51px] p-1  text-center font-serif text-sm font-semibold  border-r-0 border border-black' />
                                            <input type="text" name="" id="" className='h-5 w-[51px] p-1  text-center font-serif text-sm font-semibold border-r-0 border border-black' />
                                            <input type="text" name="" id="" className='h-5 w-[51px] p-1  text-center font-serif text-sm font-semibold border-r-0 border border-black' />
                                            <input type="text" name="" id="" className='h-5 w-[51px] p-1 text-center  font-serif text-sm font-semibold border-r-0 border border-black' />
                                            <input type="text" name="" id="" className='h-5 w-[51px] p-1 text-center  font-serif text-sm font-semibold border-r-0 border border-black' />
                                            <input type="text" name="" id="" className='h-5 w-[51px] p-1 text-center  font-serif text-sm font-semibold border-black' />
                                        
                                          <div className='flex '>
                                          <div className='border h-5 w-[51px]  border-r-0  border-black '><input type="checkbox" name="" id="" className='h-[20px] w-[35px]  text-black p-1 border-r-0 border border-black' /></div>
                                            <div className='border h-5 w-[51px] border-r-0  border-black '><input type="checkbox" name="" id="" className='h-[20px] w-[35px]  text-black p-1 border-r-0 border border-black' /></div>
                                            <div className='border h-5 w-[51px] border-r-0  border-black '><input type="checkbox" name="" id="" className='h-[20px] w-[35px]  text-black p-1 border-r-0 border border-black' /></div>
                                            <div className='border h-5 w-[51px] border-r-0   border-black '><input type="checkbox" name="" id="" className='h-[20px] w-[35px]  text-black p-1 border-r-0 border border-black' /></div>
                                          </div>

                                            
                                        </div>
                                        <div>
                                        </div>
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