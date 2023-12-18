import React from "react";
import { useMutation, gql } from "@apollo/client";
import giveMeMyStuff from "../decode";

const SIGNUP = gql`
  mutation Signup($name: String!, $email: String!, $password: String!) {
    signup(name: $name, email: $email, password: $password) {
      token
    }
  }
`;

const Signup = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [signupMutation] = useMutation(SIGNUP);

  async function handleOnSubmit(event) {
    event.preventDefault();
    console.log({ name, email, password });
    const data = await signupMutation({
      variables: {
        name,
        email,
        password,
      },
    });
    const myStuff = giveMeMyStuff(data.data.signup.token);
    console.log("🚀 ~ file: Signup.jsx:28 ~ handleOnSubmit ~ myStuff:", myStuff);
    setName("");
    setEmail("");
    setPassword("");
  }

  function handleNameOnChange(event) {
    setName(event.target.value);
  }
  function handleEmailOnChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordOnChange(event) {
    setPassword(event.target.value);
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={handleNameOnChange}
      />
      <label htmlFor="name">Enter Your Name</label>
      <br />
      <input
        type="text"
        id="email"
        name="email"
        value={email}
        onChange={handleEmailOnChange}
      />
      <label htmlFor="email">Enter Your Email</label>
      <br />
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={handlePasswordOnChange}
      />
      <label htmlFor="password">Enter Your Password</label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Signup;