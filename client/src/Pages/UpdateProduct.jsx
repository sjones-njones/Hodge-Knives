import React from "react";
import { Link, useParams } from 'react-router-dom';
import { Button, Form, Row, Col } from "react-bootstrap";
import { UPDATEPRODUCTCATEGORY, QUERY_PRODUCTS, UPDATEPRODUCTNAME, UPDATEPRODUCTDESCRIPTION, UPDATEPRODUCTIMAGE, UPDATEPRODUCTSECONDIMAGE, UPDATEPRODUCTTHIRDIMAGE, UPDATEPRODUCTPRICE } from '../../utils/queries';
import { useMutation, useQuery } from '@apollo/client';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import "../Home.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductUpdate = () => {
  const showToastMessage = () => {

    toast("Success!"
    );
  };

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
    const dataImage = await changeImage({
      variables: {
        updateProductId: id,
        image: image
      },
    });
    setImage("");
  }
  async function handleOnSubmitSecondImage(event) {
    const dataSecondImage = await changeSecondImage({
      variables: {
        updateProductId: id,
        image2: secondImage
      },
    });
    setSecondImage("");
  }
  async function handleOnSubmitThirdImage(event) {
    const dataThirdImage = await changeThirdImage({
      variables: {
        updateProductId: id,
        image3: thirdImage
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
    <div className="row sizingUpdateForm justify-content-center">

      <Form className="sizingUpdateForm px-0" onSubmit={handleOnSubmitName}>
        <Form.Label className="stylingUpdateLabel text-white fs-4 mb-0">Name</Form.Label>
        <Form.Group className=" text-start" controlId="name">
          <Form.Control className="" onChange={handleNameOnChange} type="text" placeholder={currentProduct.name} />
        </Form.Group>
        <Button type="submit" onClick={showToastMessage} className="btn stylingUpdateButton btn-warning ">Update Name</Button>

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

      <Form className="sizingUpdateForm px-0" onSubmit={handleOnSubmitDescription}>
        <Form.Label className="stylingUpdateLabel text-white fs-4 mb-0">Description</Form.Label>
        <Form.Group className=" text-start" controlId="name">
          <Form.Control onChange={handleDescriptionOnChange} type="text" placeholder={currentProduct.description} />
        </Form.Group>
        <Button type="submit" onClick={showToastMessage} className="btn stylingUpdateButton btn-warning ">Update Description</Button>

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

      <Form className="sizingUpdateForm px-0" onSubmit={handleOnSubmitImage}>
        <Form.Label className="stylingUpdateLabel text-white fs-4 mb-0">Main Image</Form.Label>
        <Form.Group className=" stylingUpdateInput text-start" controlId="name">
          <Form.Control className="stylingUpdateInput" onChange={handleImageOnChange} type="text" placeholder={currentProduct.image} />
        </Form.Group>
        <Button type="submit" onClick={showToastMessage} className="btn stylingUpdateButton btn-warning ">Update Image</Button>

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



      <Form className="sizingUpdateForm px-0" onSubmit={handleOnSubmitSecondImage}>
        <Form.Label className="stylingUpdateLabel text-white fs-4 mb-0">2nd Image</Form.Label>
        <Form.Group className=" text-start" controlId="name">
          <Form.Control onChange={handleSecondImageOnChange} type="text" placeholder={currentProduct.image2} />
        </Form.Group>
        <Button type="submit" onClick={showToastMessage} className="btn stylingUpdateButton btn-warning ">Update Image</Button>

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

      <Form className="sizingUpdateForm px-0" onSubmit={handleOnSubmitThirdImage}>
        <Form.Label className="stylingUpdateLabel text-white fs-4 mb-0">3rd Image</Form.Label>
        <Form.Group className=" text-start" controlId="name">
          <Form.Control onChange={handleThirdImageOnChange} type="text" placeholder={currentProduct.image3} />
        </Form.Group>
        <Button type="submit" onClick={showToastMessage} className="btn stylingUpdateButton btn-warning ">Update Image</Button>

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

      <Form className="sizingUpdateForm px-0" onSubmit={handleOnSubmitPrice}>
        <Form.Label className="stylingUpdateLabel text-white fs-4 mb-0">Price</Form.Label>
        <Form.Group className=" text-start" controlId="name">
          <Form.Control onChange={handlePriceOnChange} type="text" placeholder={currentProduct.price} />
        </Form.Group>
        <Button type="submit" onClick={showToastMessage} className="btn stylingUpdateButton btn-warning ">Update Price</Button>

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


      <Form className="sizingUpdateForm px-0" onSubmit={handleOnSubmitCategory}>
        <Form.Label className="stylingUpdateLabel text-white fs-4 mb-0">Current Category: {currentProduct.category} </Form.Label>
        <Form.Group className=" text-start" controlId="name">
          <Form.Select value={category} onChange={handleCategoryOnChange} className="mb-3">
            <option value="Available">Available</option>
            <option value="Archive">Archive</option>
          </Form.Select>
        </Form.Group>
        <Button type="submit" onClick={showToastMessage} className="btn stylingUpdateButton btn-warning ">Update Category</Button>

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



      <Link to="/Admin">
        <button type="button" className="btn sizingButton btn-warning btn-lg m-2 ">Back to Admin</button>
      </Link>
      <Link to="/">
        <button type="button" className="btn sizingButton btn-warning btn-lg m-2 ">Home</button>
      </Link>
    </div>

  );
};

export default ProductUpdate;



