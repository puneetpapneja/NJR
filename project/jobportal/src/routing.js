import React from "react";
import Dashbody from "./components/dashbody";
import Login from "./components/Login";
import Register from "./components/Register";
import PostJob from "./components/postjob";
import PageLayout from "./components/Pagelayout";
import Job from "./components/job";
import Profile from "./components/profile";
import AppliedJob from "./components/appliedJob";
import PostedJob from "./components/postedJob";

export const routing = [
  { path: "/dashboard", element: <Dashbody /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/postjob", element: <PostJob /> },
  { path: "/job", element: <Job /> },
  { path: "/appliedjob", element: <AppliedJob />},
  {path: "/postedjob", element:<PostedJob />},
  { path: "/profile", element: <Profile /> },
];

export const routes = [
  {
    path: "/",
    element: <PageLayout />,
    children: routing,
  },
];