import Dropdown from 'react-bootstrap/Dropdown';
import {Link, useNavigate} from 'react-router-dom';
function Menu() {
  const navigate= useNavigate();
  return (
    <Dropdown.Menu show>
      <Dropdown.Item  onClick={()=>navigate("/profile")}><i class="bi bi-person-add"></i>Profile</Dropdown.Item>
      <Dropdown.Item><i class="bi bi-box-arrow-in-right"></i>LogOut</Dropdown.Item>
    </Dropdown.Menu>
  );
}

export default Menu;