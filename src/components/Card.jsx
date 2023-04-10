import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({card}) => {
    // console.log(card)
    const {id, company_logo, job_title, company_name, remote_or_onsite, location, fulltime_or_parttime, salary, job_description, job_responsibility, educational_requirements, experiences, contact_information} = card;
    return (
        <div className='bg-base-100 shadow-xl gap-9 mb-3 w-72 '>
            <img src={card.company_logo} alt="" />
            <h2 className='text-center'>{card.job_title}</h2>
            <p className='text-center'>{card.company_name}</p>
            <div className='gap-2 text-center'>
                <button>Remote</button>
                <button>full time</button>
            </div>
            <div className='text-center'>
                <p>{card.location}</p>
                <p>{card.salary}</p>
            </div> 
            <button className='mb-2 items-center'><Link to={`/card/${id}`}>view details</Link> </button>
            
        </div>
    );
};

export default Card;