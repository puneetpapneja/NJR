// import About from "./pages/";
import PageLayout from "./components/pagelayout";
import SignUp from "./components/SignUp";
import Apply from "./pages/apply";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import PostJob from "./pages/post";
// import Login from "./components/Login";
// import DeveloperPage from "./pages/candidatepage";
import JobPage from "./pages/Jobpage";
import Posted from "./pages/posted";
import ProfilePage from "./pages/ProfilePage";
export const routing = [

  {
    path: "/",
    element: <LoginPage />,
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
    element: <Apply />,
  },

  {
    path: "/jobs",
    element: <JobPage />,
  },

  {
    path: "/postedjob",
    element: <Posted />,
  },

  {
    path: "/profile",
    element: <ProfilePage />,
  },
];

export const routes = [
  {
    path: "/",
    element: <PageLayout />,
    children: routing,
  },
];