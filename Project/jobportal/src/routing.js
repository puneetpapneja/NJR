import React from 'react';
import LoginPage from './pages/loginpage';
import RegisterPage from './pages/registerpage';
import DashboardPage from './pages/dashboardpage';
import JobsPage from './pages/jobspage';
import PostjobPage from './pages/postjobpage';
import PageLayout from './components/page-layout'
import JobsappliedPage from './pages/jobsappliedpage';
import PostedJobsPage from './components/postedjobs';
import ProfilePage from './pages/profilepage';
export const routing = [
  {
      path: "/",
      element:  <LoginPage/>
  },
  {
    path: "/Login",
    element:  <LoginPage/>
  },
  {
      path: "/Register",
      element:  <RegisterPage />
  },
  {
      path: "/Dashboard",
      element:  <DashboardPage />
  },
  {
    path: "/JobsApplied",
    element:  <JobsappliedPage />
  },
  {
    path: "/PostJob",
    element:  <PostjobPage />
  },
  {
    path: "/Profile",
    element: <ProfilePage/>
  },
  {
    path:"/Jobs",
    element: <JobsPage/>
  },
  {
    path:"/PostedJobs",
    element: <PostedJobsPage/>
  }

]


export const routes = [
  {
      path: "/",
      element: <PageLayout />,
      children: routing
  }
]