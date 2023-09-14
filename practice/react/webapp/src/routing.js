import React from 'react';
import PageLayout from './component/page-layout';
import Item from './component/Item';
import Cars from './component/Cars';
import ToDoList from './component/todolist';
export const routing = [
    {
        path: "/",
        element:  <Item list={[{item: "Bottle", brand:"Cello", price:115}]} heading="Ceramic Products" />
    },
    {
        path: "/Cars",
        element:  <Cars list={[{name:"lamborgini",
        img:"https://images.pexels.com/photos/6462662/pexels-photo-6462662.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        features:[
          "automatic climate control" ,  
              "premium leather materials",
              "power seating",
            "air filtration"
          ],
        specifications:{
          EngineDisplacement:	6498 ,
          No_of_cylinder:	12,
          Max_Power 	:"759.01bhp@8500rpm",
          Max_Torque :	"720Nm@6750rpm"}}]} name="lamborgini"/>
    },
    {
        path: "/todolist",
        element:  <ToDoList />
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

