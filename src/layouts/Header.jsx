import {Navbar, Container, Nav, Button} from 'react-bootstrap';
import '../styles/App.css'
import {LogoutEmail} from '../config/redux/actions/authAction';
import {useDispatch} from 'react-redux';
import {useEffect} from 'react';

const Header = () => {
    const dispatch = useDispatch();

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
                <Button onClick={() => dispatch(LogoutEmail())} className="nav-btn">Logout</Button>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default Header;