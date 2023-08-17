import { Outlet } from "react-router-dom"
import Header from "./Header"
import React from 'react';
const Pagelayout=()=>{
    return (
        
            <React.Fragment>
            <Header />
            <Outlet />
        </React.Fragment>
    )
    
}
export default Pagelayout;