import { Container, Form, Button, Alert} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import {Link ,useNavigate} from 'react-router-dom';
import React ,{ useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { registerdata } from '../store/reducers/userSlice';
import { JobRecruiter,JobSeeker } from '../utils/constants';


const Register = ()=>{
  const regdata = useSelector(state => state?.users?.error);
  const dispatch = useDispatch();
  const [emailError,setEmailError] = useState('');
  const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [password,setPassword] =useState('');
  const [passwordError,setPasswordError]=useState('');
  const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const [role,setRole] = useState(''); 
  const [roleError,setRoleError]=useState('');
  const [companyName,setcompanyName] =useState('');
  const navigate = useNavigate();
  const [compError,setCompError]=useState('');
const [email,setEmail]=useState('')

function handelsubmit(event){
  if(!email || !emailRegExp.test(email))
  {
      event.preventDefault();
      setEmailError("*invalid email format");
      return;
  }
  if(!password || !passwordRegExp.test(password)){
      event.preventDefault();
      setPasswordError("*Password must have :-  A capital letter. A small case letter. A number . And minimum length is 8!");
      return;
  }
  if(!role)
  {
      event.preventDefault();
      setRoleError("*select a role");
      return;
  }
  if(role === "JobRecruiter" && !companyName)
  {
      event.preventDefault();
      setCompError("*required");
      return;
  }
  if(role === "JobSeeker" && companyName)
  {
      event.preventDefault();
      setCompError("*not required");
      return;
  }
event.preventDefault()
  const data = {emailId:email,password:password,type:role,companyName:companyName};
  console.log(data);
  dispatch(registerdata(data));
  if(regdata!==""){
            navigate("/login");
        }
    }

  
  

return (
<Container className="d-flex justify-content-sm-center">
<Form onSubmit={(e)=>{handelsubmit(e)}} className="w-25 p-3" >
<div className="shadow-sm p-3 mb-5 bg-white rounded">
  <div><h1 className="d-flex justify-content-center">Register</h1></div>

<Form.Group className="mb-3" >
  <Form.Label>Email Address</Form.Label>
  <input type='text' onChange={(e)=>{setEmail(e.target.value)}}></input>
  {emailError && <Alert variant='danger'>{emailError}</Alert>}
</Form.Group>

<Form.Group className="mb-3" >
  <Form.Label>Enter Password</Form.Label>
  <input type='text' onChange={(e)=>{setPassword(e.target.value)}}></input>
  {passwordError && <Alert variant='danger'>{passwordError}</Alert>}
</Form.Group>



  

  <Form.Group>
  <div className="form-check">
    <label className="form-check-label" htmlFor="flexRadioDefault1">
      Job Seeker
      <input className="form-check-input" type="radio" name="flexRadioDefault" id="JobSeeker" value={JobSeeker} onChange={(e)=>{setRole(e.target.value)}} />
    </label>
  </div>
  <div className="form-check">
    <label className="form-check-label" htmlFor="flexRadioDefault2">
      Job Recruiter
      <input className="form-check-input" type="radio" name="flexRadioDefault" id="JobRecruiter" value={JobRecruiter} onChange={(e)=>{setRole(e.target.value)}} />
    </label>
  </div>
  {roleError && <Alert variant="danger">{roleError}</Alert>}
</Form.Group>
<Form.Group></Form.Group>

     <Form.Group className="mb-3">
    <Form.Label>Company Name</Form.Label>
    <input type='text' onChange={(e)=>{setcompanyName(e.target.value)}} placeholder='Only for Job Recruiters'></input>
    {compError &&  <Alert variant="danger">{compError}</Alert>}
  </Form.Group>

  <Form.Group className="mb-3">
     <Form.Text className="text-muted">
     <Card.Link as={Link} to="/login">Have a account?Login Now</Card.Link>
     </Form.Text>
  </Form.Group>

  <div class=" mx-auto">
  <Button variant="dark" type="submit" class="btn btn-dark">
    Register
  </Button>
  </div> 
  </div>
</Form>
</Container>
)
}
export default Register;