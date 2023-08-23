import { Job } from "./component/Jobs";
import { Post } from "./component/Postjob";
import Register from "./component/Register"
import Login from "./component/Login"
import { Dashboard } from "./component/dashbord";
import Home from "./component/Page-Layout"
<<<<<<< HEAD
=======
import { Posted } from "./component/Postedjob";
import { Applied } from "./component/Appliedjob";
import { Profile } from "./component/Profile";
>>>>>>> 65e9158336d5a042ca5c7ae70651f25418c85e05

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
<<<<<<< HEAD
=======
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
>>>>>>> 65e9158336d5a042ca5c7ae70651f25418c85e05
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