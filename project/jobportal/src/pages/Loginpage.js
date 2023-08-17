import Login from "../components/Login.js"
import { useState } from "react";
export default function LoginPage(){
     const [currentPage, setCurrentPage] = useState('login');

  const handlePageChange = () => {
    setCurrentPage(currentPage === 'login' ? 'register' : 'login');
  };

  const handleLogin = (email, password, setError) => {
    // Handle login logic here
    if (email === 'user@example.com' && password === 'password') {
      console.log('Login successful');
    } else {
      setError('Invalid email or password');
    }
  };
    return(<Login handlePageChange={handlePageChange} handleLogin={handleLogin} />)
}