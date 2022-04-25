import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">
              <Link to={"/"}>Home</Link>
            </Nav.Link>
            <Nav.Link href="#features">
              <Link to={"/services"}>Services</Link>
            </Nav.Link>
            <Nav.Link href="#pricing">
              <Link to={"/about"}>About</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
