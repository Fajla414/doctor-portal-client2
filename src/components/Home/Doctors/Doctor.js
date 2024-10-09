import React, { useEffect, useState } from 'react';
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
const [doctor, setDoctor] = useState([]);
useEffect(()=> {
    fetch(`http://localhost:5000/doctor`)
    .then(res => res.json())
    .then(data => {
        setDoctor(data)
    });
},[])

    return (
        <div className='container doctors-container'>
            <h2 className='text-center text-color'>Our Doctor</h2>
            <div className="row row-cols-1 mt-5 row-cols-md-3 g-4">
                    {doctor.map((doctor, index) => <SingleDoctor key={index} doctor={doctor} />)}
                </div>
        </div>
    );
};

export default Doctor;