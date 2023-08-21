import LoginPage from './component/Login';
import Dashboard from './component/Dashboard';
import Register from './component/Register';
import Postedjob  from "./component/Postedjob";
import Postajob from "./component/Postajob";
import Appliedjob from "./component/Appliedjob";
import Payload from "./component/Payload";
import Jobs from "./component/Jobs";
import Profile from "./component/Profile";

    export const routing = [
      {
          path: "/Dashboard",
          element:<Dashboard/>
      },
      {
          path: "/job",
          element:<Jobs/>
      },
      {
          path: "/",
          element: <LoginPage/>
      },
      {
        path: "/postajob",
        element:  <Postajob />
    },
      {
        path: "/profile",
        element:  <Profile />
    },
      {
        path: "/register",
        element:  <Register />
    },
    {
        path: "/appliedjob",
        element:  <Appliedjob />
    },
    {
        path: "/postedjob",
        element:  <Postedjob/>
    }
    ]

export const routes =[
    {
 path:"/",
 element:<Payload/>,
 children:routing
    }
 ]   