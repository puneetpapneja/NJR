import React from 'react';
import LoginPage from './pages/loginpage';
import RegisterPage from './pages/registerpage';
import DashboardPage from './pages/dashboardpage';
import AppliedjobsPage from './pages/appliedjobspage';
import PostjobPage from './pages/postjobpage';
import PageLayout from './components/page-layout'
export const routing = [
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
    path: "/AppliedJobs",
    element:  <AppliedjobsPage />
  },
  {
    path: "/PostJob",
    element:  <PostjobPage />
  },

]


export const routes = [
  {
      path: "/",
      element: <PageLayout />,
      children: routing
  }
]