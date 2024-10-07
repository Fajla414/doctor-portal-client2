import React from 'react';
import first from '../../../images/people1.png'
import second from '../../../images/people2.png'
import third from '../../../images/people3.png'
import TestmonialSingle from '../TestmonialSingle/TestmonialSingle';
import './Testimonial.css';

const testimonialData = [
    {
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio ipsa nisi nihil officiis dicta eaque beatae consectetur quia quibusdam incidunt.',
        img: first,
        name: 'Winson Herry',
        location: 'Dhaka',
    },
    {
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio ipsa nisi nihil officiis dicta eaque beatae consectetur quia quibusdam incidunt.',
        img: second,
        name: 'Winson Herry',
        location: 'Dhaka',
    },
    {
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio ipsa nisi nihil officiis dicta eaque beatae consectetur quia quibusdam incidunt.',
        img: third,
        name: 'Winson Herry',
        location: 'Dhaka',
    },
]

const Testimonial = () => {
    return (
        <div className='container testimonial-container'>
            <h5 className='text-color fw-bold'>TESTIMONIAL</h5>
            <h1>What's Our Patients <br /> Says</h1>
            <div className="row row-cols-1 mt-5 row-cols-md-3 g-4">
                {testimonialData.map((testimonial, index) => <TestmonialSingle  key={index} testimonial={testimonial} /> )}
            </div>
        </div>
    );
};

export default Testimonial;