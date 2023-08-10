import React from 'react';
import Home from './components/Home';
import Aboutus from './components/About';
import Contactus from './components/Contact';
import Header from './components/Header';
import PageLayout from './components/page-layout';
<<<<<<< HEAD
import ToDoList from './components/ToDoList';
=======
import Memo from './components/Memo';
import Item from './components/Item';
>>>>>>> 05ebde8791f651ead5cccd711d676e201d42d6e5
export const routing = [
    {
        path: "/",
        element:  <Home />
    },
    {
        path: "/about",
        element:  <Aboutus />
    },
    {
        path: "/contact",
        element:  <Contactus />
<<<<<<< HEAD
    },{
        path: "/about",
        element:  <Aboutus />
    },{
        path: "/about",
        element:  <Aboutus />
    },{
        path: "/about",
        element:  <Aboutus />
    },{
        path: "/about",
        element:  <Aboutus />
    },{
        path: "/about",
        element:  <Aboutus />
    },{
        path: "/about",
        element:  <Aboutus />
    },{
        path: "/about",
        element:  <Aboutus />
    },{
        path: "/about",
        element:  <Aboutus />
    },{
        path: "/about",
        element:  <Aboutus />
    },
=======
    },
    {
        path: "/usememo",
        element:  <Memo />
    },
    {
        path: "/item",
        element:  <Item list={[{item: "Bottle", brand:"Cello", price:115}]} heading="Ceramic Products" />
    }
>>>>>>> 05ebde8791f651ead5cccd711d676e201d42d6e5
]

export const routes = [
    {
        path: "/",
        element: <PageLayout />,
        children: routing
    }
]

