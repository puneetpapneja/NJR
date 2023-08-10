import Loginpage from "./pages/Loginpage";
import { Registerpage } from "./pages/Registerpage";

const routes = [
    {
        path: "/",
        element: <Loginpage/>
    },
    {
        path: "/Registerpage",
        element:<Registerpage/>
    }
];

export default routes;