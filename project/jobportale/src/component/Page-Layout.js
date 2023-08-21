import { Container, Row } from "react-bootstrap"
import { Dashboard } from "../component/dashbord"
import { Footer } from "../component/footer"
import { Header } from "../component/header"
import { Outlet } from "react-router-dom"
import React from "react"

const Home = () => {
    return (
        <>
           <React.Fragment>
            <Header/>
            <Outlet/>
            <Footer/>
           </React.Fragment>
        </>
    )
}

export default Home