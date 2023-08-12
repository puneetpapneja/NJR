import React from 'react'
import { Link } from 'react-router-dom'
import './Login_Signup.css'

function Signup() {
  return (
    <div className='signup template d-flex justify-content-center align-items-center vh-100 grav_col'>
      <div className='form_container p-5 rounded bg-white'>
        <form>
          <h2 className='text-center txt_col'>Sign Up</h2>
          <div className='mb2'>
            <label htmlFor='fname'>First Name</label>
            <input type='text' placeholder='Enter First Name' className='form-control'/>
          </div>
          <div className='mb2'>
            <label htmlFor='lname'>Last Name</label>
            <input type='text' placeholder='Enter Last Name' className='form-control'/>
          </div>
          <div className='mb2'>
            <label htmlFor='email'>Email</label>
            <input type='email' placeholder='Enter Email' className='form-control'/>
          </div>
          <div className='mb2'>
            <label htmlFor='password'>Password</label>
            <input type='password' placeholder='Enter Password' className='form-control'/>
          </div>
          <div className='mb2'>
            <label htmlFor='password'>Confirm Password</label>
            <input type='rpassword' placeholder='Re-enter Password' className='form-control'/>
          </div>
          <br/>
          <div className='text-center'>
            <button className='grav_col txt2_col'>Sign Up</button>
          </div>
          
          <p className='text-right mt-2'>
            Already Registered?<Link to="/" className='ms-2 txt_col'>Sign In</Link>
          </p>
        </form>
      </div>  
    </div>
  )
}

export default Signup
