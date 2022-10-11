import React from 'react';
import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar, Button } from 'react-bootstrap'
import './Header.css'
const Header = () => {

    //<NavLink className={({ isActive }) => isActive ? 'active' : undefined} to="/post">Post</NavLink>
    return (
        <Navbar bg="light" expand="lg">
            <Container>

                <Navbar.Brand href="#home"><Button className='fs-4'><i class="fa-solid fa-graduation-cap fs-3"></i> Kahoot-Quiz-Zone</Button></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto Header">
                        <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to="/">Home</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to="/statistics">Statistics</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to="/blog">Blog</NavLink>

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;