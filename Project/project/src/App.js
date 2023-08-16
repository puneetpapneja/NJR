import logo from './logo.svg';
import Loginpg from './Login';
import Register from './register';
import Dashboard from './dashboard';
import NavbarComponent from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AppRoutes from './routes';
function App() {
  return (
    <Router>
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">Job Portal Project</Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/postjob">Post a Job</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/appliedjobs">Applied Jobs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/postedjobs">Posted Jobs</Link>
              </li>
            </ul>
            <form className="form-inline">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            </form>
            <div className="ml-3">
              <img src="path_to_your_profile_pic.jpg" alt="Profile" style={{ borderRadius: '50%', width: '40px', height: '40px' }}/>
            </div>
          </div>
        </nav>
        <AppRoutes/ >
        
      </>
    </Router>
  );
}

export default App;