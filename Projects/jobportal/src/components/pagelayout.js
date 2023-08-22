import React from "react";
import { Container } from "react-bootstrap";

import Header from "./Header";
import { Outlet } from "react-router";
import Footer from "./Footer";

import { getSession } from "../utils";
export default function Pagelayout(){
    if(!getSession())
    {
        return(
            <Outlet/>
        );
    }
    else
    {
             return(
                <Container fluid className="px-0 mx-0">
                <Header />
                <Outlet />
                <Footer />
            </Container> 
        );
    }
}
// export default function Pagelayout(){
//     if(!getSession())
//     {
//         if(getKey()=="login")
//         return(<Login />);
//         else
//         return(<Register />);
//     }
//     else
//     {
//              return(
//                 <Container fluid className="px-0 mx-0">
//                 <Header />
//                 <Outlet />
//                 <Footer />
//             </Container> 
//         );
//     }
// }