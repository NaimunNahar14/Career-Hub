import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AppliedJobs = () => {
    const jobs = useLoaderData();
    // console.log(jobs);
    
    return (
        <div>
           <div>
            <h1 className='text-center mt-9'>Applied Job</h1>

        </div>
        </div>
    );
};

export default AppliedJobs;