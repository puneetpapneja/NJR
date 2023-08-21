// import About from "./pages/";
import PageLayout from "./components/PageLayout";
import SignUp from "./components/SignUp";
import Dashboard from "./pages/dashboard";
import PostJob from "./pages/post";
import Apply from "./pages/apply";
// import Home from "./pages/loginpage"
import Login from "./components/login";
import DeveloperPage from "./pages/developerpage";
import ProfilePage from "./pages/profilepage";
import Posted from "./pages/posted";
export const routing = [

  {
    path: "/",
    element: <Dashboard />,
  },

{
  path:"/login",
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
    path: "/postedjob",
    element: <Posted />,
  },

  {
    path:"/developers",
    element: <DeveloperPage />,
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
