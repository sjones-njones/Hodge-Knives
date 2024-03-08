import { Section } from '@react-email/components';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import '../../Home.css';
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import Toast from 'react-bootstrap/Toast';
import FacebookLogo from '../../assets/images/facebookLogoWhite2.png'

const Contact = () => {
  const showToastMessage = () => {

    toast("We will get back to you shortly!"
    );
  };
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nqup4tv', 'template_3sps3i6', form.current, {
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
           <Form ref={form} onSubmit={sendEmail}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className='fs-5 text-white'>Name</Form.Label>
          <Form.Control type="name" name='name' />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className='text-white fs-5'>Email</Form.Label>
          <Form.Control type="name" name='email' />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className='text-white fs-5'>Message</Form.Label>
          <Form.Control as="textarea" rows={10} type="name" name='message' col="10" />
        </Form.Group>
        <Button className="btn btn-lg btn-warning" onClick={showToastMessage} type="submit">
          Send
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
    <a className="text-decoration-none " href="https://www.facebook.com/profile.php?id=100057059155776"><p className="mt-4 text-secondary fs-4">
        Follow us on Facebook
        </p></a>

        <a href="https://www.facebook.com/profile.php?id=100057059155776">
          <img className='' src={FacebookLogo} alt="Facebook Logo"
            style={{ width: 50, height: 50 }} />
        </a>

        </div>
  )
}

export default Contact
