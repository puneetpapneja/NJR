import Content from "./components/Content";
import Pagelayout from "./pages1/Pagelayout";
import Registerpage from "./pages1/Registerpage";
import Loginpage from "./pages1/Loginpage";

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
    element :<Loginpage/>
}]