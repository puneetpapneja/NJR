import React from 'react';
import { Route, Routes } from "react-router-dom";
import Loginpg from './Login';
import Register from './register';
import Dashboard from './dashboard';
import Applyjob from './appliedjob';
import Postajob from './postajob';
import Postedjob from './postedjob';
const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Loginpg />} />
            <Route path="/login" element={<Loginpg />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/appliedjob" element={<Applyjob/>} />
            <Route path="/postajob" element={<Postajob/>} />
            <Route path="/postedjob" element={<Postedjob/>} />
        </Routes>
    );
}

export default AppRoutes;