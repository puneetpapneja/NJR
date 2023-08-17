import React from 'react';
import {Outlet} from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/footer';
import Dashboard from './Dashboard';

const PageLayout =()=>{
    return(
           <Container fluid className="px-0 mx-0">
                <Navigationbar />
                <Outlet />
                <Footer />
            </Container> 
    );
}

export default PageLayout;