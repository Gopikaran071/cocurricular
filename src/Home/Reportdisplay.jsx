import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../firebase';
import { collection, getDocs, limit, query } from 'firebase/firestore';

function Reportdisplay() {
    const [reports, setReports] = useState([]);

    const fetchReports = async () => {
        await getDocs(query(collection(db, 'report'), limit(1))).then((querySnapshot) => {
            const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setReports(newData);
        });
    };

    useEffect(() => {
        fetchReports();
    }, []);

    return (
        <div>
            {reports?.map((report, i) => (
                <p key={i}>
                    {report.eventname}
                    {report.eventreport}
                    {report.photo1}
                    {report.photo2}
                    {report.feedback}
                </p>
            ))}
        </div>
    );
}

export default Reportdisplay;
