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

const COMMON_ROUTES = [
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
        path: "/ProfilePage",
        element:  <ProfilePage />
    }
]
const SEEKER_ROUTES = [   
    ...COMMON_ROUTES,
    {
        path: "/Jobs",
        element:  <Jobs />
    },
    {
        path: "/AppliedJobsPage",
        element:  <AppliedJobsPage />
    }    
]
export const RECURITER_ROUTES = [ 
    ...COMMON_ROUTES,   
    {
        path: "/Postjob",
        element:  <PostJob />
    },
    {
        path: "/PostedJobsPage",
        element:  <PostedJobsPage />
    }
]

export const getRoutes =(hasRecuriter)=> [
    {
        path: "/",
        element:  <PageLayout/>,
        children: hasRecuriter ? RECURITER_ROUTES : SEEKER_ROUTES 
    }
]
