import LoginPage from './component/Login';
import Dashboard from './component/Dashboard';
import Register from './component/Register';
import Postedjob  from "./component/Postedjob";
import Postajob from "./component/Postajob";
import Appliedjob from "./component/Appliedjob";
import Payload from "./component/Payload";

    export const routing = [
      {
          path: "/Dashboard",
          element:<Dashboard/>
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