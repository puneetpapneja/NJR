import { Registration } from "./components/Registration";
import { Login } from "./components/login";
import Dashboard from "./components/dashboard";
import PageLayout from "./components/pagelayout";

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
        path: "/Dashboard",
        element: <Dashboard/>
    }
]

export const routes = [
    {
        path: "/",
        element: <PageLayout />,
        children: routing
    }
]