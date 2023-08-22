import { Registration } from "./components/Registration";
import { Login } from "./components/login";
import Dashboard from "./components/dashboard";
import PageLayout from "./components/pagelayout";
import Home from "./components/home";
import PostJob from "./components/PostedJob"

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
        path: "/home",
        element: <Home/>
    },
    {
        path: "/home/dashboard",
        element: <Dashboard/>
    },
    {
        path: "/postjob",
        element: <PostJob/>
    },

]


export const routes = [
    {
        path: "/",
        element: <PageLayout />,
        children: routing
    }
]