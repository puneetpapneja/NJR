import PageLayout from "./components/PageLayout";
// import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import PostJob from "./components/PostJob";
import AppliedJobs from "./components/AppliedJobs";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
export const routing = [
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/post-a-job",
    element: <PostJob />,
  },
  {
    path: "/applied-job",
    element: <AppliedJobs />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
];

export const routes = [
  {
    path: "/",
    element: <PageLayout />,
    children: routing,
  },
];
