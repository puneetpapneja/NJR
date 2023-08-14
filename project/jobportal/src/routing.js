import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"

export const routing = [
    {
        path: "/",
        element:  <Login />
    },
    {
        path: "/login",
        element:  < LoginPage />
    },
    {
        path: "/register",
        element:  <RegisterPage />
    },
    
]

export const routes = [
    {
       
        children: routing
    }
]