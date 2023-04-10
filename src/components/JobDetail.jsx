import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetail = () => {
    const dynamic = useParams()
    console.log(dynamic.cardid)

    const [Data, setData] = useState({})
    useEffect(()=>{
        fetch(`jobs.json/${dynamic.cardid}`)
        .then(res => res.json())
        .then(data => setData(data.Data[0]))
    },[])
    // const card = useLoaderData()
    // console.log(card);
    return (
         <div>
        {/* //     <h3>Everything about this </h3>
            <h4>{card.company_name}</h4> */}
            <h4>{Data.company_name}</h4>
        </div>
    );
};

export default JobDetail;