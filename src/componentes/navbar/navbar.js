import React from 'react';
import './navbar.css';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Menu = () => {
    return(
        <Navbar bg="primary" variant="dark">
            <Container>
                {/* <Navbar.Brand href="/">Yma</Navbar.Brand> */}
                <Nav className="me-auto">
                    <Nav.Link href="/">Inicio</Nav.Link>
                    <Nav.Link href="/about">Sobre mi</Nav.Link>
                    <Nav.Link href="/know_how">Skills</Nav.Link>
                    <Nav.Link href="/contact">Contacto</Nav.Link>
                    <Nav.Link class="menu" href="/api">Proyecto</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Menu;