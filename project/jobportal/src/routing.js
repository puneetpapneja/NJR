import Content from "./components/Content";
import Pagelayout from "./pages/Pagelayout";
import Postjobpage from "./pages/Postjobpage";
import Registerpage from "./pages/Registerpage";
import Loginpage from "./pages/Loginpage";
import Jobspage from "./pages/Jobspage";
export const routing = [
    { path: "/", element: <Content /> },
    { path: "/Login", element: <Loginpage /> },
    { path: "/Register", element: <Registerpage /> },
    { path: "/Postjob", element: <Postjobpage /> },
    { path: "/AppliedJob", element: <Jobspage /> },
  ];
export const routes=[
    
    {
    path: "/",
    element: <Pagelayout/>,
    children: routing
},

];