import { useEffect, useState } from 'react';
import { gql } from "@apollo/client";
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
// import Spinner from "../assets/images/spinner.gif";
// import { useStoreContext } from '../../utils/GlobalState';
import { Card, Row, Col, Container, Button } from "react-bootstrap";

import { Link, useParams, Route, Routes } from 'react-router-dom';
import { useQuery } from '@apollo/client';
export const QUERY_PRODUCTS = gql`
query Product($productId: ID!) {
  product(productId: $productId) {
    _id
    name
    description
    image
    image2
    image3
    image4
    image5
    image6
    price
    category
  }
}
`;

{/* <div className="row mx-auto">
<div className="col-sm-6 w-75 mx-auto">
  <div className="card bg-black">
    <div className="row card-body">
      <img className="col-sm-6" src={currentProduct.image} alt={currentProduct.name} />
      <div className="col-sm-3 my-auto">
      <img className="col-sm-6 my-3 d-block" src={currentProduct. */}
function Detail() {
  const { id } = useParams();
  const { data } = useQuery(QUERY_PRODUCTS, {
    variables: { productId: id },
  });
  const currentProduct = data?.product || {};
  // Get the userId param from the URL.
  return (

     <div className=' m-3 row mx-auto'>
      <div className="col-md-8 mx-auto mx-auto">

        <Carousel className='mx-auto'>
          <Carousel.Item>
            <img className="col-sm-6" src={currentProduct.image} alt={currentProduct.name} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="col-sm-6" src={currentProduct.image2} alt={currentProduct.name} />

          </Carousel.Item>
          <Carousel.Item>
            <img className="col-sm-6" src={currentProduct.image3} alt={currentProduct.name} />
          </Carousel.Item>
        </Carousel>
<div className='text-white'>
        <h3>{currentProduct.name}</h3>
                <p>{currentProduct.description}</p>
                <p>${currentProduct.price}</p>
</div>
<div>
        <Button className='btn hover m-1 w-25 btn-warning w-50  text-dark fs-5'>Add to Cart</Button>
        <Link to={`/Shop`}
        >
          <Button className='btn hover m-3 w-25 btn-warning text-dark fs-5'>Back to Shop</Button>
        </Link>
          </div>
      </div>
    </div>


  );
}
export default Detail;


