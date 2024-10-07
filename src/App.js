import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/home' exact element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;