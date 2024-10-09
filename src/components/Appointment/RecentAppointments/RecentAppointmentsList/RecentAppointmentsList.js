import React, { useState } from 'react';

const RecentAppointmentsList = () => {
    const [recentAppointments, setRecentAppointments] = useState([]);

    return (
        <div>
            <h3 className="mb-4 mt-5 text-color">Recent Appointments</h3>
            <table className="table border rounded table-striped mt-3">
                <thead className="table-light">
                    <tr>
                        <th scope="col">Sr No</th>
                        <th scope="col">Date</th>
                        <th scope="col">Name</th>
                        <th scope="col">Contact</th>
                        <th scope="col">Prescription</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {recentAppointments.map((patients, index) =>
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td className="fw-medium text-secondary">{patients.name}</td>
                            <td className="fw-medium text-secondary">{patients.gender}</td>
                            <td className="fw-medium text-secondary">{patients.age}</td>
                            <td className="fw-medium text-secondary">{patients.weight}KG</td>
                            <td className="fw-medium text-secondary">{patients.phone}</td>
                            <td className="fw-medium text-secondary">{patients.email}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default RecentAppointmentsList;