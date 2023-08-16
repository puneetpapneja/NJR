
import Content from "./components/Content";
import Pagelayout from "./pages/Pagelayout";
import Postpage from "./pages/Postjobpage";
import Registerpage from "./pages/Registerpage";
import LoginPage from "./pages/loginPage";
import Jobspage from "./pages/Jobspage";
export const routing = [
    {
        path: "/dashboard",
        element :<Content/>
    },
    {
        path: "/dashboard/post_a_job",
        element:<Postpage/>
    },
    {
        path: "/dashboard/jobs",
        element:<Jobspage/>
    }
]
export const routes=[
    {
        path: "/",
        element :<LoginPage/>
    },
    {
    path:"/dashboard",
    element:<Pagelayout/>,
    children:routing
},
{
    path: "/register",
    element :<Registerpage/>
},
]