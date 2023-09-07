import React from 'react';
import Loginpage from './pages/loginpage';
import Registerpage from './pages/registerpage';
import PageLayout from './pages/page-layout';
import Boxcomponent from "./components/boxcomponent";
import Postpage from './pages/postpage';
import Appliedjob from './pages/appliedjobpage'
import Profile from './pages/profilepage';
import Postedjobpage from './pages/postedjobpage';
import Joblistpage from './pages/joblistpage';


export const commonRoute = [
    {
        path: "/dashboard",
        element:  <Boxcomponent />
    },
    {
        path: "/login",
        element:  <Loginpage />
    },
    {
        path: "/register",
        element:  <Registerpage />
    },
    {
        path:"/profilepage",
        element:<Profile />
    }
]

export const recruiterRoutes = [
    ...commonRoute,
    {
        path: "/postjob",
        element: <Postpage />,
    },
   

    {
        path:"/postedjob",
        element:<Postedjobpage />
    }
    


]

export const seekerRoutes=[
    ...commonRoute,
    {
        path: "/appliedjob",
        element:<Appliedjob />
    },
    {
        path:"/joblist",
        element:<Joblistpage />
    }

]

const getRoutes =(hasRecruiter)=> [
    {
        path: "/",
        element: <PageLayout />,
        children: hasRecruiter ? recruiterRoutes:seekerRoutes
    }
]

export {getRoutes};