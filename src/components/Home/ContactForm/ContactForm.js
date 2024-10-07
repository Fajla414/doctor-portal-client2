import React from 'react';
import './ContactForm.css';
import { useForm } from "react-hook-form"

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => console.log(data)

    return (
        <div className='contact-form py-5'>
            <h4 className="text-color text-center">Contact Us</h4>
            <h1 className='text-light text-center'>Stay Connected With Us</h1>
            <div className="row mt-5">
                <div className="col-5 m-auto">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input name='email' type='email' style={{ height: '45px' }} placeholder='Email Addreess *' className='form-control my-3' {...register("email", { required: true })} />
                        {errors.exampleRequired && <span>This field is required</span>}

                        <input name='subject' style={{ height: '45px' }} type='text' placeholder='Subject *' className='form-control my-3' {...register("subject", { required: true })} />
                        {errors.exampleRequired && <span>This field is required</span>}
                        
                        <textarea className="form-control my-3" placeholder="Message *" name='message' {...register("message", { required: true })} style={{ height: '100px' }}></textarea>

                        <input type="submit"  className='btn bg-color fw-bold text-light' style={{margin: '0 auto'}}/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;