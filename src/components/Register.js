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

const Register = () => {
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

    // fetch(urlLogin, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(userData),
    // })
    //   .then((res) => res.json())
    //   .then((json) => {
    //     history.push("/tmdb-hooks")})
    //   .catch((err) => console.log(err));

    // Cara Axios
  };

  return (
    <Container className="vh-100 d-flex align-items-center justify-content-center">
      <Card
        style={{
          width: "80%",
        }}
      >
        <CardBody>
          <h2 className="mb-4">Register Form</h2>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>First Name</Label>
              <Input
                type="text"
                name="firstName"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label>Last Name</Label>
              <Input
                type="text"
                name="lastName"
                onChange={(e) => setLastName(e.target.value)}
              />
            </FormGroup>
            <FormGroup tag="fieldset">
              <Label>Gender</Label>
              <FormGroup check>
                <Label check>
                  <Input
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={(e) => setGender(e.target.value)}
                  />{" "}
                  Male
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={(e) => setGender(e.target.value)}
                  />{" "}
                  Female
                </Label>
              </FormGroup>
            </FormGroup>
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
              Register
            </Button>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
};

export default Register;
