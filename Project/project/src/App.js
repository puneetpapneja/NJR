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
        
        <AppRoutes/ >
        
      </>
    </Router>
  );
}

export default App;