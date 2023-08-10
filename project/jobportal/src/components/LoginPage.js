import React from 'react';
import LoginForm from './LoginForm';
import '../components/LoginForm.css';

const LoginPage = () => {
  const handleLogin = (email, password) => {
    
    console.log('Login credentials:', email, password);
  };

  return (
    <div className="login-page">
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;