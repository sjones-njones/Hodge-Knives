import { useEffect, useState } from 'react';
import { gql } from "@apollo/client";
import Carousel from 'react-bootstrap/Carousel';
import { Card, Ratio, Image, Row, Col, Container, Button } from "react-bootstrap";

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
    price
    category
  }
}
`;
function SingleProductDetail() {
  const { id } = useParams();
  const { data } = useQuery(QUERY_PRODUCTS, {
    variables: { productId: id },
  });
  const currentProduct = data?.product || {};
  // Get the userId param from the URL.
  return (

    <div className=' m-4 row mx-auto'>
      <div className="col-md-7 mx-auto mx-auto">

        <Carousel className='mx-auto'>
          <Carousel.Item>
            <Image
              fluid
              // width="50%"
              className="detailPicSizing" src={currentProduct.image} alt={currentProduct.name} />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              fluid
              // width="50%"
              className="detailPicSizing" src={currentProduct.image2} alt={currentProduct.name} />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              fluid
              // width="50%"
              className="detailPicSizing" src={currentProduct.image3} alt={currentProduct.name} />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="my-auto mx-auto col-sm-5">
        <h2 className='fw-bold text-white'>{currentProduct.name}</h2>
        <div className=''>
          <h5 className='w-75 mx-auto text-start mt-5 text-white'>{currentProduct.description}</h5>
        </div>
        <h2 className='mt-5 text-white'>${currentProduct.price}</h2>
      </div>

    </div>


  );
}
export default SingleProductDetail;