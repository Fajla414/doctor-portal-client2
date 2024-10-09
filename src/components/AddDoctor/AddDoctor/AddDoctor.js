import React, { useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const AddDoctor = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = (event) => {
        let newInfo = { ...info };
        newInfo[event.target.name] = event.target.value;
        setInfo(newInfo);
    }

    const handleChange = (event) => {
        const newFile = event.target.files[0];
        setFile(newFile)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        formData.append("name", info.name);
        formData.append('email', info.email);
        formData.append('phone', info.phone);

        fetch('http://localhost:5000/addADoctor', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {

            })
    }

    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-6">
                    <h3 className='text-color mt-5'>Add Doctor</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input onBlur={handleBlur} type="text" name='name' placeholder='Enter Name' className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input onBlur={handleBlur} placeholder='Enter Email' name='email' type="email" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Phone</label>
                            <input onBlur={handleBlur} type="text" name='phone' placeholder='Enter Phone number' className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Upload a image</label>
                            <input type="file" onChange={handleChange} className="form-control" />
                        </div>
                        <button type="submit" className="btn bg-color fw-bold text-light">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddDoctor;