import Content from "./components/Content";
import Pagelayout from "./pages/Pagelayout";
import Registerpage from "./pages/Registerpage";
import Loginpage from "./pages/Loginpage";
import PostJob from "./pages/post";
import Apply from "./pages/apply";

export const routing = [
    {
        path: "/",
        element :<Content/>
    },
    
]
export const routes=[{
    path:"/",
    element:<Pagelayout/>,
    children:routing
},
{
    path: "/register",
    element :<Registerpage/>
},
{
    path: "/login",
    element :<Loginpage/>
},
{
    path: "/postjob",
    element: <PostJob />,
  },

  {
    path: "/appliedjob",
    element: <Apply />,
  },

  
]