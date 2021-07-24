import React, { useContext } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import 'bootstrap/dist/css/bootstrap.css'
import { DataFromApiContext } from '../context/DataFromApi'

export default function Navigation() {

  const value = useContext(DataFromApiContext)
  const { user, categories } = value
  return (
    <Navbar bg="danger" expand="xl">
      <Container>
        <Navbar.Brand>Books library</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" expand="xl">
          <Nav className="me-auto">
            <Nav.Link>{user?.first_name}</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              {
                categories && categories.map(item => (
                  <NavDropdown.Item href="#action/3.1" key={item.id}>{item.name}</NavDropdown.Item>
                ))
              }
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  );
}
