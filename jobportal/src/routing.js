// import About from "./pages/";
import PageLayout from "./components/pagelayout";
import LoginPage from "./pages/LoginPage";
import SignUp from "./components/SignUp";
import Dashboard from "./pages/Dashboard";
import PostJob from "./pages/post";
import Apply from "./pages/apply";
// import Login from "./components/Login";
// import DeveloperPage from "./pages/candidatepage";
import ProfilePage from "./pages/ProfilePage";
import Posted from "./pages/posted";
import JobPage from "./pages/Jobpage";
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