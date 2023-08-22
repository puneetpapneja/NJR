import React from 'react';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashbord';
import Jobs from './pages/Jobs';
import PostJob from './pages/PostJob';
import PageLayout from './components/pagelayout';
import AppliedJobsPage from './pages/AppliedJobPage';
import ProfilePage from './pages/ProfilePage';
import PostedJobsPage from './pages/PostedJobPage';

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
        element:  <Jobs />
    },
    {
        path: "/Postjob",
        element:  <PostJob />
    },
    {
        path: "/AppliedJobsPage",
        element:  <AppliedJobsPage />
    },
    {
        path: "/ProfilePage",
        element:  <ProfilePage />
    },
    {
        path: "/PostedJobsPage",
        element:  <PostedJobsPage />
    }
]

export const routes = [
    {
        path: "/",
        element:  <PageLayout/>,
        children: routing
    }
]