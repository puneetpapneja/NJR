import { Home } from "./components/Home";
import { Registration } from "./components/Registration";
import Dashboard from "./components/dashboard";
import { Login } from "./components/login";
import PageLayout from "./components/page_layout";


export const rounting = [
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/Registration',
        element: <Registration/>
    },
    {
        path: '/Dashboard',
        element: <Dashboard/>
    },
]

export const route = [
    {
        path: "/",
        element: <PageLayout/>,
        children: rounting,
    }
]