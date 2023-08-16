import React from 'react';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import PageLayout from './components/page-layout';

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
    }
    
]
export const routes = [
    {
        path: "/",
        element: <PageLayout />,
        children: routing
    }
]

