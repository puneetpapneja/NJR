
import Content from "./components/Content";
import Pagelayout from "./pages/Pagelayout";
import Postpage from "./pages/Postjobpage";
import Registerpage from "./pages/Registerpage";
import LoginPage from "./pages/loginPage";
import Jobspage from "./pages/Jobspage";
import PostedjobPages from "./pages/PostedjobPages";
import AppliedjobPage from "./pages/AppliedjobPage";
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
        element :<LoginPage/>
    },
    {
        path: "/register",
        element :<Registerpage/>
    },
    {
        path: "/postedjob",
        element :<PostedjobPages/>
    },
    {
        path: "/appliedjob",
        element :<AppliedjobPage/>
    }
]
export const routes=[
    
    {
    path:"/",
    element:<Pagelayout/>,
    children:routing
}

]