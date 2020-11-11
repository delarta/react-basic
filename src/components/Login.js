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
import axios from "axios"

// {
//   "firstName": "Neo Armstrong",
//    "lastName": "Cyclone Jet Armstrong",
//    "gender": "Laki-laki",
//    "email": "armstrong@mail.com",
//    "password": "password123"
// }

const Login = () => {
  const urlLogin = "https://5fa4bcd2732de900162e85ef.mockapi.io/api/register";

  const history = useHistory();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      firstName: firstName,
      lastName: lastName,
      gender: gender,
      email: email,
      password: password,
    };

    axios({
      method: "POST",
      url: urlLogin,
      data: userData
    })
    .then(() => {
      history.push("/tmdb-hooks")
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
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
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
