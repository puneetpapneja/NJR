import PageLayout from "./components/PageLayout";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import PostJob from "./components/PostJob";
import Jobs from "./components/Jobs";
import AppliedJobs from "./components/AppliesJobs";
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
  {
    path: "/jobs",
    element: <Jobs />,
  },
  {
    path:"/applied-jobs",
    element:<AppliedJobs />,
  },
  // {
  //   path:"/posted-jobs",
  //   element: <PostedJobs />,

  // },
];

export const routes = [
  {
    path: "/",
    element: <PageLayout />,
    children: routing,
  },
];
