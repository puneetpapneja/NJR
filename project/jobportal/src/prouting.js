import React from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Pagelayout from "./components/pagelayout";
import Dashboard from "./components/Dashboard";
import PostJob from "./components/PostJob";
import AppliedJob from "./components/AppliedJob";
import Profile from "./components/profile";
import Job from "./components/job";
import PostedJob from "./components/PostedJob";

const prouting = [
  {
    path: "/log",
    element: <Login />,
  },

  {
    path: "/reg",
    element: <Register />,
  },

  {
    path: "/dash",
    element: <Dashboard />,
  },
  {
    path: "/appliedjob",
    element: <AppliedJob />,
  },
  {
    path: "/postjob",
    element: <PostJob />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/job",
    element: <Job />,
  },
  {
    path: "/postedjob",
    element: <PostedJob />,
  },
];

export const routes = [
  {
    path: "/",
    element: <Pagelayout />,
    children: prouting,
  },
];
