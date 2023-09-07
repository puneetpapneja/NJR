import React from 'react';
import { Route, Routes } from "react-router-dom";
import Loginpg from './Login';
import Register from './register';
import Dashboard from './dashboard';
import Applyjob from './appliedjob';
import Postajob from './postajob';
import Postedjob from './postedjob';
import Jobs from './jobs';
import NavbarComponent from './navbar';

const AppRoutes = () => {
    return (
        <>
        {/* You don't need to include the Router component here */}
        <Routes>
            <Route path="/" element={<Loginpg />} />
            <Route path="/login" element={<Loginpg />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/appliedjob" element={<Applyjob />} />
            <Route path="/postajob" element={<Postajob />} />
            <Route path="/postedjob" element={<Jobs />} />
            <Route path="/jobs" element={<Postedjob />} />
            <Route path="/profile" element={<Postedjob />} />
        </Routes>
        </>
    );
}

export default AppRoutes;