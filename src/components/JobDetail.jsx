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
                
                <div>
                <h1 className='text-center mt-9'>Job Details</h1>
                <div>
                <div>
                    <div className='flex flex-col content-center flex-wrap items-end mt-6'>
                    <div>
                        <h2><span className='font-bold'>Job-Description</span>: {Data.job_description}</h2>
                        <h2><span className='font-bold'>Responsibility</span>: {Data.job_responsibility}</h2>
                        <h2><span className='font-bold'>Education Requirements</span>: {Data.educational_requirements}</h2>
                        <h2><span className='font-bold'>Experience</span>: {Data.experiences}</h2>
                    </div>
                    <div className='bg-slate-200 rounded-lg w-80'>
                        <h2 className='font-bold'>Job Details</h2>
                        <hr />   
                        <h3><span>Salary</span>: {Data.salary}</h3>
                        <h3><span>Job Title</span>: {Data.job_title}</h3>
                        <h2 className='font-bold'>Contact Information</h2>
                        <hr />
                        <h3><span>Phone</span>: +88013457889</h3>
                        <h3><span>E-mail</span>: jobs@acmecorp.com</h3>
                        <h3><span>Location</span>: {Data.location}</h3>
                    <button className='mb-3 bg-blue-400'>Apply Now</button>
                    
                    </div>
                </div>
                    </div>
                </div>
                </div>
                </div>
    
    );
};

export default JobDetail;