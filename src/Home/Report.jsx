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
      deptname:deptname,
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

    alert("Report created successfully :)");
  };

  return (
    <div>
      <div>Report</div>
      <div>
        <label htmlFor="deptname">Enter the Department name <input type="text" id="deptname" onChange={(e) => setDeptname(e.target.value)} className="outline-dotted" /></label>
      </div>
      <div>
        <label htmlFor="eventname">Enter the event name <input type="text" id="eventname" onChange={(e) => setEventName(e.target.value)} className="outline-dotted" /></label>
      </div>
      <div>
        <label htmlFor="eventreport">Enter the event report <input type="text" id="eventreport" onChange={(e) => setEventReport(e.target.value)} className="outline-dotted" /></label>
      </div>
      <div>
        <label htmlFor="photo1">Upload a photo1 <input type="file" id="photo1" onChange={(e) => handleFileChange(e, setPhoto1)} /></label>
      </div>
      <div>
        <label htmlFor="photo2">Upload a photo2 <input type="file" id="photo2" onChange={(e) => handleFileChange(e, setPhoto2)} /></label>
      </div>
      <div>
        <label htmlFor="feedback">Upload a feedback <input type="file" id="feedback" onChange={(e) => handleFileChange(e, setFeedback)} /></label>
      </div>
      <div><Link to="/Reportdisplay">
        <button type="submit" className="border border-red-800" onClick={addtofirebase}>Submit</button></Link>
      </div>
      {/* <div>
        <Reportdisplay />
      </div> */}
    </div>
  );
}

export default Report
