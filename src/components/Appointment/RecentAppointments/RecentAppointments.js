import React from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import RecentAppointmentsHeader from './RecentAppointmentsHeader/RecentAppointmentsHeader';
import RecentAppointmentsList from './RecentAppointmentsList/RecentAppointmentsList';

const RecentAppointments = () => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-9">
                    <RecentAppointmentsHeader />
                    <RecentAppointmentsList />
                </div>
            </div>
        </div>
    );
};

export default RecentAppointments;