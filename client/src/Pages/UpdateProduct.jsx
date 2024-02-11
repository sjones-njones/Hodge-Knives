import React from "react";
import { Link, useParams } from 'react-router-dom';
import { Button, Form, Row, Col } from "react-bootstrap";
import { UPDATEPRODUCTCATEGORY, QUERY_PRODUCTS, UPDATEPRODUCTNAME, UPDATEPRODUCTDESCRIPTION, UPDATEPRODUCTIMAGE, UPDATEPRODUCTSECONDIMAGE, UPDATEPRODUCTTHIRDIMAGE, UPDATEPRODUCTPRICE } from '../../utils/queries';
import { useMutation, useQuery } from '@apollo/client';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


const ProductUpdate = () => {
  const { id } = useParams();
  const { data } = useQuery(QUERY_PRODUCTS, {
    variables: { productId: id },
  });
  const currentProduct = data?.product || {};
  const [category, setCategory] = React.useState("");
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [image, setImage] = React.useState("");
  const [secondImage, setSecondImage] = React.useState("");
  const [thirdImage, setThirdImage] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [changeCategory] = useMutation(UPDATEPRODUCTCATEGORY);
  const [changeName] = useMutation(UPDATEPRODUCTNAME);
  const [changeDescription] = useMutation(UPDATEPRODUCTDESCRIPTION);
  const [changeImage] = useMutation(UPDATEPRODUCTIMAGE);
  const [changeSecondImage] = useMutation(UPDATEPRODUCTSECONDIMAGE);
  const [changeThirdImage] = useMutation(UPDATEPRODUCTTHIRDIMAGE);
  const [changePrice] = useMutation(UPDATEPRODUCTPRICE);

  async function handleOnSubmitCategory(event) {
    event.preventDefault();
    const dataCategory = await changeCategory({
      variables: {
        updateProductId: id,
        category: category
      },
    });
    setCategory("");
  }

  async function handleOnSubmitName(event) {
    const dataName = await changeName({
      variables: {
        updateProductId: id,
        name: name
      },
    });
    setName("");
  }

  async function handleOnSubmitImage(event) {
    event.preventDefault();
    const dataImage = await changeImage({
      variables: {
        updateProductId: id,
        image: image
      },
    });
    setImage("");
  }
  async function handleOnSubmitSecondImage(event) {
    event.preventDefault();
    const dataSecondImage = await changeSecondImage({
      variables: {
        updateProductId: id,
        image2: image2
      },
    });
    setSecondImage("");
  }
  async function handleOnSubmitThirdImage(event) {
    event.preventDefault();
    const dataThirdImage = await changeThirdImage({
      variables: {
        updateProductId: id,
        image3: image3
      },
    });
    setThirdImage("");
  }
  async function handleOnSubmitDescription(event) {
    const dataDescription = await changeDescription({
      variables: {
        updateProductId: id,
        description: description
      },
    });
    setDescription("");
  }
  async function handleOnSubmitPrice(event) {
    event.preventDefault();
    const dataPrice = await changePrice({
      variables: {
        updateProductId: id,
        price: price
      },
    });
    setPrice("");
  }


  function handleCategoryOnChange(event) {
    setCategory(event.target.value);
    console.log(event.target.value)
  }
  function handleNameOnChange(event) {
    setName(event.target.value);
    console.log(event.target.value)
  }
  function handleDescriptionOnChange(event) {
    setDescription(event.target.value);
    console.log(event.target.value)
  }
  function handleImageOnChange(event) {
    setImage(event.target.value);
    console.log(event.target.value)
  }
  function handleSecondImageOnChange(event) {
    setSecondImage(event.target.value);
    console.log(event.target.value)
  }
  function handleThirdImageOnChange(event) {
    setThirdImage(event.target.value);
    console.log(event.target.value)
  }
  function handlePriceOnChange(event) {
    setPrice(parseInt(event.target.value));
    console.log(event.target.value)
  }
  return (
    <div className="row justify-content-center">

      <Form className="mx-4 mt-4 mb-2" onSubmit={handleOnSubmitName}>
        <Row>
          <Col className="col-2 text-end"> 
          <Form.Label className="text-white fs-4">Name</Form.Label>
          </Col>
          <Col className="col-8">
            <Form.Group className=" text-start" controlId="name">
              <Form.Control onChange={handleNameOnChange} type="text" placeholder={currentProduct.name} />
            </Form.Group>
          </Col>
          <Col className="col-2 text-start">
            <Button type="submit" className="btn btn-warning  w-75 ">Update Name</Button>
          </Col>
        </Row>
      </Form>

      <Form className="mx-4 my-2" onSubmit={handleOnSubmitDescription}>
        <Row>
          <Col className="col-2 text-end"> 
          <Form.Label className="text-white fs-4">Description</Form.Label>
          </Col>
          <Col className="col-8">
            <Form.Group className=" text-start" controlId="name">
              <Form.Control onChange={handleDescriptionOnChange} type="text" placeholder={currentProduct.description} />
            </Form.Group>
          </Col>
          <Col className="col-2 text-start">
            <Button type="submit" className="btn btn-warning w-75 ">Update Description</Button>
          </Col>
        </Row>
      </Form>

      <Form className="mx-4 my-2" onSubmit={handleOnSubmitImage}>
        <Row>
          <Col className="col-2 text-end"> 
          <Form.Label className="text-white fs-4">Main Image</Form.Label>
          </Col>
          <Col className="col-8">
            <Form.Group className=" text-start" controlId="name">
              <Form.Control onChange={handleImageOnChange} type="text" placeholder={currentProduct.image} />
            </Form.Group>
          </Col>
          <Col className="col-2 text-start">
            <Button type="submit" className="btn btn-warning w-75 ">Update Image</Button>
          </Col>
        </Row>
      </Form>

      <Form className="mx-4 my-2" onSubmit={handleOnSubmitSecondImage}>
        <Row>
          <Col className="col-2 text-end"> 
          <Form.Label className="text-white fs-4">2nd Image</Form.Label>
          </Col>
          <Col className="col-8">
            <Form.Group className=" text-start" controlId="name">
              <Form.Control onChange={handleSecondImageOnChange} type="text" placeholder={currentProduct.image2} />
            </Form.Group>
          </Col>
          <Col className="col-2 text-start">
            <Button type="submit" className="btn btn-warning w-75 ">Update Image</Button>
          </Col>
        </Row>
      </Form>

      <Form className="mx-4 my-2" onSubmit={handleOnSubmitThirdImage}>
        <Row>
          <Col className="col-2 text-end"> 
          <Form.Label className="text-white fs-4">3rd Image</Form.Label>
          </Col>
          <Col className="col-8">
            <Form.Group className=" text-start" controlId="name">
              <Form.Control onChange={handleThirdImageOnChange} type="text" placeholder={currentProduct.image3} />
            </Form.Group>
          </Col>
          <Col className="col-2 text-start">
            <Button type="submit" className="btn btn-warning w-75 ">Update Image</Button>
          </Col>
        </Row>
      </Form>
          
      <Form className="mx-4 my-2" onSubmit={handleOnSubmitPrice}>
        <Row>
          <Col className="col-2 text-end"> 
          <Form.Label className="text-white fs-4">Price</Form.Label>
          </Col>
          <Col className="col-8">
            <Form.Group className=" text-start" controlId="name">
              <Form.Control onChange={handlePriceOnChange} type="text" placeholder= {currentProduct.price} />
            </Form.Group>
          </Col>
          <Col className="col-2 text-start">
            <Button type="submit" className="btn btn-warning w-75 ">Update Price</Button>
          </Col>
        </Row>
      </Form>

          
      <Form className="mx-4 my-2" onSubmit={handleOnSubmitCategory}>
        <Row>
          <Col className="col-2 text-end"> 
          <Form.Label className="text-white fs-4">Current Category: {currentProduct.category} </Form.Label>
          </Col>
          <Col className="col-8">
            <Form.Group className=" text-start" controlId="name">
            <Form.Select value={category} onChange={handleCategoryOnChange} className="mb-3">
          <option value="Available">Available</option>
          <option value="Archive">Archive</option>

        </Form.Select>            </Form.Group>
          </Col>
          <Col className="col-2 text-start">
            <Button type="submit" className="btn btn-warning w-75 ">Update Category</Button>
          </Col>
        </Row>
      </Form>



      <Link to="/Admin">
        <button type="button" className="btn btn-warning btn-lg m-2 w-25">Back to Admin</button>
      </Link>
      <Link to="/">
        <button type="button" className="btn btn-warning btn-lg m-2 w-25">Home</button>
      </Link>
    </div>

  );
};

export default ProductUpdate;



