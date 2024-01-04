import React, { useState } from 'react';
import {db} from '../firebase';
import {collection,addDoc} from 'firebase/firestore'
function Report() {



  const[eventname,setEventName]=useState(" ");
  const[eventreport,setEventReport]=useState(" ");
  const[photo1,setPhoto1]=useState(" ");
  const[photo2,setPhoto2]=useState(" ");
  const[feedback,setFeedback]=useState(" ");

  
const addtofirebase=()=>{

  const data={
    eventname:eventname,
    eventreport:eventreport,
  };

  try{

    const docRef = addDoc(collection(db,"report"),data);

  }
  catch(e)
  {
      console.log("error adding document",e);
  }
  alert(data.eventname)
  setEventName('');




}

  return (
    <div>
        <div>
            report 
        </div>
        <div>
            <label htmlFor="">enter the event name <input type="text" id='eventname' onChange={(e)=>setEventName(e.target.value)} className='outline-dotted'/></label>
        </div>
        <div>
            <label htmlFor="">enter the event report <input type="text" id='eventreport' onChange={(e)=>setEventReport(e.target.value)} className='outline-dotted'/></label>
        </div>
        <div>
            <label htmlFor="">upload a photo1 <input type="file" id='photo1' onChange={(e)=>setPhoto1(e.target.value)}/></label>
        </div>
        <div>
            <label htmlFor="">upload a photo2 <input type="file" id='photo2' onChange={(e)=>setPhoto2(e.target.value)}/></label>
        </div>
        <div>
            <label htmlFor="">upload a feedback <input type="file" id='feeedback' onChange={(e)=>setFeedback(e.target.value)}/></label>
        </div>
        <div>
          <button type="submit" className='border border-red-800' onClick={addtofirebase}>submit</button>
        </div>
    </div>
  )
}

export default Report