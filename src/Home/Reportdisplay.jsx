import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs, orderBy, query, limit } from 'firebase/firestore';
import { Link } from 'react-router-dom'

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
                    
                    <p>{report.deptname}</p>
                    <p>{report.eventname}</p>
                    <p>{report.eventreport}</p>
                    {/* Displaying Images */}
                    {report.photo1 && <img src={report.photo1} alt="Photo 1" style={{ maxWidth: '100%', height: 'auto' }} />}
                    {report.photo2 && <img src={report.photo2} alt="Photo 2" style={{ maxWidth: '100%', height: 'auto' }} />}
                    {report.feedback && <img src={report.feedback} alt="Feedback" style={{ maxWidth: '100%', height: 'auto' }} />}
                </div>
            ))}
        </div>
    );
}

export default Reportdisplay
