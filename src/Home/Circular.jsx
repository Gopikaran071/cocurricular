import React from 'react'
import pannerlogo from "../Public/ramcologo.jpg"

function Circular() {
    const dept = "COMPUTER SCIENCE AND BUSINESS SYSTEMS"
    const ass = 'RIT–TECHNEBIZ'

    return (
        <div className='scrollbar-hide  p-6 '>
            <div className='border  shadow-2xl p-3  mx-[300px] '>
                <div className='border border-black p-5 px-9'>
                    <div className='flex'>
                        <img src={pannerlogo} alt=" ramcologo" className='h-[95px]' />
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
                        <div className=' pl-5 w-1/2'>
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
                                        <span >  PO Mapping   </span>
                                        <span className='font-bold ml-[10px]'>:</span>
                                    </div>
                                    <div className='border border-black '>
                                        <div className='mt-3 '>
                                            <input type="text" name="" id="" className='h-5 w-[45px] p-1  text-center font-serif text-sm font-semibold  border-r-0 border border-black' placeholder='po' />
                                            <input type="text" name="" id="" className='h-5 w-[45px] p-1  text-center font-serif text-sm font-semibold border-r-0 border border-black' placeholder='po' />
                                            <input type="text" name="" id="" className='h-5 w-[45px] p-1  text-center font-serif text-sm font-semibold border-r-0 border border-black' placeholder='po' />
                                            <input type="text" name="" id="" className='h-5 w-[45px] p-1 text-center  font-serif text-sm font-semibold border-r-0 border border-black' placeholder='po' />
                                            <input type="text" name="" id="" className='h-5 w-[45px] p-1 text-center  font-serif text-sm font-semibold border-r-0 border border-black' placeholder='po' />
                                            <input type="text" name="" id="" className='h-5 w-[45px] p-1 text-center  font-serif text-sm font-semibold border-r-1 border border-black' placeholder='po' />
                                            <div className='flex'>
                                                <div className='h-5 w-[45px] p-1 text-center  font-serif text-sm font-semibold border-r-0 border border-black' > <span className='  flex justify-center items-center che'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                                                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022" />
                                                </svg></span></div>
                                                <div className='h-5 w-[45px] p-1 text-center  font-serif text-sm font-semibold border-r-0 border border-black ' ></div>
                                                <div className='h-5 w-[45px] p-1 text-center  font-serif text-sm font-semibold border-r-0 border border-black' ></div>
                                                <div className='h-5 w-[45px] p-1 text-center  font-serif text-sm font-semibold border-r-0 border border-black' ></div>
                                                <div className='h-5 w-[45px] p-1 text-center  font-serif text-sm font-semibold border-r-0 border border-black' ></div>
                                                <div className='h-5 w-[45px] p-1 text-center  font-serif text-sm font-semibold border-r-1 border border-black' ></div>

                                            </div>



                                            {/* check box for po */}
                                            {/* <div className='flex  '>
                                                <div className='border h-5 w-[51px]  border-r-0  border-black '><input type="checkbox" name="" id="" className='h-[20px] w-[35px]  text-black p-1 border-r-0 border border-black' /></div>
                                                <div className='border h-5 w-[51px] border-r-0  border-black '><input type="checkbox" name="" id="" className='h-[20px] w-[35px]  text-black p-1 border-r-0 border border-black' /></div>
                                                <div className='border h-5 w-[51px] border-r-0  border-black '><input type="checkbox" name="" id="" className='h-[20px] w-[35px]  text-black p-1 border-r-0 border border-black' /></div>
                                                <div className='border h-5 w-[51px] border-r-0   border-black '><input type="checkbox" name="" id="" className='h-[20px] w-[35px]  text-black p-1 border-r-0 border border-black' /></div>
                                            </div> */}
                                        </div>
                                    </div>
                                    {/* below the po tables */}
                                    <div className='flex'>
                                        <div className='mt-5  w-1/2'>
                                            <div>
                                                <span className='text-xs font-bold ' id='student'>Student In-charge(s)</span>
                                                <textarea name="student" id='student' cols="17" rows="1" className=' text-sm ml-3'></textarea>
                                            </div>
                                        </div>
                                        <div className='mt-5 w-1/2'>
                                            <div>
                                                <span className='font-bold  text-xs' id="Faculty"> Faculty In-charge</span>
                                                <textarea name="Rules" id="Faculty" cols="17" rows="1" className=' text-sm ml-3'></textarea>
                                            </div>
                                        </div>
                                    </div><br />
                                    <div className='flex'>
                                        <div className='w-1/3 p-4'><span className='font-serif text-xs  font-semibold  '>HOD</span>
                                        </div>
                                        <div className='w-2/1 border p-4 '><span className='font-bold text-xs  '>Co-Curricular Coordinator</span>
                                        </div>
                                    </div>
                                    <div className='flex'>
                                        <div className='w-1/2 p-4  text-center'><span className='font-serif text-xs  font-semibold ' >Vice-Principal</span>
                                        </div>
                                        <div className='w-1/2 p-4  text-center'><span className='font-bold text-xs '>Principal</span>
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