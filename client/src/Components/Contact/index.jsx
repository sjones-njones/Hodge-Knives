import { Section } from '@react-email/components';
import { Button, Form } from 'react-bootstrap';

import React from 'react';
import { useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
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
    <div className='sizingForm mx-auto text-start'>
      <Form ref={form} onSubmit={sendEmail}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className='fs-5 text-white'>Name</Form.Label>
          <Form.Control type="name" name='name'  />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className='text-white fs-5'>Email</Form.Label>
          <Form.Control type="name" name='email'/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className='text-white fs-5'>Message</Form.Label>
          <Form.Control as="textarea" rows={10} type="name" name='message' col="10" />
        </Form.Group>
        <Button className="btn btn-lg"variant="warning" type="submit">
        Send
      </Button>
      </Form>
    </div>
  )
}

export default Contact
