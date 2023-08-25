<<<<<<< HEAD
// import About from "./pages/";
import PageLayout from "./components/PageLayout";
import SignUp from "./components/SignUp";
import Dashboard from "./pages/dashboard";
import PostJob from "./pages/post";
import Apply from "./pages/apply";
// import Home from "./pages/loginpage"
import Login from "./components/login";
import DeveloperPage from "./pages/developerpage";
import ProfilePage from "./pages/profilepage";
import Posted from "./pages/posted";
import JobPage from "./pages/jobpage";
export const routing = [

  {
    path: "/dashboard",
    element: <Dashboard />,
  },

{
  path:"/",
  element:<Login />
},

  {
    path: "/signup",
    element: <SignUp />,
  },

  {
    path: "/postjob",
    element: <PostJob />,
  },

  {
    path: "Jobs",
    element: <JobPage />,
  },

  {
    path: "/appliedjob",
    element: <Apply />,
  },

  {
    path: "/postedjob",
    element: <Posted />,
  },

  {
    path:"/developers",
    element: <DeveloperPage />,
  },

  {
    path:"/profile",
    element: <ProfilePage />,
  },
];

export const routes = [
  {
    path: "/",
    element: <PageLayout />,
    children: routing,
  },
];
=======
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
>>>>>>> d8595ad42d20a4349d702758e3b0ae85f4b55dab
