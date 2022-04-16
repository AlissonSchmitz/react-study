import { Container, Navbar, NavbarBrand, NavDropdown, Nav} from "react-bootstrap";
import React from 'react'
import { Link } from "react-router-dom";

function Navigator() {
  return(        
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavbarBrand>Alisson Prime</NavbarBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/AboutMovie">About</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="/movies">Movies</NavDropdown.Item>
              <NavDropdown.Item href="/series">Series</NavDropdown.Item>
              <NavDropdown.Item href="/documentaries">Documentaries</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>            
    </Navbar>
  );
}

export default Navigator