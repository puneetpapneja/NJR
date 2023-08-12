import Login from "./Login"

export const routing = [
    {
        path: "/Login",
        element:  <Login />
    }
]

export const routes = [
    {
        path: "/",
        element: <PageLayout />,
        children: routing
    }
]