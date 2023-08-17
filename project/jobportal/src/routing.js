import React from 'react';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashbord';
import Jobs from './pages/Jobs';
import PostJob from './pages/PostJob';
import PageLayout from './components/pagelayout';

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
        path: "/Dashboard",
        element:  <Dashboard />
    },
    {
        path: "/Jobs",
        element:  < Jobs />
    },
    {
        path: "/Postjob",
        element:  < PostJob />
    }
   
]

export const routes = [
    {
        path: "/",
        element:  <PageLayout/>,
        children: routing
    }
]