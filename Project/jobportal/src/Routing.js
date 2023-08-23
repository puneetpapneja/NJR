import PageLayout from "./components/PageLayout";
import Dashboard from "./components/Dashboard";
import PostJob from "./components/PostJob";
import AppliedJobs from "./components/AppliedJobs";
import Jobs from "./components/Jobs";
import Postedjobs from "./components/Postedjobs";
import SearchResults from "./components/SearchResults";
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
];

export const routes = [
  {
    path: "/",
    element: <PageLayout />,
    children: routing,
  },
];