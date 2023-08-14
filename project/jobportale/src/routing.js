import { Home } from "./pages/Dashbord";
import Loginpage from "./pages/Loginpage";
import { Registerpage } from "./pages/Registerpage";

const routes = [
    {
        path: "/Login",
        element: <Loginpage/>
    },
    {
        path: "/Registerpage",
        element:<Registerpage/>
    },
    {
        path:"/",
        element:<Home/>
    }
];

export default routes;