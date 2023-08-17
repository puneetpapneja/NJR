/*import React from "react";*/
import Form from "react-bootstrap" ;
function register(){
    return(
        <Form>
        <label for="email address">Email Address</label>
          <input type="text" value="email address"/>
        <label for="password">Password</label>
        <input type="text" value="password"/>
        <label>Job seeker
            <input type="radio"></input>
        </label>
        <label>Job recuriter
            <input type="radio"></input>
        </label>
        </Form>
    )
}