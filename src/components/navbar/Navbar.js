import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

export const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
      <Container>
        <Link to="/" className="navbar-brand">
          Hi, I am Hendra
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/skills" className="nav-link">
              Skills
            </Link>
            <Link to="/projects" className="nav-link">
              Projets
            </Link>
            <Link to="/contact-me" className="nav-link">
              Contact Me
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
