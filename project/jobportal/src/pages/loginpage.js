const handleLogin = (e) => {
    e.preventDefault();
  
    if (username === 'user' && password === 'password') {
      alert('Login successful');
    } else {
      alert('Login failed');
    }
  };