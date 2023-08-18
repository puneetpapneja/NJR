import { Outlet, useNavigate } from "react-router-dom"
import Header from "./header"
import Footer from "./footer";
import React, { useEffect } from 'react';
import { getSession } from "../utils/util";


const PageLayout = ()=>{
    const navigate = useNavigate();
    useEffect(()=>{
        if(!getSession()){
            navigate("/");
        }
    },[]);
    return (
        <React.Fragment>
           {getSession() ? <Header /> : null } 
            <Outlet />
            <Footer />
        </React.Fragment>
    )
}

export default PageLayout;