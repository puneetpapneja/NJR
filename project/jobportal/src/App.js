import RegisterPage from './pages/registerpage.js';
import LoginPage from './pages/loginpage.js';
import {BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
function App() {
  return (
    // <LoginPage/>
    <Router>
      <Routes>
      <Route exact path="/" element={<LoginPage />}></Route>
        <Route exact path="/login" element={<LoginPage />}></Route>
        <Route exact path="/register" element={<RegisterPage />}></Route>
      </Routes>
      </Router>
  );
}
export default App;
