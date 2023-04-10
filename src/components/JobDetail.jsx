import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetail = () => {
    const card = useLoaderData()
    // console.log(card);
    return (
        <div>
            <h3>Everything about this </h3>
            <h4>{card.company_name}</h4>
        </div>
    );
};

export default JobDetail;