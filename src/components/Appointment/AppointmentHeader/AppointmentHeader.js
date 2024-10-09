import React from 'react';
import chair from '../../../images/chair.png';
import './Appointment.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const AppointmentHeader = ({handleDateChange}) => {

    return (
        <main className='appoinment-container'>
            <div style={{ height: '600px' }} className="row d-flex align-items-center">
                <div className="col-md-4 offset-md-1">
                    <h1 className='secondary-text-color  mb-5'>Appoinment</h1>
                    <Calendar onChange={handleDateChange} value={new Date()} />
                </div>
                <div className="col-md-6">
                    <img src={chair} className='img-fluid' alt="" />
                </div>
            </div>
        </main>
    );
};

export default AppointmentHeader;