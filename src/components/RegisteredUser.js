import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Container } from "reactstrap";
const RegisteredUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://5fa4bcd2732de900162e85ef.mockapi.io/api/register",
    }).then((res) => {
      const result = res.data.find((item) => item.email === "ukhtiyesi@gmail.com"); //null

      if (result) {
        console.log(result);
        setUser(result);
      }
    });
  }, []);

  return (
    <div>
      <Container>
        {user ? <h1>{user.firstName}</h1> : <h1>Registered User</h1>}
      </Container>
    </div>
  );
};

export default RegisteredUser;
