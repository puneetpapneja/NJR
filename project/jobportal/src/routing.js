import React from 'react';
import Appliedjobs from './components/Appliedjobs';
import Dashboard from './components/Dashboard';
import Postjob from './components/Postjob';
import Header from './components/Header';
import PageLayout from './components/Pagelayout';
import Menu from './components/Menu';
import Postedjob from './components/Postedjob';

export const routing = [
    {
        path: "/",
        element:  <Dashboard />
    },
    {
        path: "/AppliedJob",
        element:  <Appliedjobs />
    },
    {
        path: "/PostJob",
        element:  <Postjob />
    },
    {
        path: "/PostedJob",
        element:  <Postedjob />
    },
    
]

export const routes = [
    {
        path: "/",
        element: <PageLayout />,
        children: routing
    }
]
