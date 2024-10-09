import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../../../App';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(MyContext);

    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link className='navbar-brand' to={'/'}><h4>Doctor Portal</h4></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav ms-auto mb-2 d-flex align-items-center text-color mb-lg-0">
                            <li className="nav-item">
                                <Link to={'/home'} className='nav-link fw-bold mx-3'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/appointment'} className='nav-link fw-bold mx-3'>Appoinment</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/dashboard'} className='nav-link fw-bold mx-3'>Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/blog'} className='nav-link fw-bold mx-3 '>Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/reviews'} className='nav-link fw-bold mx-3 '>Reviews</Link>
                            </li>
                            {loggedInUser.email ? < >
                                <li className="nav-item"><Link to={'/contact'} className='nav-link fw-bold ms-3 '>Contact Us</Link></li>
                                <li className="nav-item"><Link to={'/profile'} className='nav-link fw-bold ms-3 '>img<img src={loggedInUser.photo} style={{ borderRadius: '50%', width: '35px' }} className='img-fluid' alt="" /></Link></li>
                            </> : <li className="nav-item"><Link to={'/login'} className='nav-link fw-bold ms-3 '>Login</Link></li>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;