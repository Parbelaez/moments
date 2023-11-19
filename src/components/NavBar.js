import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png';
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
    return (
        <Navbar className={styles.NavBar} expand="md" fixed="top">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="logo" height="45" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto text-start">
                        <Nav.Link>
                            <i className='fas fa-home'></i>Home
                        </Nav.Link>
                        <Nav.Link>
                            <i className='fas fa-sign-in-alt'></i>Sign In
                        </Nav.Link>
                        <Nav.Link>
                            <i className='fas fa-user-plus'></i>Sign Up
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar