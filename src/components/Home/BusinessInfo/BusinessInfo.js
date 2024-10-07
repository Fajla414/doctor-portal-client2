import { faClock, faLocationDot, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import InfoCard from '../InfoCard/InfoCard';

const businessInfoData = [
    {
        icon: faClock,
        title: 'Opening Hours',
        description: 'We are open 7 days',
        bgColor: "bg-color"
    },
    {
        icon: faLocationDot,
        title: 'Visit Our Locaton',
        description: 'Brooklyn NY 1000m',
        bgColor: "secondary-bgColor"
    },
    {
        icon: faPhoneVolume,
        title: 'Contact us now',
        description: '+000 123 45896',
        bgColor: "bg-color"
    },
]

const BusinessInfo = () => {
    return (
        <div className="container">
            <section className='row row-cols-1 row-cols-md-3 g-4'>
                {businessInfoData.map((info, index) => <InfoCard key={index} info={info} />)}
            </section>
        </div>
    );
};

export default BusinessInfo;