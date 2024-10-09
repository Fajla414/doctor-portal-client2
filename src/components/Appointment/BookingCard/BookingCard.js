import React, { useContext, useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';
import { MyContext } from '../../../App';
import { Navigate, useLocation } from 'react-router-dom';

const BookingCard = ({ booking, date }) => {
    const [loggedInUser] = useContext(MyContext); 
    const location = useLocation();
    const [modalIsOpen, setIsOpen] = useState(false);
    const [redirectToLogin, setRedirectToLogin] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);


    const isLoggedIn = () => {
        if (loggedInUser && loggedInUser.email !== undefined) {
            openModal();
        }
        else {
            setRedirectToLogin(true);
        }
    }


    if (redirectToLogin) {
        return <Navigate to="/login" state={{ from: location }} />;
    }

    return (
        <div className="col mb-3">
            <div className="card box-shadow border-0 h-100 text-center pt-4">
                <div className="card-body">
                    <h5 className="card-title ">{booking.subject}</h5>
                    <p className="card-text text-secondary">{booking.visitingHour}</p>
                    <button onClick={isLoggedIn} className="btn bg-color fw-bold text-light">Get Appointment</button>
                    <AppointmentForm modalIsOpen={modalIsOpen} date={date} appointmentOn={booking.subject} closeModal={closeModal} />
                </div>
            </div>
        </div>
    );
};

export default BookingCard;
