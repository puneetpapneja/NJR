import Content from "./components/Content";

import Postjobpage from "./Page/Postjobpage";
import RegisterPage from "./Page/RegisterPage";
import LoginPage from "./Page/LoginPage";
import Jobspage from "./Page/Jobspage";
import PostedPage from "./Page/PostedPage";
import AppliedPage from "./Page/AppliedPage";
import Profile from "./components/Profile";
import DashBoardPage from "./Page/DashBoardPage";
export const COMMON_ROUTES=[
    {
        path: "/",
        element :<Content/>
    },
    {
        path: "/Login",
        element :<LoginPage/>
    },
    {
        path: "/Register",
        element :<RegisterPage/>
    },
    {
        path:"/Profile",
        element: <Profile/>
    }
]
export const SEEKER_ROUTES = [
    ...COMMON_ROUTES,
    {
        path: "/AppliedJob",
        element:<Jobspage/>
    },
    {
        path: "/AppliedJobDitails",
        element :<AppliedPage/>
    }
]

export const RECRUITER_ROUTES=[
    ...COMMON_ROUTES,
    {
        path: "/PostJob",
        element:<Postjobpage/>
    },
    {
        path: "/PostedJob",
        element :<PostedPage/>
    }
]
export const getRoutes =(hasRecruiter)=> [
    {
        path: "/",
        element:  <DashBoardPage/>,
        children: hasRecruiter ? RECRUITER_ROUTES : SEEKER_ROUTES 
    }
]