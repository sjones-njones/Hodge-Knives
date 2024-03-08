import React from "react";
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import { useMutation, gql } from "@apollo/client";
import { Button, Container } from "react-bootstrap";
import { ADDPRODUCTS } from '../../../utils/queries';

const AdminAddProducts = () => {
  const navigate = useNavigate();
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [image, setImage] = React.useState("");
  const [image2, setImage2] = React.useState("");
  const [image3, setImage3] = React.useState("");
  const [price, setPrice] = React.useState();
  const [category, setCategory] = React.useState("");

  const [addProductMutation] = useMutation(ADDPRODUCTS);

  async function handleOnSubmit(event) {
    event.preventDefault();
    navigate('/productAdded', {replace: true});
    const data = await addProductMutation({
      variables: {
        name,
        description,
        image,
        image2,
        image3,
        price,
        category,
      },
    });

    const myProducts = (data.data.addProduct);
    console.log(myProducts);
    setName("");
    setDescription("");
    setImage("");
    setImage2("");
    setImage3("");
    setPrice("");
    setCategory("");
  }

  function handleNameOnChange(event) {
    setName(event.target.value);
  }
  function handleDescriptionOnChange(event) {
    setDescription(event.target.value);
  }
  function handleImageOnChange(event) {
    setImage(event.target.value);
  }
  function handleImage2OnChange(event) {
    setImage2(event.target.value);
  } function handleImage3OnChange(event) {
    setImage3(event.target.value);
  } function handlePriceOnChange(event) {
    setPrice(parseInt(event.target.value));
  }

  function handleCategoryOnChange(event) {
    setCategory(event.target.value);
  }

  return (
    <Container>
      <h2 className="text-white">Enter Your Product Info Below</h2>
    <div className="row justify-content-center">
      <form className="sizingForm mt-3" onSubmit={handleOnSubmit}>
        <div className=" m-4 form-group">
          <label className="label d-block text-white" htmlFor="name">Name</label>
          <input
            className="text-left w-100 rounded"
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameOnChange}
          />
        </div>
        <div className=" m-4 form-group">
          <label className="label d-block text-white" htmlFor="description">Description</label>
          <textarea className="w-100 form-control" id="description" rows="5"
            name="description"
            value={description}
            onChange={handleDescriptionOnChange}
          >
          </textarea>
        </div>

        <div className=" m-4 form-group">
          <label className="label d-block text-white" htmlFor="image">Main Image</label>
          <input
            className="rounded w-100"
            type="text"
            id="image"
            name="image"
            value={image}
            onChange={handleImageOnChange}
          />
        </div>
        <div className=" m-4 form-group">
          <label className="label d-block text-white" htmlFor="image">2nd Image</label>
          <input
            className="rounded w-100"
            type="text"
            id="image"
            name="image2"
            value={image2}
            onChange={handleImage2OnChange}
          />
        </div>
        <div className=" m-4 form-group">
          <label className="label d-block text-white" htmlFor="image">3rd Image</label>
          <input
            className="rounded w-100"
            type="text"
            id="image"
            name="image3"
            value={image3}
            onChange={handleImage3OnChange}
          />
        </div>
        <div className=" m-4 form-group">
          <label className="label d-block text-white" htmlFor="price">Price ($ Amount Only)</label>
          <input
            className="rounded w-100"
            type="integer"
            id="quantity"
            name="quantity"
            min="1"
            max="1000"
            value={price}
            onChange={handlePriceOnChange}
          />


        </div>
        <div className="m-4 form-group">
          <label className="label d-block text-white" htmlFor="image">Category</label>
          <select className="rounded form-control" id="category"
            value={category}
            onChange={handleCategoryOnChange}>
            <option value="null"></option>
            <option className="text-black fs-5" value="Available">Available</option>
            <option className="text-black fs-5" value="Archive">Archive</option>
          </select>
        </div>
        <Button type="submit" className="btn sizingButton btn-warning btn-lg m-2 fs-3">Add Product</Button>
        <Link to="/Admin">
          <Button type="button" className="sizingButton btn btn-warning btn-lg fs-3 m-2">Back</Button>
        </Link>
      </form>
    </div>
    </Container>

  );
};

export default AdminAddProducts;