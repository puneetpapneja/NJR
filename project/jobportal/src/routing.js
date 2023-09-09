// import About from "./pages/";
import PageLayout from "./components/PageLayout";
import LoginPage from "./pages/loginpage";
import SignUp from "./components/SignUp";
import Dashboard from "./pages/dashboard";
import PostJob from "./pages/post";
import Apply from "./pages/apply";
// import Login from "./components/Login";
// import DeveloperPage from "./pages/candidatepage";
import ProfilePage from "./pages/profilepage";
import Posted from "./pages/posted";
import Jobpage from "./pages/Jobpage";
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
    element: <Jobpage />,
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