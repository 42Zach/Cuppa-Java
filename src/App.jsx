import './index.css';
import Menu from './menu.jsx';
import Home from './home.jsx';
import Login from './login.jsx';
import Signup from './signup.jsx';
import Cart from './cart.jsx';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </>
  )
}

export default App