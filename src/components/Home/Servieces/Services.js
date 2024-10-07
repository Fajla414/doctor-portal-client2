import React from 'react';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import ServicesDetail from '../ServicesDetail/ServicesDetail';

const serviceData = [
    {
        img: fluoride,
        name: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, incidunt!',
    },
    {
        img: cavity,
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, incidunt!',
    },
    {
        img: whitening,
        name: 'Teath Whitening',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, incidunt!',
    },
]
const Services = () => {
    return (
        <section className='my-5'>
            <div className="container">
                <h4 className='text-center text-color '>Our Services</h4>
                <h1 className='text-center'>Services We Provide</h1>
                <div className="row row-cols-1 mt-5 row-cols-md-3 g-4">
                    {serviceData.map((service, index) => <ServicesDetail key={index} service={service} />)}
                </div>
            </div>
        </section>
    );
};

export default Services;