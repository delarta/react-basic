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
import { loginUser } from "../redux/actions/auth";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);

    props.loginUser(username, password)
  };

  useEffect(() => {
    if(props.token && props.status){
      props.history.push("/")
    }else if(props.status === false){
      props.history.push("/onboarding")
    }
  }, [props]);

  return (
    <Container id="login">
      <Card>
        <CardBody>
          <h2>Login Form</h2>
          <Form onSubmit={handleSubmit}>
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
            <Button>Login</Button>
          </Form>
          <div className="mt-3">
            Doesn't have account?{" "}
            <Button color="link" onClick={() => props.history.push("/register")}>
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
    status: state.status
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (username, password) => dispatch(loginUser(username, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
