import React from "react";
import Dashbody from "./components/dashbody";
import Login from "./components/Login";
import Register from "./components/Register";
import PostJob from "./components/postjob";
import PageLayout from "./components/Pagelayout";
import Job from "./components/job";
import AppliedJob from "./components/appliedJob";
import PostedJob from "./components/postedJob";
import Profile from "./components/profile";
import developer from "./components/developers";

export const routing = [
  { path: "/dashboard", element: <Dashbody /> },
  { path: "/", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/postjob", element: <PostJob /> },
  { path: "/job", element: <Job /> },
  { path: "/appliedjob", element: <AppliedJob /> },
  { path: "/postedjob", element: <PostedJob /> },
  { path: "/profile", element: <Profile /> },
];

export const routes = [
  {
    path: "/",
    element: <PageLayout />,
    children: routing,
  },
];