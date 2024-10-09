import React from 'react';

const RecentAppointmentsHeaderData = [
    {
        count: "09",
        firstInfo: 'Pending',
        secondInfo: 'Appointments',
        color: 'danger',
    },
    {
        count: "19",
        firstInfo: "Today's ",
        secondInfo: 'Appointments',
        color: 'primary',
    },
    {
        count: "34",
        firstInfo: 'Complete',
        secondInfo: 'Appointments',
        color: 'success',
    },
    {
        count: "78",
        firstInfo: 'Total',
        secondInfo: 'Patients',
        color: 'warning',
    },
]

const RecentAppointmentsHeader = () => {
    return (
        <div className='mt-4'>
            <h3 className='mb-4' >Dashboard</h3>
            <div className="row row-cols-1 row-cols-md-4 g-3">
                {RecentAppointmentsHeaderData.map((card, index) =>
                    <div className="col" key={index}>
                        <div className={`card border-0 text-light bg-${card.color}`} style={{height: '100px'}}>
                            <div className="card-body">
                                <div className=" d-flex  align-items-center justify-content-center">
                                    <div>
                                    <h1 className="card-title">{card.count}</h1>
                                    </div>
                                    <div className='ms-3'>
                                        <span > {card.firstInfo}</span><br />
                                        <span > {card.secondInfo}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RecentAppointmentsHeader;