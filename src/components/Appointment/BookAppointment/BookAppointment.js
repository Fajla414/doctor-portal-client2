import React from 'react';
import BookingCard from '../BookingCard/BookingCard';
import './BookAppointment.css';

const bookingData = [
    {
        subject: 'Teeth Orthodontice',
        visitingHour: '8:00 AM - 9:00 PM',
        totalSpace: 10,
    },
    {
        subject: 'Teeth Orthodontice',
        visitingHour: '8:00 AM - 9:00 PM',
        totalSpace: 10,
    },
    {
        subject: 'Teeth Orthodontice',
        visitingHour: '8:00 AM - 9:00 PM',
        totalSpace: 10,
    },
    {
        subject: 'Teeth Orthodontice',
        visitingHour: '8:00 AM - 9:00 PM',
        totalSpace: 10,
    },
    {
        subject: 'Teeth Orthodontice',
        visitingHour: '8:00 AM - 9:00 PM',
        totalSpace: 10,
    },
    {
        subject: 'Teeth Orthodontice',
        visitingHour: '8:00 AM - 9:00 PM',
        totalSpace: 10,
    },
]

const BookAppointment = ({ date }) => {
    return (
        <section className='container bookAppointment-container'>
            <h2 className='text-center text-color'>Available Appointment on {date.toDateString()}</h2>
            <div className="row  row-cols-1 mt-5 row-cols-md-3 g-4">
                {bookingData.map((booking, index) => <BookingCard key={index} date={date} booking={booking} />)}
            </div>
        </section>
    );
};

export default BookAppointment;