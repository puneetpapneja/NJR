import React, { useState, useEffect } from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import NavbarComponent from "./navbar";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { useLocation } from "react-router-dom";
import Footer from './footer';
import { useUser } from './UserContext';


const Profile=()=>{
    const { userEmail } = useUser();
    return(
        <>
            <h1>User Email from Context: ${userEmail}</h1>
        </>
    )
}
export default Profile;