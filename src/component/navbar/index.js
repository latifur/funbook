import React, { Component } from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { IoMdPeople, IoMdGlobe, IoMdSettings } from "react-icons/io";
export default class AppNavbar extends Component {
  render() {
    return (
      <>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">BookShop</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="#home">
                  <IoMdPeople />
                </Nav.Link>
                <Nav.Link href="#link">
                  <IoMdGlobe />
                </Nav.Link>
                <NavDropdown
                  title={
                    <span>
                      <IoMdSettings />{" "}
                      <span className="sr-only">Bootstrap</span>
                    </span>
                  }
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}
