import Register from '../components/Register.js';
import { useState } from 'react';
export default function RegisterPage(){
  const [currentPage, setCurrentPage] = useState('login');

  const handlePageChange = () => {
    setCurrentPage(currentPage === 'login' ? 'register' : 'login');
  };
    const handleRegister = (registerForm, setError) => {
    // Handle register logic here
    if (registerForm.userType === 'jobRecruiter' && registerForm.companyName === '') {
      setError('Please provide a company name for job recruiters');
    } else {
      console.log('Registration successful');
    }
  };
    return(<Register handlePageChange={handlePageChange} handleRegister={handleRegister} />);
}