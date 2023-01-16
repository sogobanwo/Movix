import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import HomePage from './Pages/HomePage'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/Register' element={<Register />}/>
        <Route path='/' element={<HomePage />}/>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
