// import About from "./pages/";
import PageLayout from "./components/PageLayout";
import SignUp from "./components/SignUp";
import Dashboard from "./pages/dashboard";
import PostJob from "./pages/post";
import Apply from "./pages/apply";
export const routing = [
  {
    path: "/signup",
    element: <SignUp />,
  },

  {
    path: "/",
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
];

export const routes = [
  {
    path: "/",
    element: <PageLayout />,
    children: routing,
  },
];
