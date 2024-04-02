
import React from "react";
import { useMutation, gql } from "@apollo/client";
import giveMeMyStuff from "../decode";
import { Form, Button, Card } from 'react-bootstrap';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import ".././Home.css";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;
export const OneUser = gql`
query OneUser($email: String!) {
  oneUser(email: $email) {
    email
    _id
    name
    password
  }
}
`;

const Login = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loginMutation] = useMutation(LOGIN);

  async function handleOnSubmit(event) {
    event.preventDefault();
    console.log({ email, password });
    const data = await loginMutation({
      variables: {
        email,
        password,
      },
    });
    const myStuff = giveMeMyStuff(data.data.login.token);
    console.log({ email, password });
    console.log("🚀 ~ file: Login.jsx:28 ~ handleOnSubmit ~ myStuff:", myStuff);
    console.log(giveMeMyStuff(data.data.login.token));
    setEmail("");
    setPassword("");
  }

  function handleEmailOnChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordOnChange(event) {
    setPassword(event.target.value);
  }
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nqup4tv', 'template_9cp61g6', form.current, {
      publicKey: 'VkcSxKO-vNCJO3T3-',
    })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    e.target.reset()
  };
  return (
    <div>
            <div className='sizingForm mx-auto text-start'>
        <Card className="bg-black border-white">

          <Form onSubmit={handleOnSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className='fs-5 text-white'>Email</Form.Label>
              <Form.Control value={email}
                onChange={handleEmailOnChange} type="email" name='email' />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label className='text-white fs-5'>Enter Your Password</Form.Label>
              <Form.Control value={password}
                onChange={handlePasswordOnChange} type="password" name='password' />
            </Form.Group>

            <Button className="btn btn-lg btn-warning " type="submit">
              Login
            </Button>
            
            {/* <a className='text-secondary text-decoration-none text-'href="/Forgot"> */}
            {/* </a> */}

            
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Reset Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form ref={form} onSubmit={sendEmail}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name='email'
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
          <Button variant="warning" type="submit" onClick={handleClose}>
Reset Password          </Button>
                      </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
          </Form>
        </Card>
        <Card className="mt-2 bg-black border-white">

          <p className="fs-5 text-secondary  text-center">No Account? Sign Up Now </p>
           
          <a className="mx-auto" href='/SignUp'>

            <Button className=" text-center btn btn-lg  mt-2 btn-warning" type="submit">
              Sign Up
            </Button>
          </a>

        </Card>
        <Button onClick={handleShow} className="btn btn-link sizeLogin text-decoration-none text-secondary d-none  fs-5 mx-0 mt-3">Forgot Your Password? </Button>
      </div>
    </div>

  );
};

export default Login;