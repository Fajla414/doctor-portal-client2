import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SingleDoctor = ({ doctor }) => {
    return (
        <div className="col">
            <div className="card border-0 h-100 text-center pt-4">
                <img src={doctor.img} style={{height: '350px'}} className="card-img-top m-auto img-fluid" alt="..." />
                <div className="card-body">
                    <h5 className="card-title mt-2 mb-3">{doctor.name}</h5>
                    <p className="card-text text-secondary"><FontAwesomeIcon className='text-primary' icon={faPhone} /> {doctor.phone}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleDoctor;