
import Content from "./components/Content";
import Pagelayout from "./pages/Pagelayout";
import Registerpage from "./pages/Registerpage";
import LoginPage from "./pages/loginPage";

export const routing = [
    {
        path: "/",
        element :<Content/>
    },
    
]
export const routes=[{
    path:"/",
    element:<Pagelayout/>,
    children:routing
},
{
    path: "/register",
    element :<Registerpage/>
},
{
    path: "/login",
    element :<LoginPage/>
}]