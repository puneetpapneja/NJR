import PageLayout from "./components/PageLayout";
import LoginPage from "./pages/loginpage";
import SignUp from "./components/SignUp";
import Dashboard from "./pages/dashboard";
import PostJob from "./pages/post";
import Apply from "./pages/apply";
import ProfilePage from "./pages/profilepage";
import Posted from "./pages/posted";
import JobPage from "./pages/jobpage";

export const commonRoutes = [

  {
    path: "/dashboard",
    element: <Dashboard />,
  },

  {
    path: "/login",
    element: <LoginPage />,
  },

  {
    path: "/signup",
    element: <SignUp />,
  },

];

export const recruiterRoutes = [
  ...commonRoutes,
  {
    path: "/postjob",
    element: <PostJob />,
  },

  {
    path: "/postedjob",
    element: <Posted />,
  },

];

export const seekerRoutes = [
  ...commonRoutes,
  {
    path: "/appliedjob",
    element: <Apply />,
  },

  {
    path: "/jobs",
    element: <JobPage />,
  },

];

export const getRoutes = (hasRecruiter) => [
  {
    path: "/",
    element: <PageLayout />,
    children: hasRecruiter ? recruiterRoutes : seekerRoutes
  },
];
