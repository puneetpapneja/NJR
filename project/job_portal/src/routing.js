import React from 'react';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import PageLayout from './components/page-layout';
import Appliedjob from './pages/Appliedjob';
import Postjob from './pages/Postjob';
export const routing = [
    {
        path: "/",
        element:  <LoginPage /> 
    },
    {
        path: "/LoginPage",
        element:  <LoginPage />
    },
    {
        path: "/RegisterPage",
        element:  <RegisterPage /> 
    },
    {
        path: "/DashboardPage",
        element:  <DashboardPage /> 
    },
    {
        path: "/Appliedjob",
        element:  <Appliedjob /> 
    },
    {
        path: "/Postjob",
        element:  <Postjob /> 
    }
    
]
export const routes = [
    {
        path: "/",
        element: <PageLayout />,
        children: routing
    }
]

