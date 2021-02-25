import React, { useState } from "react";
import Header from "../components/header/Header";
import { Container, Wrapper, Input, LoginButton } from "./Login.style";

const Login = () => {
  const user = {
    email: "irina@email.com",
    password: "accountpass",
  };

  function handleLoginSubmit() {
    if (
      user.email === "irina@email.com" && user.password === "accountpass"
        ? alert("Login succsessful")
        : alert("Wrong password or email")
    );
  }
  return (
    <div>
      <Header />
      <Container>
        <Wrapper>
          <h1>Login</h1>
          <Input type="email" placeholder="Email" value={user.email} />
          <Input type="password" placeholder="Password" value={user.password} />
          <LoginButton
            type="submit"
            value="Login"
            onClick={() => handleLoginSubmit()}
          />
        </Wrapper>
      </Container>
    </div>
  );
};

export default Login;
