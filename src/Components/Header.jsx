import React from "react";
import { Fragment } from "react";
import "../styles/Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Fragment>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <hr />
          <Navbar.Brand as={Link} to="/">
            Alex
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/About">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/Contact">
              Contact
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <br />
    </Fragment>
  );
}

export default Header;
