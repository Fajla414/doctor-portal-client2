import React from 'react';
import doctorImg  from '../../../images/doctor-small.png';
import SingleDoctor from '../SingleDoctor/SingleDoctor';
import './Doctors.css';

const doctorData = [
    {
        name: 'Dr. Coudi',
        phone: '+880188934789',
        img: doctorImg,
    },
    {
        name: 'Dr. Coudi',
        phone: '+880188934789',
        img: doctorImg,
    },
    {
        name: 'Dr. Coudi',
        phone: '+880188934789',
        img: doctorImg,
    },
]

const Doctor = () => {
    return (
        <div className='container doctors-container'>
            <h2 className='text-center text-color'>Our Doctor</h2>
            <div className="row row-cols-1 mt-5 row-cols-md-3 g-4">
                    {doctorData.map((doctor, index) => <SingleDoctor key={index} doctor={doctor} />)}
                </div>
        </div>
    );
};

export default Doctor;