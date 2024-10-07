import React from 'react';
import './Feature.css';
import treatment from '../../../images/treatment.png';

const Feature = () => {
    return (
        <div className='container feature-container'>
            <div className="row d-flex align-items-center">
                <div className="col-md-4 offset-md-1">
                    <img src={treatment} className='img-fluid' alt="" />
                </div>
                <div className="col-md-6 ms-4">
                    <h1>Exceptional Dental <br /> Care, on Your Terms</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et facere sunt numquam, earum aperiam similique neque provident cumque nobis facilis. Corrupti, perspiciatis quisquam. Dolor ab delectus tenetur sequi autem quos in voluptatem porro consequatur officiis! Minus ab, quis dolore debitis mollitia impedit dolorem quia fuga, in voluptatibus at natus consequuntur?
                    </p>
                    <button className='btn bg-color fw-bold text-light'>Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Feature;