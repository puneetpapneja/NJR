import { Registration } from "./components/Registration";
import { Login } from "./components/login";

export const routing = [
    {
        path: "/",
        element: <Login/>
    },
    {
        path: "/Registration",
        element: <Registration/>
    },
]