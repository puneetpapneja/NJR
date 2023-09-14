import Content from "./components/Content";
import Pagelayout from "./pages/Pagelayout";
import Postpage from "./pages/Postjobpage";
import Registerpage from "./pages/Registerpage";
import LoginPage from "./pages/loginPage";
import Jobspage from "./pages/Jobspage";
import PostedjobPages from "./pages/PostedjobPages";
import AppliedjobPage from "./pages/AppliedjobPage";
import Profile from "./components/profile";
export const COMMON_ROUTES=[
    {
        path: "/",
        element :<Content/>
    },
    {
        path: "/login",
        element :<LoginPage/>
    },
    {
        path: "/register",
        element :<Registerpage/>
    },
    {
        path:"/profile",
        element: <Profile/>
    }
]
export const SEEKER_ROUTES = [
    ...COMMON_ROUTES,
    {
        path: "/jobs",
        element:<Jobspage/>
    },
    {
        path: "/appliedjob",
        element :<AppliedjobPage/>
    }
]

export const RECRUITER_ROUTES=[
    ...COMMON_ROUTES,
    {
        path: "/post_a_job",
        element:<Postpage/>
    },
    {
        path: "/postedjob",
        element :<PostedjobPages/>
    }
]
export const getRoutes =(hasRecruiter)=> [
    {
        path: "/",
        element:  <Pagelayout/>,
        children: hasRecruiter ? RECRUITER_ROUTES : SEEKER_ROUTES 
    }
]