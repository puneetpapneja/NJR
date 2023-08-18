import { Outlet } from "react-router-dom"
import Header from "./Header"
import React, {useEffect} from 'react';
import { useDispatch } from "react-redux";
import { getAllUsers } from "../store/reducers/userSlice";

const PageLayout = ()=>{
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(getAllUsers());
    },[])
    return (
        <React.Fragment>
            <Header />
            <Outlet />
        </React.Fragment>
    )
}

export default PageLayout;