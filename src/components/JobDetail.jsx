import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetail = () => {
    const {Id} = useParams();
     const [Data, setData] = useState({})
     const jobs = useLoaderData();
  
    useEffect(() => {
        if(jobs){
            let detail = jobs.find(job=> job.id==Id);
            setData(detail);
        }
    },[])
    return (
         <div>
            <h2>{Data.company_name}</h2>
            <h2>{Data.educational_requirements}</h2>
            <h4>{Data.job_responsibility}</h4>
        </div>
    );
};

export default JobDetail;