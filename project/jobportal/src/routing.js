import LoginPage from './component/Login';
import Dashboard from './component/Dashboard';
import Register from './component/Register';
import Postedjob from "./component/Postedjob";
import Postajob from "./component/Postajob";
import Appliedjob from "./component/Appliedjob";
import Payload from "./component/Payload";
import Jobs from "./component/Jobs";
import Profile from "./component/Profile";

const COMMON_ROUTES = [
  {
    path: "/",
    element: <LoginPage />
  },
  {
    path: "/postajob",                // ye wala hatana hai
    element: <Postajob />
  },
  {
    path: "/postedjob",                    // ye wala hatana hai
    element: <Postedjob />
  },

  {
    path: "/Dashboard",
    element: <Dashboard />
  },
  {
    path: "/profile",
    element: <Profile />
  },
  {
    path: "/register",
    element: <Register />
  }
];

export const SEEKER_ROUTES = [
  ...COMMON_ROUTES,

  {
    path: "/job",
    element: <Jobs />
  },

  {
    path: "/appliedjob",
    element: <Appliedjob />
  }

];
export const RECRUITER_ROUTES = [
  ...COMMON_ROUTES,
  {
    path: "/postajob",
    element: <Postajob />
  },
  {
    path: "/postedjob",
    element: <Postedjob />
  }
];

export const routes = (hasRecruiter) => [
  {
    path: "/",
    element: <Payload />,
    children: hasRecruiter ? RECRUITER_ROUTES : SEEKER_ROUTES
  }
];