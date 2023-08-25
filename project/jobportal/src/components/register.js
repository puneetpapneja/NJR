import { Container, Form, Button, Alert} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import {Link ,useNavigate} from 'react-router-dom';
import React ,{ useState } from 'react';
 import { useDispatch,useSelector } from 'react-redux';
import { registerdata } from '../store/reducers/userSlice';


const Register = ()=>{
  const regdata = useSelector(state => state?.users?.error);
  const dispatch = useDispatch();
  // const [email,setEmail]= useState("");
  const [emailError,setEmailError] = useState("");
  const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [password,setPassword] =useState("");
  const [passwordError,setPasswordError]=useState("");
  const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const [role,setRole] = useState(""); 
  const [roleError,setRoleError]=useState("");
  const [companyName,setcompanyName] =useState("");
  const navigate = useNavigate();
  const [compError,setCompError]=useState("");

//   const HandleClick=(event)=>{
//     // if(!email)
//     // {
//     //     event.preventDefault();
//     //     setEmailError("*invalid email format");
//     //     return;
//     // }
//     // if(!password){
//     //     event.preventDefault();
//     //     setPasswordError("*Password must have :-  A capital letter. A small case letter. A number . And minimum length is 8!");
//     //     return;
//     // }
//     // if(!role)
//     // {
//     //     event.preventDefault();
//     //     setRoleError("*select a role");
//     //     return;
//     // }
//     // if(role === "Job Recruiter" && !companyName)
//     // {
//     //     event.preventDefault();
//     //     setCompError("*required");
//     //     return;
//     // }
//     const data = {emailId:email,password:password,type:role,companyName:companyName};
//     console.log(data);
//     dispatch(registerdata(data));
    
//     if(regdata!==""){
//         navigate("/");
//     }
// }


const [email,setEmail]=useState('')
function handelsubmit(e){
  e.preventDefault()
  const data = {emailId:email,password:password,type:role,companyName:companyName};
  console.log(data);
  dispatch(registerdata(data));
}

  
  

return (
<Container className="d-flex justify-content-sm-center">
<Form onSubmit={(e)=>{handelsubmit(e)}} className="w-25 p-1" >
<div className="shadow-sm p-3 mb-5 bg-white rounded">
  <h1 className="d-flex justify-content-center">Register</h1>
  <label>Email
  <input type='text' onChange={(e)=>{setEmail(e.target.value)}}></input></label>

  <label>Password
  <input type='text' onChange={(e)=>{setPassword(e.target.value)}}></input></label>

  <div>
  <div className="form-check">
    
    <label className="form-check-label" htmlFor="flexRadioDefault1">
      Job Seeker
      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onChange={(e)=>{setRole(e.target.value)}} />
    </label>
  </div>
  <div className="form-check">
    
    <label className="form-check-label" htmlFor="flexRadioDefault2">
      Job Recruiter
      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onChange={(e)=>{setRole(e.target.value)}} />
    </label>
  </div>
</div>


  <label>Company name
  <input type='text' onChange={(e)=>{setcompanyName(e.target.value)}}></input></label>
  <Button type='Submit'>Register</Button>

  {/* <Form.Group className="mb-3" >
    <Form.Label>Email address</Form.Label>
    <Form.Control type="text" id="email" placeholder="Enter email" onchange={(e)=>{setEmail(e.target.value)}} />
   {emailError && <Alert variant='danger'>{emailError}</Alert>}
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label>Password</Form.Label>
    <Form.Control type="text" id="password" placeholder="Password" onchange={(e)=>{setPassword(e.target.value);}} />
  {passwordError && <Alert variant='danger'>{passwordError}</Alert>}
  </Form.Group>

  <Form.Group>
    {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="Job Seekers"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
            onchange={(e)=>{setRole(e.target.value)}}
            
          />
          <Form.Check
            inline
            label="Job Recruiters"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
            onchange={(e)=>{setRole(e.target.value)}}
            
          />
           {roleError && <Alert variant="danger">{roleError}</Alert>}
        </div>
      ))}
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label>Company Name</Form.Label>
    <Form.Control type="text" id="companyname" placeholder="Company Name" onChange={(e)=>{setcompany(e.target.value);setCompError("");}} />
  </Form.Group>

  <Form.Group className="mb-3">
     <Form.Text className="text-muted">
        <Card.Link as={Link} to="/">Have a account?Login Now</Card.Link>
     </Form.Text>
     {compError &&  <Alert variant="danger">{compError}</Alert>}
  </Form.Group>

  <div class=" mx-auto">
  <Button variant="dark" type="submit" class="btn btn-dark">
    Register
  </Button>
  </div> */}
  </div>
</Form>
</Container>
)
}


export default Register;