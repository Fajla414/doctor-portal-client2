import React from 'react';
import './ServicesDetail.css';

const ServicesDetail = ({ service }) => {
    return (
        <div className="col">
            <div className="card box-shadow border-0 h-100 text-center pt-4">
                <img src={service.img} style={{height: '75px', width: "70px" }} className="card-img-top m-auto img-fluid" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title mt-2 mb-3">{service.name}</h5>
                        <p className="card-text text-secondary">{service.description}</p>
                    </div>
            </div>
        </div>
    );
};

export default ServicesDetail;