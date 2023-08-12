
import Content from "./components/Content";
import Dashboard from "./pages/Dashboard";
import Registerpage from "./pages/Registerpage";
import LoginPage from "./pages/loginPage";

export const routing = [
    {
        path: "/",
        element :<Content/>
    },
    {
        path: "/register",
        element :<Registerpage/>
    },
    {
        path: "/login",
        element :<LoginPage/>
    }
]
export const routes=[{
    path:"/",
    element:<Dashboard/>,
    children:routing
}]