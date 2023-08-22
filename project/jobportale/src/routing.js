import { Job } from "./component/Jobs";
import { Post } from "./component/Postjob";
import Register from "./component/Register"
import Login from "./component/Login"
import { Dashboard } from "./component/dashbord";
import Home from "./component/Page-Layout"
import { Posted } from "./component/Postedjob";
import { Applied } from "./component/Appliedjob";
import { Profile } from "./component/Profile";

const routing = [
    {
        path:"/",
        element:<Dashboard/>
    },
    {
        path:"/Post",
        element:<Post/>
    },
    {
        path:"/Job",
        element:<Job/>
    },
    {
        path:"/Posted",
        element:<Posted/>
    },
    {
        path:"/Applied",
        element:<Applied/>
    },
    {
        path:"/Profile",
        element:<Profile/>
    }
];
 const Routes=[
    {
        path:"/",
        element:<Home/>,
        children: routing
    },
    {
        path: "/Login",
        element: <Login/>
    },
    {
        path: "/Registerpage",
        element:<Register/>
    }
 ]

export default Routes;