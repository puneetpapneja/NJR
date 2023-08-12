import PageLayout from "./components/PageLayout";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import PostJob from "./components/PostJob";
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
    path: "/post-a-job",
    element: <PostJob />,
  },
];

export const routes = [
  {
    path: "/",
    element: <PageLayout />,
    children: routing,
  },
];
