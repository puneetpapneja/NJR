import Content from "./components/Content";
import Pagelayout from "./pages/Pagelayout";
import Postjobpage from "./pages/Postjobpage";
import Registerpage from "./pages/Registerpage";
import Loginpage from "./pages/Loginpage";
import JobPage from "./pages/jobpage";
import Apply from "./pages/apply";
import Developerpage from "./pages/developerpage";
import ProfilePage from "./pages/profilepage";
import Posted from "./pages/posted";

export const routing = [
    { path: "/", element: <Content /> },
    { path: "/Login", element: <Loginpage /> },
    { path: "/Register", element: <Registerpage /> },
    { path: "/Postjob", element: <Postjobpage /> },
    { path: "/appliedjob", element: <Apply /> },
    { path: "/jobs", element: <JobPage />},
    { path: "/postedjob" , element: <Posted/>},
    { path: "/postedjob" , element: <Posted/>},
    { path: "/Developers" , element: <Developerpage/>},
    { path:"/Profile", element: <ProfilePage />},

  ];
export const routes=[
    
    {
    path: "/",
    element: <Pagelayout/>,
    children: routing
},

];