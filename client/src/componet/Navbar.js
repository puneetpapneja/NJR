import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Logincontext } from '../Logincontext'


export default function Navbar() {
  const{userName,setUsername} = useContext(Logincontext)


  const navigate=useNavigate()



  function handleout(e){
    localStorage.removeItem('username')

    navigate('/')




  }



  return (
    <>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" href="#">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">Features</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">Pricing</Link>
        </li>
        <li>{userName}</li>
        <li onClick={(e)=>{handleout(e)}}><i class="bi bi-box-arrow-right"></i></li>
        
      </ul>
    </div>
  </div>
</nav>

    
    </>
  )
}
