import About from "./components/About";
import PageLayout from "./components/PageLayout";
import Login from "./components/Login";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
export const routing = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
];

export const routes = [
  {
    path: "/",
    element: <PageLayout />,
    children: routing,
  },
];
