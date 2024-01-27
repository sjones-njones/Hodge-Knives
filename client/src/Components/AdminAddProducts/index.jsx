import React from "react";
import { Link } from 'react-router-dom';
import { useMutation, gql } from "@apollo/client";
import { Button } from "react-bootstrap";

const ADDPRODUCTS = gql`
mutation AddProduct(
  $name: String!,
  $category: String!,
  $description: String!,
  $price: Int!,
  $image: String!,
  $image2: String, 
  $image3: String) 
  {
  addProduct(
    name: $name,
    category: $category,
    description: $description,
    price: $price,
    image: $image,
    image2: $image2, 
    image3: $image3) 
    {
 name
}
}
`
const AdminAddProducts = () => {
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
    navigate('/Admin/AddProducts');
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
    <div className="row justify-content-center">
      <form className="mt-3 w-50" onSubmit={handleOnSubmit}>
        <div className=" m-4 form-group">
          <label className="label d-block text-white" htmlFor="name">Enter Product Name</label>
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
          <label className="label d-block text-white" htmlFor="description">Enter Product Description</label>
          <textarea className="w-100 form-control" id="description" rows="3"
            name="description"
            value={description}
            onChange={handleDescriptionOnChange}
          >
          </textarea>
        </div>

        <div className=" m-4 form-group">
          <label className="label d-block text-white" htmlFor="image">Enter Main Image URL</label>
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
          <label className="label d-block text-white" htmlFor="image">Enter 2nd Image URL </label>
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
          <label className="label d-block text-white" htmlFor="image">Enter 3rd Image URL </label>
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
          <label className="label d-block text-white" htmlFor="price">Enter Product Price ($ Amount Only)</label>
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
          <label className="label d-block text-white" htmlFor="image">Select A Category</label>
          <select className="rounded form-control" id="category"
            value={category}
            onChange={handleCategoryOnChange}>
            <option value="null"></option>
            <option className="text-black fs-5" value="Available">Available</option>
            <option className="text-black fs-5" value="Archive">Archive</option>
          </select>
        </div>
        <Button type="submit" className="btn btn-warning btn-lg btn-secondary m-2 w-25 fs-4">Add Product</Button>
        <Link to="/Admin">
          <button type="button" className="btn btn-warning btn-lg btn-secondary m-2 w-25 fs-4">Back</button>
        </Link>
      </form>
    </div>
  );
};

export default AdminAddProducts;