import React from 'react';
import Home from './components/Home';
import Aboutus from './components/About';
import Contactus from './components/Contact';
import Header from './components/Header';
import PageLayout from './components/page-layout';
import ToDoList from './components/ToDoList';
import Memo from './components/Memo';
import item from './components/Item';
import Callback from './components/Callback';
import Ref from './components/Ref';
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

    },
    
    {
        path: "/usememo",
        element:  <Memo />
    },
    {
        path: "/callback",
        element:  <Callback />
    },
    {
        path: "/Item",
        element:  <Item />
    },

    {
        path: "/ToDoList",
        element: < ToDoList/>
    }

]

export const routes = [
    {
        path: "/",
        element: <PageLayout />,
        children: routing
    }
]

