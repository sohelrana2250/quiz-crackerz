import React from 'react';
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from 'react-bootstrap'
import './Header.css'
const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Quiz-Code</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto Header">
                        <Link to="/">Home</Link>
                        <Link to="/statistics">Statistics</Link>
                        <Link to="/blog">Blog</Link>

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;