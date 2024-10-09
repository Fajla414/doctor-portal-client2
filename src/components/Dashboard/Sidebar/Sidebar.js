import React, { useContext, useEffect, useState } from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUsers, faGear, faFile, faFolder, faBedPulse, faWandMagicSparkles, faUserPlus, } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { MyContext } from '../../../App';



const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(MyContext);
    const [isDoctor, setIsDoctor] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/isDoctor`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsDoctor(data))
    }, [])

    return (
        <div className='sidebar-container bg-color rounded ps-4 py-5'>
            <li className='nav-item list-unstyled text-light mb-4' >
                <Link className='nav-link' to={'/dashboard'}><FontAwesomeIcon className='fs-5' icon={faBars} /> <span className='fs-6 mx-2'>Dashboard</span></Link>
            </li>
            <li className='nav-item list-unstyled text-light mb-4' >
                <Link className='nav-link' to={'/appointment'}><FontAwesomeIcon className='fs-5' icon={faFolder} /> <span className='fs-6 mx-2'>Appointment</span></Link>
            </li>
            {isDoctor && <>
                <li className='nav-item list-unstyled text-light mb-4' >
                    <Link className='nav-link' to={'/allPatients'}><FontAwesomeIcon className='fs-5' icon={faBedPulse} /> <span className='fs-6 mx-2'>All Patients</span></Link>
                </li>
                <li className='nav-item list-unstyled text-light mb-4' >
                    <Link className='nav-link' to={'/recentAppointments'}><FontAwesomeIcon className='fs-5' icon={faWandMagicSparkles} /> <span className='fs-6 mx-2'>Recent Appointments</span></Link>
                </li>
                <li className='nav-item list-unstyled text-light mb-4' >
                    <Link className='nav-link' to={'/patients'}><FontAwesomeIcon className='fs-5' icon={faUsers} /> <span className='fs-6 mx-2'>Patients</span></Link>
                </li>
                <li className='nav-item list-unstyled text-light mb-4' >
                    <Link className='nav-link' to={'/addDoctor'}><FontAwesomeIcon className='fs-5' icon={faUserPlus} /> <span className='fs-6 mx-2'>Add Doctor</span></Link>
                </li>
                <li className='nav-item list-unstyled text-light mb-4' >
                    <Link className='nav-link' to={'/prescriptions'}><FontAwesomeIcon className='fs-5' icon={faFile} /> <span className='fs-6 mx-2'>Prescriptions</span></Link>
                </li>
                <li className='nav-item list-unstyled text-light mb-4' >
                    <Link className='nav-link' to={'/settings'}><FontAwesomeIcon className='fs-5' icon={faGear} /> <span className='fs-6 mx-2'>Settings</span></Link>
                </li>
            </>}
        </div>
    );
};

export default Sidebar;