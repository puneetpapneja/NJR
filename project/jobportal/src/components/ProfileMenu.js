import Dropdown from 'react-bootstrap/Dropdown';
import {Link} from 'react-router-dom';
function Menu() {
  return (
    <Dropdown.Menu show>
      <Dropdown.Item eventKey="2" as={Link} to="/profile"><i class="bi bi-person-add"></i>Profile</Dropdown.Item>
      <Dropdown.Item eventKey="3"><i class="bi bi-box-arrow-in-right"></i>LogOut</Dropdown.Item>
    </Dropdown.Menu>
  );
}

export default Menu;