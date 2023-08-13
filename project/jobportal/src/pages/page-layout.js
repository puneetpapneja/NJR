import Header from "./Header"
import Footer from "./Footer";
import React from 'react';
import Boxcomponent from "../components/boxcomponent";

const PageLayout = ()=>{
    return (
        <React.Fragment>
            <Header />
            <Boxcomponent />
            <Footer />
        </React.Fragment>
    )
}

export default PageLayout;