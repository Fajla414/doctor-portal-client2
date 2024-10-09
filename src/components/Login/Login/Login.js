import React, { useContext } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import './Login.css';
import login from '../../../images/login.png'
import firebase from 'firebase/compat/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseConfig from './firebase.config';
import { MyContext } from '../../../App';
import { useLocation, useNavigate } from 'react-router-dom';
firebase.initializeApp(firebaseConfig);



const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(MyContext);

    const navigate = useNavigate();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: '/' } };

    // Google Sign In
    const handleGoogleSignIn = (event) => {
        event.preventDefault();
        const provider = new GoogleAuthProvider();

        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((res) => {
                const { displayName, email, photoURL } = res.user;
                const newUser = { name: displayName, email, photo: photoURL };
                setLoggedInUser(newUser);
                storeToken(res.user);
            }).catch((error) => {
                console.log(error)
            });
    }


    const storeToken = (user) => {
        user.getIdToken(/* forceRefresh */ true)
            .then((idToken) => {
               sessionStorage.setItem('token', idToken)
               navigate(from);
            }).catch((error) => {
                console.log(error)
            });
    }

    return (
        <div>
            <Navbar />
            <div className="container login-container">
                <div className="row d-flex align-items-center">
                    <div className=" col-md-4">
                        <h3 className='text-color text-center mb-5'>Login</h3>
                        <form className='shadow  px-5 py-4 rounded'>
                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input type="email" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" />
                            </div>
                            <p ><a href="/hello" className='text-danger text-decoration-none'>Forgot my password?</a></p>
                            <button type="submit" className="btn  fw-bold text-light my-2 container bg-color">Sign In</button>
                            <button onClick={handleGoogleSignIn} className='container fw-bold text-light google my-2 btn'>Sign In with Google</button>
                        </form>
                    </div>
                    <div className="col-md-6 offset-md-1">
                        <img src={login} className='img-fluid' alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;