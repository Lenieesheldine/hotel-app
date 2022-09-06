import Nav from 'react-bootstrap/Nav';
import { Container } from 'react-bootstrap';


function Navbar(){
    return(
        <>
        
       <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="#home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='#rooms'>Rooms</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='#about'>About us</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link href='#contact'>Contact</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link href='#login'>Log in</Nav.Link>
        </Nav.Item>
      </Nav>
      
      </>
    )
}
export default Navbar;