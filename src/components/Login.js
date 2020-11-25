import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Container,
  Card,
  CardBody,
  Input,
  FormGroup,
  Label,
  Button,
  Form,
} from "reactstrap";
import axios from "axios";

// {
//   "firstName": "Neo Armstrong",
//    "lastName": "Cyclone Jet Armstrong",
//    "gender": "Laki-laki",
//    "email": "armstrong@mail.com",
//    "password": "password123"
// }

const Login = () => {
  const urlLogin =
    "http://ec2-3-1-218-225.ap-southeast-1.compute.amazonaws.com/auth/login";

  const history = useHistory();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      username, // username: username
      password, // password: password
    };

    axios({
      method: "POST",
      url: urlLogin,
      data: userData,
    })
      .then((res) => {
        localStorage.setItem("token", res.data.token)
      })
      .then(() => {
        history.push("/")
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container className="vh-100 d-flex align-items-center justify-content-center">
      <Card
        style={{
          width: "80%",
        }}
      >
        <CardBody>
          <h2 className="mb-4">Login Form</h2>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Username</Label>
              <Input
                type="text"
                name="username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>
            <Button block color="primary">
              Login
            </Button>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
};

export default Login;
