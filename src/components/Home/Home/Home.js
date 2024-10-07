import React from 'react';
import Header from '../Header/Header';
import Services from '../Servieces/Services';
import Feature from '../Feature/Feature';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Testimonial from '../Testimonial/Testimonial';
import Doctor from '../Doctors/Doctor';
import ContactForm from '../ContactForm/ContactForm';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
          <Header />
          <Services />
          <Feature />
          <MakeAppointment />
          <Testimonial />
          <Doctor />
          <ContactForm />
          <Footer />
        </div>
    );
};

export default Home;