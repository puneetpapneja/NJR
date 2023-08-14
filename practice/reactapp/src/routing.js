import { About } from "./component/about"
import { Contact } from "./component/contact"
import { Home } from "./component/home"
import { Todolist } from "./component/todoList"
import {Header} from "./page/Header"
const routing=[
    {
        path: "/",
        element: <Home/>
    },
    {
        path:"/about",
        element:<About/>
    },
    {
        path:"/contact",
        element:<Contact/>
    },
    {
        path:"/todo",
        element:<Todolist/>
    }
]

export const routes=[
    {
        path: "/",
        element: <Header/>,
        children: routing
    }
]
