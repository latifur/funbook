import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TRY_LOGIN } from "../../redux/actions/userAction";
import { Redirect, useHistory, Link } from "react-router-dom";

function LoginForm() {
  const [userState, setuserState] = useState({
    userName: "",
    userPassword: ""
  });
  const UserInfo = useSelector(state => state.user);
  const dispatch = useDispatch();

  function infoSubmit(e) {
    e.preventDefault();
    const userName = userState.userName;
    const userPassword = userState.userPassword;
    console.log(userName, userPassword);

    if (userName == "" || userPassword == "") {
      alert("please input valid information");
    } else {
      dispatch(TRY_LOGIN(userName, userPassword));
    }
    if (UserInfo.loginStatus) {
      console.log("success");
      return <Redirect to="/success" />;
    }
  }

  return (
    <div>
      <Form onSubmit={e => infoSubmit(e)}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={e =>
              setuserState({
                userName: e.target.value,
                userPassword: userState.userPassword
              })
            }
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={e =>
              setuserState({
                userName: userState.userName,
                userPassword: e.target.value
              })
            }
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default LoginForm;
