import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({card}) => {
    // console.log(card)
    const {id, company_logo, job_title, company_name, remote_or_onsite, location, fulltime_or_parttime, salary, job_description, job_responsibility, educational_requirements, experiences, contact_information} = card;
    return (
        <div>
            <h3>{company_name}</h3>
            <p>{job_description}</p>
            <button><Link to={`/card/${id}`}>view details</Link> </button>
            
        </div>
    );
};

export default Card;