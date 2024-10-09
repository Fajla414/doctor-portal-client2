import React, { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import './App.css';
import Appointment from './components/Appointment/Appointment/Appointment';
import Login from './components/Login/Login/Login';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AllPatients from './components/Appointment/AllPatients/AllPatients';
import RecentAppointments from './components/Appointment/RecentAppointments/RecentAppointments';
import AddDoctor from './components/AddDoctor/AddDoctor/AddDoctor';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';

export const MyContext = createContext();

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <MyContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/home' exact element={<Home />} />
          <Route path='/appointment' exact element={<Appointment />} />
          <Route path='/login' exact element={<Login />} />
          <Route path='/dashboard' exact element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path='/allPatients' exact element={<AllPatients />} />
          <Route path='/recentAppointments' element={<RecentAppointments />} />
          <Route path='/addDoctor' element={<AddDoctor />} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>

  );
};

export default App;