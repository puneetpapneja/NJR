import React from 'react';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import Jobs from './pages/Jobs';
import NavBarComponent from './components/navbar';
import PostJob from './pages/Postjob';
import PageLayout from './components/pagelayout';
import AppliedJobsPage from './pages/AppliedJobsPage';
import ProfilePage from './pages/ProfilePage';
import PostedJobsPage from './pages/PostedJobsPage';

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
