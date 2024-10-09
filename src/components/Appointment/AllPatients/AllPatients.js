import React, { useEffect, useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const AllPatients = () => {
    const [allPatients, setAllPatients] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allPatients')
            .then(res => res.json())
            .then(data => setAllPatients(data))
    }, [])

    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar />

                </div>
                <div className="col-md-9">
                    <h3 className='text-color mt-5'>All Patients</h3>

                    <table className="table border rounded table-striped mt-3">
                        <thead className="table-light">
                            <tr>
                                <th scope="col">Sr No</th>
                                <th scope="col">Name</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Age</th>
                                <th scope="col">Weight</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allPatients.map((patients, index) =>
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
            </div>
        </div>
    );
};

export default AllPatients;