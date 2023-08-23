import { Outlet } from "react-router-dom";
import Login from "./Login";
// import { getSession } from "../utils/utils";
import Navigation from "./Navigation";
import Footer from "./footer";

export default function PageLayout() {
    // if(!getSession()){
    //     return <Login/>
    // }
    return<>
        <Navigation/>
        <Outlet/>
        <Footer/>
    </>
}