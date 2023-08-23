import React, { useState, useEffect } from 'react';
import { Container, Card, Button, Form } from 'react-bootstrap';
import NavbarComponent from "./navbar";
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';

const Jobs = () => {
    
    const[users, setUsers]= useState([])
    useEffect(()=>{
        axios.get("http://localhost:8080/getusers")
        .then(users=>setUsers(users.data))
        .catch(err => console.log(err))
    },[])
    
    return (
        <>
        <NavbarComponent></NavbarComponent>

        <table className='table'>
            <tr>
                <th>JOBTITLE</th>
                <th>JOBDESC</th>
                <th>JOBSALERY</th>
            </tr>
            <tbody>
                {
                    users.map(user=>{
                        return <tr>
                            
                            <td>{user.jobtitle}</td>
                            <td>{user.jobdesc}</td>
                            <td>{user.jobsal}</td>
                        
                        </tr>
                    })
                }
            </tbody>
        </table>
        


         


        </>
    );
};

export default Jobs;