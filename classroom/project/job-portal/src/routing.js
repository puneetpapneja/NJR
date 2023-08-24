import PageLayout from "./components/PageLayout";
import Dashboard from "./components/Dashboard";
import PostJob from "./components/PostJob";
import AppliedJobs from "./components/AppliedJobs";
import Jobs from "./components/Jobs";
import Postedjobs from "./components/Postedjobs";
import SearchResults from "./components/SearchResults";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
export const routing = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <SignUp />,
  },
  {
    path: "/dashboard",
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
    path: "/job",
    element: <Jobs />,
  },
  {
    path: "/posted-job",
    element: <Postedjobs />,
  },
  {
    path: "/search-result",
    element: <SearchResults />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
];

export const routes = [
  {
    path: "/",
    element: <PageLayout />,
    children: routing,
  },
];
