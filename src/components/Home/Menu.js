import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <Navbar variant="light" bg="navbar navbar-dark bg-dark" collapseOnSelect expand="lg" sticky="top">
                <Container>

                    <Navbar.Brand >
                        <h4 >Developer Zone</h4>
                    </Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} className="text-white" to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} className="text-white" to="/home">Portfolio</Nav.Link>
                        <Nav.Link className="text-white" as={Link} to="/contact">Contact Me</Nav.Link>
                        <Nav.Link className="text-white" as={Link} to="/blog">Blogs</Nav.Link>


                        <a target="_blank" className="nav-link text-white" href="https://drive.google.com/u/0/uc?id=1W6S03qeT3EVlWcBxq6mC02EEZR7Su5R2&export=download">Download Resume</a>



                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </div>
    );
};

export default Menu;