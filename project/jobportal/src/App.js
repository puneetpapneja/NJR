import logo from './logo.svg';
import './App.css';
// import Button from 'react-bootstrap/esm/Button';
import Button from 'react-bootstrap/Button';
import { LoginPage } from './pages/login';

function App() {
  return (
    <div className="App">
     {/* <Button variant="secondary">Secondary</Button>{' '} */}
     <LoginPage/>
    </div>
  );
}

export default App;
