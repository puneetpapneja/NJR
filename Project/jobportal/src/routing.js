import React from "react";
import Dashbody from "./components/dashbody";
import Login from "./components/Login";
import Register from "./components/Register";
import PostAJob from "./components/postjob";
import AppliedJob from "./components/AppliedJob";

const routing = [
  //   { path: "/", element: <Home /> },
  { path: "/dashboard", element: <Dashbody /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/postjob", element: <PostAJob /> },
  { path: "/appliedjob", element: <AppliedJob /> },
];

export const routes = [
  {
    path: "/",
    element: <PageLayout />,
    children: routing,
  },
];
