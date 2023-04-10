import React, { useEffect, useState } from 'react';

const JobList = ({List}) => {   
    return (
        <div className='bg-base-100 shadow-xl gap-9 mb-3 w-48'>        
                <div>
                    <div>
                        <img className="" src={List.logo}alt="" />
                    </div>
                    <h3>{List.name}</h3>
                    <p>{List.jobsAvailable} Job Available </p>          

                </div>
            

        </div>
    );
};

export default JobList;