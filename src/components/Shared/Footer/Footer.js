import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
        <footer className='footer-container'>
            <div className="container">
                <div className="row">
                    <div className="col-md-3"><br />
                        <p className="my-1">Check Up</p>
                        <p className="my-1">Emergency Dentel Care</p>
                        <p className="my-1">Treatment of Personal Diseases</p>
                        <p className="my-1">Tooth Extraction</p>
                    </div>
                    <div className="col-md-3">
                        <h5 className="text-color">Service</h5>
                        <p className="my-1">Check Up</p>
                        <p className="my-1">Tooth Extraction</p>
                        <p className="my-1">Emergency Dentel Care</p>
                        <p className="my-1">Treatment of Personal Diseases</p>
                        <p className="my-1">Check Up</p>
                        <p className="my-1">Emergency Dentel Care</p>
                    </div>
                    <div className="col-md-3">
                        <h5 className="text-color">Oral Health</h5>
                        <p className="my-1">Check Up</p>
                        <p className="my-1">Tooth Extraction</p>
                        <p className="my-1">Emergency Dentel Care</p>
                        <p className="my-1">Treatment of Personal Diseases</p>
                        <p className="my-1">Check Up</p>
                        <p className="my-1">Emergency Dentel Care</p>
                    </div>
                    <div className="col-md-3">
                        <h5 className="text-color">Our Address</h5>
                        <p className="my-1">New York - 101010 Hudson <br /> Yards</p>
                        <div className="icon-container mb-5 mt-4">
                            <span className='icon me-4'><i className="fa-brands fa-facebook-f"></i></span>
                            <span className='icon mx-3'><i className="fa-brands fa-linkedin"></i></span>
                            <span className='icon mx-3'><i className="fa-brands fa-twitter"></i></span>
                        </div>
                        <h5>Call now</h5>
                        <button className='btn bg-color fw-bold text-light'>+20255502145</button>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-4 m-auto text-center"><p className='line-height fw-bold' >Copyright {new Date().getFullYear()} All Rights Reserved</p></div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;