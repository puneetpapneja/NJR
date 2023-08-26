import { Outlet, useNavigate } from "react-router-dom"
import React, { useEffect } from 'react';
import NavBarComponent from "./navbar";
import Footercomponent from "./footer.js";
import { useSelector } from "react-redux";
import Notification from "./notification";

const PageLayout = ()=>{
    const isValidUser = useSelector(state => state?.user?.isValidUser);
    console.log("isValidUser", isValidUser);
    const navigate = useNavigate();
    useEffect(()=> {
        if(!isValidUser){
            navigate("/");
            
        }
    },[])
    
    return (
        <React.Fragment>
        
            {isValidUser ? <NavBarComponent /> : null}
            <Notification />
            <Outlet />
            <Footercomponent />
        </React.Fragment>
    )
}

export default PageLayout;