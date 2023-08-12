import { Outlet } from "react-router-dom"
import React from 'react';
import Memocomponent from "./Memocomponent";
import Memopractice from "./Memopractice";

const PageLayout = ()=>{
    return (
        <React.Fragment>
            <Memocomponent/>
        </React.Fragment>
    )
}

export default PageLayout;