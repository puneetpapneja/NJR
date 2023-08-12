import LoginPage from "./Page/LoginPage"
import Content from "./components/Content"
import Registerpage from "./Page/RegisterPage"
import Pagelayout from "../../../classroom/react/src/components/page-layout"
export const routing = [
    {
        path: "/Login",
        element:  <LoginPage />
    },
    {
        path: "/Content",
        element :<Content/>
    },
    {
        path: "/register",
        element :<Registerpage/>
    },
    
]

export const routes = [
    {
        path: "/",
        element: <Pagelayout />,
        children: routing
    }
]