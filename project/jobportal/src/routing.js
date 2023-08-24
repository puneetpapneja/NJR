import { Registration } from "./components/Registration";
import { Login } from "./components/login";
import Dashboard from "./components/dashboard";
import PageLayout from "./components/pagelayout";
// import Home from "./components/home";
import PostJob from "./components/PostJob"
import Appliedjobs from "./components/AppliedJob";
import Jobs from "./components/jobs";
import Postedjobspage from "./pages/postedjobs";

export const routing = [
    {
        path: "/",
        element: <Login/>
    },
    {
        path: "/Registration",
        element: <Registration/>
    },
    {
        path: "/dashboard",
        element: <Dashboard/>
    },
    {
        path: "/postjob",
        element: <PostJob/>
    },
    {
        path: "/appliedjobs",
        element: <Appliedjobs/>
    },
    {
        path: "/jobs",
        element: <Jobs/>
    },
    {
        path: "/postedjobs",
        element: <Postedjobspage/>
    }

]


export const routes = [
    {
        path: "/",
        element: <PageLayout />,
        children: routing
    }
]