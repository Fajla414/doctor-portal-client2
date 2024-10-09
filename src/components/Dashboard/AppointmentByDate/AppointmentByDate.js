import React from 'react';
import AppointmentShortList from '../../Appointment/AppointmentShortList/AppointmentShortList';

const AppointmentByDate = ({appointments}) => {
    return (
        <div>
            <h3 className='text-center'><span className="text-color">{appointments.length}</span> Appointment Today</h3>
            { appointments.length ? <AppointmentShortList appointments={appointments}/> : <div><h6 className='text-center mt-5'>Nothing is here!</h6></div>}
        </div>
    );
};

export default AppointmentByDate;