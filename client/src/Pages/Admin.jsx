import React from "react";
import { useMutation, gql } from "@apollo/client";
import giveMeMyStuff from "../decode";

const ADDPRODUCTS = gql`
mutation AddProduct(
  $name: String!
  $category: String!
  $description: String!
  $price: Int!
  $image: String!
  ) {
  addProduct(
    name: $name
    category: $category
    description: $description
    price: $price
    image: $image
    ) {
    _id
    name
    description
    image
    price
    category
  }
}
`
const Admin = () => {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [image, setImage] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [category, setCategory] = React.useState("");


  const [addProductMutation] = useMutation(ADDPRODUCTS);

  async function handleOnSubmit(event) {
    event.preventDefault();
    console.log({ name, description, image, price, category });
    const data = await addProductMutation({
      variables: {
        name,
        description,
        image,
        price,
        category,
      },
    });
    const myProducts = (data.data.addProduct.name);
    console.log("🚀 ~ file: Login.jsx:28 ~ handleOnSubmit ~ myStuff:", myProducts);
    setEmail("");
    setPassword("");
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

  function handlePriceOnChange(event) {
    setPrice(event.target.value);
  }

  function handleCategoryOnChange(event) {
    setCategory(event.target.value);
  }

  return (
    <div>

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
          id="description"
          name="description"
          value={description}
          onChange={handleDescriptionOnChange}
        />
        <label htmlFor="description">Enter Your Password</label>
        <br />
        <input
          type="text"
          id="image"
          name="image"
          value={image}
          onChange={handleImageOnChange}
        />
        <label htmlFor="image">Enter Your Password</label>
        <br />
        <input
          type="text"
          id="price"
          name="price"
          value={price}
          onChange={handlePriceOnChange}
        />
        <label htmlFor="price">Enter Your Password</label>
        <br />

        <input
          type="text"
          id="category"
          name="category"
          value={category}
          onChange={handleCategoryOnChange}
        />
        <label htmlFor="password">Enter Your Password</label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>


  );
};

export default Admin;


