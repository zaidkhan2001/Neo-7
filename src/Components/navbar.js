import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navbar.css'; // Import custom CSS file for styling
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" variant="light" className="custom-navbar light-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand">
          <img
            src="/Assets/Logo.png" 
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
            <Nav.Link as={Link} to="/products" className="nav-link">Products</Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link">About Us</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;