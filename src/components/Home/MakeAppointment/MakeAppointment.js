import React from 'react';
import doctor from '../../../images/doctor.png';
import './MakeAppointment.css';

const MakeAppointment = () => {
    return (
        <section className="make-appointment">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img src={doctor} alt="" />
                    </div>
                    <div className="col-md-7 text-light py-5">
                        <h5 className='text-color'>Appointment</h5>
                        <h1>Make an Appointment Today</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tempore rerum commodi distinctio eaque maxime culpa doloribus ipsa, temporibus assumenda quisquam excepturi, at blanditiis consequatur placeat. Consequatur natus obcaecati eius.</p>
                        <button className="btn bg-color fw-bold text-light">Get Appointment</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;