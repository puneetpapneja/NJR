import Header from "./Header";
import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router";
import Footer from "./Footer";
import Login from "./login";
import Register from "./register";


const PageLayout = () => {
    return(

        <React.Fragment>
        <Header/>
        <Outlet/>
        <Footer/>
    </React.Fragment>
    )
}

export default PageLayout



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