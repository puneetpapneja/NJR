import React from 'react';
import Home from './component/home';
import About from './component/about';
import Contact from './component/contact';
import PageLayout from './component/Pagelayout';
import Item from './component/Item';
import Memo from './component/memo';
export const routing = [
    {
        path: "/",
        element:  <Home />
    },
    {
        path: "/about",
        element:  <About />
    },
    {
        path: "/contact",
        element:  <Contact />
    },
    {
        path: "/usememo",
        element:  <Memo />
    },
    {
        path: "/item",
        element:  <Item list={[{item: "Bottle", brand:"Cello", price:115}]} heading="Ceramic Products" />
    }
]

export const routes = [
    {
        path: "/",
        element: <PageLayout />,
        children: routing
    }
]

