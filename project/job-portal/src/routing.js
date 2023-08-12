import About from "./components/About";
import PageLayout from "./components/PageLayout";
import Login from "./components/Login";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Dashboard from "./components/dashboard";
export const routing = [
  {
    path: "/",
    element: <Login />,
  },
  
  {
    path: "/signup",
    element: <SignUp />,
  },

  {
    path: "/dashboard",
    element: <Dashboard />,
  },
];

export const routes = [
  {
    path: "/",
    element: <PageLayout />,
    children: routing,
  },
];
