import Content from "./components/Content";
import DashBoardPage from "./Page/DashBoardPage";
import Postjobpage from "./Page/Postjobpage";
import RegisterPage from "./Page/RegisterPage";
import LoginPage from "./Page/LoginPage";
import Jobspage from "./Page/Jobspage";
import AppliedPage from "./Page/AppliedPage";
import PostedPage from "./components/PostedJob";
import DeveloperPage from "./components/Developer";
import ProfilePage from "./components/Profile";

export const routing = [
    { path: "/", element: <Content /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/Register", element: <RegisterPage /> },
    { path: "/Postjob", element: <Postjobpage /> },
    { path: "/AppliedJob", element: <Jobspage /> },
    { path: "/AppliedJobDitails", element: <AppliedPage /> },
    { path: "/PostedJob" , element: <PostedPage/>},
    { path: "/Developer" , element: <DeveloperPage/>},
    { path:"/Profile", element: <ProfilePage />},
   ];
export const routes=[
    
    {
    path: "/",
    element: <DashBoardPage/>,
    children: routing
},

];