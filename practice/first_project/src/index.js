import React from 'react';
import ReactDOM  from 'react-dom/client';

const fname= "Arvind Suthar";
const currtime=new Date().toLocaleTimeString();
const Currdate =new Date().toLocaleDateString();

const x=   ReactDOM.createRoot(document.getElementById("root"));
x.render(
    <React.Fragment>
        <h1> My name is {fname}</h1>
        <p>Current Time is {currtime}</p>
        <p>Current Date is {Currdate}</p>

    </React.Fragment>
 
);