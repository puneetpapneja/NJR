import Content from "./components/Content";
import DashBoardPage from "./Page/DashBoardPage";
import Postjobpage from "./Page/Postjobpage";
import RegisterPage from "./Page/RegisterPage";
import LoginPage from "./Page/LoginPage";
import Jobspage from "./Page/Jobspage";
export const routing = [
    { path: "/", element: <Content /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/Register", element: <RegisterPage /> },
    { path: "/Postjob", element: <Postjobpage /> },
    { path: "/AppliedJob", element: <Jobspage /> },
  ];
export const routes=[
    
    {
    path: "/",
    element: <DashBoardPage/>,
    children: routing
},

];