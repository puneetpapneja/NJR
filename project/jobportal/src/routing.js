import Content from "./components/Content";
import Pagelayout from "./pages/Pagelayout";
import Postpage from "./pages/Postjobpage";
import Registerpage from "./pages/Registerpage";
import Loginpage from "./pages/Loginpage";
import Jobspage from "./pages/Jobspage";
export const routing = [
    {
        path: "/",
        element :<Content/>
    },
    {
        path: "/post_a_job",
        element:<Postpage/>
    },
    {
        path: "/jobs",
        element:<Jobspage/>
    },
    {
        path: "/login",
        element :<Loginpage/>
    },
    {
    path: "/register",
    element :<Registerpage/>
},
]
export const routes=[
    
    {
    path:"/",
    element:<Pagelayout/>,
    children:routing
},

]