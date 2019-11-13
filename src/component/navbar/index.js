import React, { Component } from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { IoMdPeople, IoMdGlobe, IoMdSettings } from "react-icons/io";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LOG_OUT } from "../../redux/actions/userAction";

const AppNavbar = () => {
  const dispatch = useDispatch();
  function LogOut() {
    dispatch(LOG_OUT());
  }
  return (
    <>
      <Navbar bg="light" expand="lg" sticky="top">
        <Container>
          <Link className="navbar-brand" to="/">
            BookShop
          </Link>
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
                    <IoMdSettings /> <span className="sr-only">Bootstrap</span>
                  </span>
                }
                id="basic-nav-dropdown"
              >
                <Link className="dropdown-item" to="/profile">
                  Profile
                </Link>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <button onClick={() => LogOut()}>Log Out</button>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default AppNavbar;
