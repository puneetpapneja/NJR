import Menubar from "./Menubar";
import Footer from "./Footer"
import { Outlet } from "react-router-dom";
function Payload(){
return (
    < >
        <Menubar/>
         <Outlet/>
        <Footer/>
    </>
);
}

export default Payload;