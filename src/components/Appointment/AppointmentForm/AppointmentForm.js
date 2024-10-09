import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form"
import { MyContext } from '../../../App';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        width: '511px',
        height: "520px",
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');
const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {
    const [loggedInUser] = useContext(MyContext);
    const { register, handleSubmit, formState: { errors }, } = useForm()

    const onSubmit = (data) => {
        data.service = appointmentOn;
        data.date = date.toDateString();
        data.created = new Date();

        fetch(`http://localhost:5000/addAppointment`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert('Appointment added successfully')
                    closeModal();
                }
            })

    }

    return (
        <div>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal" >
                <h3 className='text-center text-color my-3'>{appointmentOn}</h3>
                <p className="text-secondary text-center mb-3">ON {date.toDateString()}</p>
                <form onSubmit={handleSubmit(onSubmit)} className='px-3'>
                    <input name='name' type='text' style={{ height: '45px' }} placeholder='Name' className='form-control my-3' {...register("name", { required: true })} />
                    {errors.name && <span className="text-danger">This field is required</span>}

                    <input name='phone' style={{ height: '45px' }} type='text' placeholder='Phone' className='form-control my-3' {...register("phone", { required: true })} />
                    {errors.phone && <span className="text-danger">This field is required</span>}

                    <input name='email' style={{ height: '45px' }} type='email' value={loggedInUser.email} placeholder='Email' className='form-control my-3' {...register("email", { required: true })} />
                    {errors.email && <span className="text-danger">This field is required</span>}

                    <div className="form-group row">
                        <div className="col-4">
                            <select name="gender" style={{ height: '45px' }} className='form-control my-1' {...register("gender", { required: true })}>
                                <option disabled={true} value={'Not set'}>Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                            {errors.gender && <span className="text-danger">required</span>}
                        </div>

                        <div className="col-4">
                            <input name='age' style={{ height: '45px' }} type='text' placeholder='Age' className='form-control my-1' {...register("age", { required: true })} />
                            {errors.age && <span className="text-danger">required</span>}
                        </div>

                        <div className="col-4">
                            <input name='weight' style={{ height: '45px' }} type='text' placeholder='Weight' className='form-control my-1' {...register("weight", { required: true })} />
                            {errors.weight && <span className="text-danger">required</span>}
                        </div>
                    </div>
                    <div className='mt-4' style={{ textAlign: 'right' }}>
                        <button onClick={closeModal} className="text-light fw-bold btn btn-dark mx-3">Close</button>
                        <input type="submit" className='btn bg-color fw-bold  text-light' style={{ margin: '0 auto' }} />
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default AppointmentForm;