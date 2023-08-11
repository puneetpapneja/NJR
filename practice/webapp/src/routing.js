import Home from './components/Home'
import AboutUs from './components/About'
import Contact from './components/Contact'
import PageLayout from './components/PageLayout'

export const routing=[
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/about",
        element: <AboutUs/>
    },
    {
        path:"/contact",
        element:<Contact/>
    }
]

export const routes=[
    {
        path:"/",
        element:<PageLayout/>,
        children: routing
    }
]
