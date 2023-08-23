import { Outlet, useNavigate } from "react-router-dom"
import Header from "./Header"
import React, { useEffect } from 'react';
import { getsession } from "../utils/utils";

const PageLayout = ()=>{

    const navigate = useNavigate();

    useEffect(() => {
        if(!getsession()){
            navigate("/")
        }
    },[]);
    return (
        <React.Fragment>
            {getsession() ? <Header/> : null}
            {/* <Header /> */}
            <Outlet/>
            {/* {getsession() ? <Header/> : null} */}
        </React.Fragment>
    )
}

export default PageLayout;