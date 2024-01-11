import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import Reportdisplay from './Reportdisplay';
import { Link } from 'react-router-dom'

function Report() {
  const [deptname, setDeptname] = useState("");
  const [eventname, setEventName] = useState("");
  const [eventreport, setEventReport] = useState("");
  const [photo1, setPhoto1] = useState(null);
  const [photo2, setPhoto2] = useState(null);
  const [feedback, setFeedback] = useState(null);

  const handleFileChange = (e, setFile) => {
    const file = e.target.files[0];
    setFile(file);
  };

  const addtofirebase = async () => {
    const storage = getStorage();

    // Function to upload a file to Firebase Storage
    const uploadFile = async (file) => {
      const storageRef = ref(storage, 'images/' + file.name);
      await uploadBytes(storageRef, file);
      // Get the download URL of the uploaded file
      const url = await getDownloadURL(storageRef);
      return url;
    };

    // Upload images and get their download URLs
    const photo1URL = photo1 ? await uploadFile(photo1) : null;
    const photo2URL = photo2 ? await uploadFile(photo2) : null;
    const feedbackURL = feedback ? await uploadFile(feedback) : null;

    const data = {
      deptname: deptname,
      eventname: eventname,
      eventreport: eventreport,
      photo1: photo1URL,
      photo2: photo2URL,
      feedback: feedbackURL,
      timestamp: serverTimestamp(),
    };

    try {
      const docRef = await addDoc(collection(db, "report"), data);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    alert("Report created successfully Kindly Rfresh the page :)");
  };

  return (
    <div className=' '>
      <div className=''>
        <div className='border border-green-950 mx-[400px] my-10 rounded-2xl shadow-2xl'>
          <div className='flex justify-center items-center my-6 text-lg'><span className=' font-bold text-slate-700'>Create Your Report </span></div>
          <div className='mx-[50px]'>
          <div>
            <label htmlFor="deptname"><span className='font-semibold'>Enter the Department name :</span> <input type="text" id="deptname" onChange={(e) => setDeptname(e.target.value)} className="ml-[15px] h-[35px] mt-[5px] bg-zinc-100 py-1 shadow-inner rounded-md" /></label>
          </div>
          <div>
            <label htmlFor="eventname"><span className='font-semibold'>Enter the event name :</span> <input type="text" id="eventname" onChange={(e) => setEventName(e.target.value)} className="ml-[60px] h-[35px] mt-[25px] bg-zinc-100 py-1 shadow-inner rounded-md" /></label>
          </div>
          <div>
            <label htmlFor="eventreport"><span className='font-semibold'>Enter the event report : </span><input type="text" id="eventreport" onChange={(e) => setEventReport(e.target.value)} className="ml-[55px] h-[35px] mt-[25px] bg-zinc-100 py-1 shadow-inner rounded-md" /></label>
          </div><br />
          <div>
            <label htmlFor="photo1"><span className='font-semibold mt-[5px]'>Upload a photo1</span> <input type="file" id="photo1" onChange={(e) => handleFileChange(e, setPhoto1)} /></label>
          </div><br />
          <div>
            <label htmlFor="photo2"><span className='font-semibold'>Upload a photo2</span> <input type="file" id="photo2" onChange={(e) => handleFileChange(e, setPhoto2)} /></label>
          </div><br />
          <div>
            <label htmlFor="feedback"><span className='font-semibold'> Upload a feedback analysis</span> <input type="file" id="feedback" multiple onChange={(e) => handleFileChange(e, setFeedback)} /></label>
          </div>
          </div>
          <div className='flex justify-center items-center my-[25px]'><Link to="/Reportdisplay">
            <button type="submit" className="border bg-green-600   rounded-xl text-white p-2 font-semibold" onClick={addtofirebase}>Submit</button></Link>
          </div>
        </div>
      </div>
      {/* <div>
        <Reportdisplay />
      </div> */}
    </div>
  );
}

export default Report
