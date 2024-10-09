import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import AppointmentByDate from '../AppointmentByDate/AppointmentByDate';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { MyContext } from '../../../App';

const contaierStyle = {
    backgroundColor: '#F4FDFB',
    height: '100%'
}

const Dashboard = () => {
    const [loggedInUser , setLoggedInUser] = useContext(MyContext);
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [appointments, setAppointments] = useState([]);
    const handleDateChange = (date) => {
        setSelectedDate(date.toDateString());

    }

    useEffect(() => {
        fetch(`http://localhost:5000/appointmentByDate`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ date: selectedDate, email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => {
                setAppointments(data)
            })
    }, [selectedDate])


    return (
        <div className="container-fluid">
            <div className="row" style={contaierStyle}>
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-3 mt-5">
                    <Calendar className="border shadow rounded" onChange={handleDateChange} value={new Date()} />
                </div>
                <div className="col-md-5 mt-5">
                    <AppointmentByDate appointments={appointments} />
                </div>
            </div>
        </div>

    );
};

export default Dashboard;