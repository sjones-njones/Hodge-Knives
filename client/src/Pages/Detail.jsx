import { useEffect, useState } from 'react';
import { gql } from "@apollo/client";
import Carousel from 'react-bootstrap/Carousel';
// import { QUERY_PRODUCTS } from '../../utils/';

import { Card, Row, Col, Container, Button } from "react-bootstrap";
import SingleProductDetail from '../Components/SingleProductDetail';
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


function Detail() {
  const { id } = useParams();
  const { data } = useQuery(QUERY_PRODUCTS, {
    variables: { productId: id },
  });

  const currentProduct = data?.product || {};
  return(

    <div>
<SingleProductDetail />
      <div className='m-3'>
        <Link to={`/Shop`}>
          <Button className=' btn m-2 hover btn-warning text-dark fs-5'>Back to Shop</Button>
        </Link>
        <Link to={`/Order/${currentProduct._id}`}>
        <Button value='' className='btn m-2 hover btn-warning text-dark fs-5'>Buy Now</Button>
        </Link>
      </div>
    </div>
    ) 
}
export default Detail;


