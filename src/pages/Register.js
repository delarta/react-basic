import React, { useState, useEffect } from "react";

import {
  Card,
  CardBody,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Container,
} from "reactstrap";

import { connect } from "react-redux";
import { registerUser } from "../redux/actions/auth";

function Register(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password, email);

    props.registerUser(username, password, email);

    props.history.push("/login")
  };

  return (
    <Container id="login">
      <Card>
        <CardBody>
          <h2>Register Form</h2>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </FormGroup>
            <FormGroup>
              <Label>Username</Label>
              <Input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </FormGroup>
            <Button>Register</Button>
          </Form>
          <div className="mt-3">
            Have account?
            <Button color="link" onClick={() => props.history.push("/login")}>
              Register
            </Button>
          </div>
        </CardBody>
      </Card>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (username, password, email) => dispatch(registerUser(username, password, email)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
