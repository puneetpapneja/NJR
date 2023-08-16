// import About from "./pages/";
import React from "react";

import PageLayout from "./components/PageLayout";
import Login from "./components/login";
import Home from "./pages/Home";
import SignUp from "./components/SignUp";
import Dashboard from "./pages/dashboard";
import PostJob from "./pages/post";
import AppliedJob from "./components/appliedjob";
export const routing = [
  {
    path: "/",
    element: <Login />,
  },
  
  {
    path: "/signup",
    element: <SignUp />,
  },

  {
    path: "/dashboard",
    element: <Dashboard />,
  },

  {
    path: "/postjob",
    element: <PostJob />,
  },

  {
    path: "/appliedjob",
    element: <AppliedJob />,
  },
];

export const routes = [
  {
    path: "/",
    element: <PageLayout />,
    children: routing,
  },
];