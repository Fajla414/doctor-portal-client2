import React from 'react';
import chair from '../../../images/chair.png';

const HeaderMain = () => {
    return (
        <main>
            <div style={{height: '600px'}} className="row d-flex align-items-center">
                <div className="col-md-4 offset-md-1">
                    <h1 className='secondary-text-color'>Your New Smile  Starts <br /> <span className="text-color">Here</span></h1>
                    <p className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam totam distinctio architecto explicabo soluta eveniet perspiciatis aspernatur quos, maxime vel corrupti ab officia at alias nesciunt, natus deleniti sed illum.</p>
                    <button className='btn bg-color fw-bold text-light'>Get Appointment</button>
                </div>
                <div className="col-md-6">
                    <img src={chair} className='img-fluid' alt="" />
                </div>
            </div>
        </main>
    );
};

export default HeaderMain;