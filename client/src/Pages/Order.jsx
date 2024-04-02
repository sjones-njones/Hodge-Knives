import "../Home.css";
import { Form, Button, Card, Row, Col, Image } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import { gql } from "@apollo/client";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useParams, Route, Routes } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import PayPalPayments from "../Components/PayPalPayment";
export const QUERY_PRODUCTS = gql`
query Product($productId: ID!) {
  product(productId: $productId) {
    _id
    name
    description
    image
    image2
    image3
    price
    category
  }
}
`;
const Order = () => {

  const showToastMessage = () => {

    toast("Order Sent! We will send you a payment request soon!"
    );
  };

  const initialOptions = {
    clientId: "AX_ibBYdzRLVeqf4HHDKaatL6BWvCJQC7vFGVeteusWgwLXAsFo2_iQzdpnZpdkqky519oYoQ1-LUqiF",
    currency: "USD",
    intent: "capture",
    'disable-funding': 'credit'


  };
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

  const { id } = useParams();
  const { data } = useQuery(QUERY_PRODUCTS, {
    variables: { productId: id },
  });
  const currentProduct = data?.product || {};
  return (
    <PayPalScriptProvider options={initialOptions}>

      <div className="">
        <div className='orderForm mx-auto'>
          <Row className="orderForm">
            <Col>

              <Card className=" bg-black">


                <Row className=" mx-auto">
                  <div className=' '>
                    <Col>

                      <h2 className=' fw-bold text-white'>{currentProduct.name}</h2>
                      <h4 className=' text-white'>${currentProduct.price}</h4>
                    </Col>
                    <Col>

                      <Image
                        fluid
                        width=""
                        className="picSizing" src={currentProduct.image} alt={currentProduct.name} />

                    </Col>



                  </div>

                </Row>
              </Card>
            </Col>
            <Col className="">
              <Card className="bg-black border-white">

                <Form ref={form} onSubmit={sendEmail}>

                  <Row className="mb-3">

                    <Form.Group as={Col}className="mb-3" controlId="exampleForm.ControlInput2">
                      <Form.Label className='text-white fs-5'>Name</Form.Label>
                      <Form.Control
                        type="name" name='name' />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label className='text-white fs-5'>Email</Form.Label>
                      <Form.Control type="email" name='email' />
                    </Form.Group>


                  </Row>

                  <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label className='text-white fs-5'>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" name='address' />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label className='text-white fs-5'>Address 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" name='address2' />
                  </Form.Group>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label className='text-white fs-5'>City</Form.Label>
                      <Form.Control name='city' />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label className='text-white fs-5'>State</Form.Label>
                      <Form.Select
                        name="state"
                        type="state" defaultValue="Choose...">
                        <option value="">Select state</option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="GU">Guam</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="PR">Puerto Rico</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group className='mt-3' controlId="formGridZip">
                      <Form.Label className='text-white fs-5'>Zip</Form.Label>
                      <Form.Control type="zip" name='zip' />
                    </Form.Group>

                    <Form.Group className="d-none" controlId="productName">
                      <Form.Label className='text-white fs-5'></Form.Label>
                      <Form.Control value={currentProduct.name} type="productName" name='productName' />
                    </Form.Group>

                    <Form.Group className="d-none" controlId="price">
                      <Form.Label className='text-white fs-5'></Form.Label>
                      <Form.Control value={currentProduct.price} type="price" name='price' />
                    </Form.Group>

                    <Form.Group className="d-none" controlId="imgURL">
                      <Form.Label className='text-white fs-5'></Form.Label>
                      <Form.Control value={currentProduct.image} type="imgURL" name='imgURL' />
                    </Form.Group>

                    <Form.Group as={Col} className='mt-3'
                      controlId="paymentMethod">
                      <Form.Label className='text-white fs-5'>Payment Method</Form.Label>
                      <Form.Select

                        name="paymentMethod"
                        type="paymentMethod"
                        defaultValue="Choose...">
                        <option value=""></option>
                        <option value="Paypal">Paypal</option>
                        <option value="Venmo">Venmo</option>
                      </Form.Select>
                      {/* <Form.Control type="paymentMethod" name='paymentMethod' /> */}
                    </Form.Group>

                    <Form.Group as={Col} className="mt-3" controlId="userName">
                      <Form.Label className='text-white fs-5'>Paypal/Venmo Username</Form.Label>
                      <Form.Control type="userName" name='userName' />
                    </Form.Group>
                  </Row>

                  <Button className="btn btn-lg btn-warning " type="submit" onClick={showToastMessage}>
                    Order Now
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
                    className="my-toast-container"
                  />
                </Form>
              </Card>
            </Col>

          </Row>
        </div>
      </div>
    </PayPalScriptProvider>

  );
};

export default Order;

