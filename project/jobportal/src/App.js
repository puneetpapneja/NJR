import logo from './logo.svg';
import { BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import './App.css';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/loginPage';


function App() {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<LoginPage />}></Route>
        <Route exact path="/login" element={<LoginPage />}></Route>
        <Route exact path="/register" element={<RegisterPage />}></Route>
        <Route exact path="/dashboard" element={< dashboard/>}></Route>
      </Routes>
    </Router>
  );
}
export default App;