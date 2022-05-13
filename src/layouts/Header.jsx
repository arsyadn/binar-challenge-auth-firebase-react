import {Navbar, Container, Nav, Button} from 'react-bootstrap';
import '../styles/App.css'

const Header = () => {
    return(   
    <Navbar collapseOnSelect expand="lg" className="navbar">
        <Container>
            <Navbar.Brand href="/" className="nav-brand"/>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse className="justify-content-lg-end justify-content-center nav-collapse"  id="responsive-navbar-nav">
                <Nav.Link href="/" className="nav-link">Our Service</Nav.Link>
                <Nav.Link href="#features" className="nav-link">Why Us</Nav.Link>
                <Nav.Link href="#pricing" className="nav-link">Testimonial</Nav.Link>
                <Nav.Link href="#pricing" className="nav-link">FAQ</Nav.Link>
                <Button href="#register" className="nav-btn">Register</Button>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default Header;