import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const InfoCard = ({ info }) => {
    return (
        <div className="col" >
            <div style={{ height: '130px' }}  className={`card  border-0 ${info.bgColor}`}>
                <div className="card-body pt-4">
                    <div className="container ">
                        <div className="row  text-light d-flex justify-content-center align-items-center">
                            <div className="col-md-3 text-center">
                                <FontAwesomeIcon style={{ fontSize: '3rem' }} icon={info.icon} />
                            </div>
                            <div className="col-md-8 ">
                                <h5 className="card-title">{info.title}</h5>
                                <small className="card-text text-light">{info.description}</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;