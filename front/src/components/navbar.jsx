import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from "react-bootstrap";
import "./navbar.css";
import { Link } from 'react-router-dom';

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="custom-navbar shadow-sm">
      <Container>
        {/* Navbar Brand */}
        <Navbar.Brand className="brand-name">
          <img src="/xoxlogo.jpg" alt="" className="xoxlogo" />
        </Navbar.Brand>

        {/* Toggle Button for Mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-links">
            {/* Links */}
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/lookbook" className="nav-item">Collection</Link>
            <Link to="/catalog" className="nav-item">Catalog</Link>
            {/* <Link to="/contact" className="nav-item">Contact</Link> */}
            <Link to="/about" className="nav-item">About</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;