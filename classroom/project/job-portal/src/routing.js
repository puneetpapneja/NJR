import PageLayout from "./components/PageLayout";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
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
