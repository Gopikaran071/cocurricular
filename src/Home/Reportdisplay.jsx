import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs, orderBy, query, limit } from 'firebase/firestore';
import { Link } from 'react-router-dom'
import ramcologo from "../Public/ramco.jpg"

function Reportdisplay() {
    const [reports, setReports] = useState([]);

    const fetchReports = async () => {
        try {
            const querySnapshot = await getDocs(query(collection(db, 'report'), orderBy('timestamp', 'desc'), limit(1)));
            const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setReports(newData);
        } catch (error) {
            console.error('Error fetching reports: ', error);
        }
    };

    useEffect(() => {
        fetchReports();
    }, []);

    return (
        <div>
            {reports?.map((report, i) => (
                <div key={i}>

                    <div className='mx-[300px] border border-green-900 my-10'>
                        <div><img src={ramcologo} alt="" className='h-[80px] ml-[155px] mt-9' /></div>
                        <div className='my-9'>
                            <div className='mt-[25px]'> <span className='font-semibold ml-[23%] font-serif text-sm'>Department of &nbsp;{report.deptname}</span></div>
                            <div className='mt-[15px]'> <span className='font-semibold ml-[23%] font-serif text-sm'>Report on &nbsp;{report.eventname}</span></div>
                            <div className='mt-[35px] mx-[70px] text-justify text-sm font-serif'>
                                {report.eventreport}
                            </div>
                            <div className='mt-[35px]  border border-red-900 mx-[90px] '>
                                {report.photo1 && <img src={report.photo1} alt="Photo 1" className='object-fill h-[250px] w-[550px]' />}</div><br />

                            <div className='mt-[35px] border border-red-900 mx-[90px]'>{report.photo2 && <img src={report.photo2} alt="Photo 2" className='  h-[250px] w-[550px] object-fill' />}</div>

                          <div className='mt-[35px]'>  <span className='font-semibold font-serif text-sm ml-[25px]'>Feedback Analysis:</span></div>
                           <div className='mt-[45px] border border-red-900 mx-[90px]'> {report.feedback && <img src={report.feedback} alt="Feedback" className=' object-cover' />}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Reportdisplay
