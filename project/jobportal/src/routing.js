import Content from "./components/Content";
import DashBoardPage from "./Page/DashBoardPage";
import Postjobpage from "./Page/Postjobpage";
import RegisterPage from "./Page/RegisterPage";
import LoginPage from "./Page/LoginPage";
import Jobspage from "./Page/Jobspage";
export const routing = [
    {
        path: "/",
        element :<Content/>
    },
    {
        path: "/Postjobpage",
        element:<Postjobpage/>
    },
    {
        path: "/jobspage",
        element:<Jobspage/>
    },
    {
        path: "/LoginPage",
        element :<LoginPage/>
    },
    {
    path: "/register",
    element :<RegisterPage/>
},
]
export const routes=[
    
    {
    path:"/",
    element:<DashBoardPage/>,
    children:routing
},

]