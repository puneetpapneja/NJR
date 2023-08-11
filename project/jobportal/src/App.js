import './App.css';
import Loginpage from './pages/Loginpage';
import Registerpage from './pages/Registerpage';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container>
       <Loginpage/>
       <Registerpage/>
    </Container>
  );
}

export default App;