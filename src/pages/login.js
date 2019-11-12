import React, { Component } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Particles from "react-particles-js";
import LoginForm from "../component/user/loginForm";

export default class Login extends Component {
  render() {
    return (
      <div className="user-login">
        <Particles />
        <Container>
          <Row className="justify-content-between align-items-center">
            <Col md="5">
              <h3 className="text-center">BookShop</h3>
            </Col>

            <Col md="5">
              <LoginForm />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
