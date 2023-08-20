import React from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Pagelayout from "./components/pagelayout";
import Dashboard from "./components/Dashboard";
import PostJob from "./components/PostJob";
import AppliedJob from "./components/AppliedJob";

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
];

export const routes = [
  {
    path: "/",
    element: <Pagelayout />,
    children: prouting,
  },
];
