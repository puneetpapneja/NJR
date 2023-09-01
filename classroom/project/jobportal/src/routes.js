import React from "react";
import Dashboard from "./pages/Dashboardpage";
import Pagelayout from "./components/PageLayout";
import Post from "./pages/Post";
import Jobs from "./pages/Jobspage";
import PostedJobs from "./pages/Postedpage";
import Appliedjob from "./pages/Appliedjobspage";
import UserProfile from "./pages/Profilepage";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
export const commonRoutes = [
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <SignUp />,
  },
  {
    path: "/profile",
    element: <UserProfile />,
  },
];
export const recruiterRoutes = [
  ...commonRoutes,
  {
    path: "/postjob",
    element: <Post />,
  },
  {
    path: "/postedjob",
    element: <PostedJobs />,
  },
];
export const seekerRoutes = [
  ...commonRoutes,
  {
    path: "/applyjob",
    element: <Jobs />,
  },
  {
    path: "/appliedjob",
    element: <Appliedjob />,
  },
];

const getRoutes = (hasRecruiter) => [
  {
    path: "/",
    element: <Pagelayout />,
    children: hasRecruiter ? recruiterRoutes : seekerRoutes,
  },
];
export { getRoutes };
