import {Navbar, Form, Button, FormControl } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import {Link} from 'react-router-dom';
import '../styles/NavbarAdmin.css';


const NavbarAdmin = () => {
    return(
        <>
        <section id="content w-100">
            <div class="navbar-bg position-sticky sticky-top">
                <Navbar class="navbar navbar-light ">
                    <i class='bx bx-menu toggle-sidebar'></i>
                    <div class="nav-right d-flex justify-content-end">
                    <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button class="btn btn-clicks btn-outline-success my-2 my-sm-0" type="submit">Search</Button>
                    </Form>
                    <div class="profile-nav d-flex align-items-center justify-content-end me-3">
                        <Link to="#"><Image src="images/img_profile.svg" alt="profile picture"/></Link>
                        <p class="mx-3 my-auto">Unis Badri</p>
                        <Link to="#"><Image src="images/icon_arrdown.svg" alt=""/></Link>
                    </div>
                    </div>
                </Navbar>
            </div>
        </section>
        </>
    )
}
export default NavbarAdmin;
