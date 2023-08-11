import Registerpage from './pages/Registerpage';
import './App.css';
import LoginPage from './pages/loginPage';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container>
       <LoginPage/>
       <Registerpage/>
    </Container>
  );
}

export default App;
