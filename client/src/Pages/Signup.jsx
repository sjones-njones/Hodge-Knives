import React from "react";
import { useMutation, gql } from "@apollo/client";
import giveMeMyStuff from "../decode";
import { Button, Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';

const SIGNUP = gql`
  mutation Signup($name: String!, $email: String!, $password: String!) {
    signup(name: $name, email: $email, password: $password) {
      token
    }
  }
`;

const Signup = () => {
  const showToastMessage = () => {

    toast("Signed Up!"
    );
  };
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
    <div>
      <div className='sizingForm mx-auto text-start'>
           <Form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className='fs-5 text-white'>Enter Your Name</Form.Label>
          <Form.Control   value={name}
        onChange={handleNameOnChange} type="name" name='name' />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label className='text-white fs-5'>Enter Your Email</Form.Label>
          <Form.Control  value={email}
        onChange={handleEmailOnChange}type="name" name='email' />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
          <Form.Label className='text-white fs-5'>Enter Your Password</Form.Label>
          <Form.Control  value={password}
        onChange={handlePasswordOnChange} type="password" name='password' />
        </Form.Group>
        
        <Button className="btn btn-lg btn-warning"  onClick={showToastMessage} type="submit">
          Sign Up
        </Button>
        <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
        className= "my-toast-container"
      />
          </Form>
    </div>
    {/* <form onSubmit={handleOnSubmit}>
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
    </form> */}
    </div>
  );
};

export default Signup;