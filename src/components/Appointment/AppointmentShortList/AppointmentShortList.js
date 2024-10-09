import React from 'react';

const AppointmentShortList = ({ appointments }) => {

    return (
        <table className="table table-striped mt-5">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {appointments.map((appointment, index) => <tr key={index}>
                    <td>{appointment.name}</td>
                    <td>{appointment.phone}</td>
                    <td>{appointment.email}</td>
                </tr> )}
            </tbody>
        </table>
    );
};

export default AppointmentShortList;