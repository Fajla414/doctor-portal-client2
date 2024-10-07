import React from 'react';

const TestmonialSingle = ({testimonial}) => {
    return (
        <div className="col">
        <div className="card  border-1 py-4 px-3 h-100 pt-4">
           <p className='text-secondary mb-3 text-justify'>{testimonial.description}</p>
           <div className="row d-flex-align-items-center">
            <div className="col-md-2">
                <img src={testimonial.img} className='img-fluid' alt="" />
            </div>
            <div className="col-md-9 ">
                <h5 className="card-title text-color">{testimonial.name}</h5>
                <small className="card-text text-secondary">{testimonial.location}</small>
            </div>
           </div>

        </div>
    </div>
    );
};

export default TestmonialSingle;