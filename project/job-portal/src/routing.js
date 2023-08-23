// import About from "./pages/";
import PageLayout from "./components/PageLayout";
import SignUp from "./components/SignUp";
import Dashboard from "./pages/dashboard";
import PostJob from "./pages/post";
import Apply from "./pages/apply";
import Login from "./components/Login";
// import DeveloperPage from "./pages/candidatepage";
import ProfilePage from "./pages/profilepage";
import Posted from "./pages/posted";
import JobPage from "./pages/jobpage";
// import CandidatePage from "./pages/candidatepage";
export const routing = [

  {
    path: "/dashboard",
    element: <Dashboard />,
  },

{
  path:"/",
  element:<Login />
},

  {
    path: "/signup",
    element: <SignUp />,
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
    path:"/profile",
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
