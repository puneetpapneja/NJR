import React from 'react';
import { Route, Routes } from "react-router-dom";
import Loginpg from './Login';
import Register from './register';
import Dashboard from './dashboard';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Loginpg />} />
            <Route path="/login" element={<Loginpg />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard/>} />
            
        </Routes>
    );
}

export default AppRoutes;