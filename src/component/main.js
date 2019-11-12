import React from "react";
import LeftBar from "./leftBar";
import RightBar from "./rightBar";
import MiddlePost from "./middlePost";
import Profile from "./user/profile";

import { Container, Row, Col } from "react-bootstrap";
import Sharethis from "./postComponent/shareThis";
import { Switch, Route } from "react-router-dom";

function Main() {
  return (
    <>
      <div className="main">
        <Container>
          <Row className="justify-content-between">
            <Col md={2}>
              <LeftBar />
            </Col>

            <Col md={6}>
              <Switch>
                <Route path="/" exact component={MiddlePost} />
                <Route path="/profile" exact component={Profile} />
              </Switch>
            </Col>

            <Col md={2}>
              <RightBar />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Main;
