import React from 'react';
import { Route, Routes } from "react-router-dom";
import Loginpg from './Login';
import Register from './register';
import Dashboard from './dashboard';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Loginpg />} />
            <Route path="/register" element={<Register />} />
            
        </Routes>
    );
}

export default AppRoutes;