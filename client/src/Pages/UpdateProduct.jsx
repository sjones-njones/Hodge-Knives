import React from "react";
import { Link, useParams, Route, Routes } from 'react-router-dom';
import { Button, Form } from "react-bootstrap";


import { useQuery } from '@apollo/client';
import { gql } from "@apollo/client";
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

const ProductUpdate = () => {
  const { id } = useParams();
  const { data } = useQuery(QUERY_PRODUCTS, {
    variables: { productId: id },
  });
  const currentProduct = data?.product || {};

  return (
    <div className="row justify-content-center">
      <Form className="mt-3 w-75 text-white fs-5">
        <Form.Group className="text-start mb-3" controlId="name">
          <Form.Label>Product Name</Form.Label>
          <Form.Control type="text" placeholder={currentProduct.name} />
        </Form.Group>

        <Form.Group className=" text-start mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder={currentProduct.description} />
        </Form.Group>
        <Form.Group className="text-start mb-3" controlId="image">
          <Form.Label>Main Image URL</Form.Label>
          <Form.Control type="text" placeholder={currentProduct.image} />
        </Form.Group>
        <Form.Group className="text-start mb-3" controlId="image2">
          <Form.Label>2nd Image URL</Form.Label>
          <Form.Control type="text" placeholder={currentProduct.image2} />
        </Form.Group>
        <Form.Group className="text-start mb-3" controlId="image3">
          <Form.Label>3rd Image URL</Form.Label>
          <Form.Control type="text" placeholder={currentProduct.image3} />
        </Form.Group>
        <Form.Group className="text-start mb-3" controlId="price">
          <Form.Label>Price ($ Amount Only)</Form.Label>
          <Form.Control type="integer" min="1"
            max="1000" placeholder={`${currentProduct.price}`} />
        </Form.Group>
        <div className="text-start">
        <Form.Label className="">Current Category: {currentProduct.category} </Form.Label>
        </div>
        <Form.Select className="mb-3">
          <option value="Available">Available</option>
          <option value="Archive">Archive</option>

        </Form.Select>
      <Button type="submit" className="btn btn-warning btn-lg m-2 w-25 ">Update Product</Button>
      <Link to="/Admin">
        <button type="button" className="btn btn-warning btn-lg m-2 w-25">Back to Admin</button>
      </Link>
      <Link to="/">
        <button type="button" className="btn btn-warning btn-lg m-2 w-25">Home</button>
      </Link>
      </Form>
    </div>

  );
};

export default ProductUpdate;



