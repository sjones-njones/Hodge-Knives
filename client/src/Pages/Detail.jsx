import { useEffect, useState } from 'react';
import { gql } from "@apollo/client";
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
// import Spinner from "../assets/images/spinner.gif";
// import { useStoreContext } from '../../utils/GlobalState';
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
  return(

    <div>
<SingleProductDetail />
      <div className='m-3'>
        <Link to={`/Shop`}>
          <Button className=' btn m-2 w-25 hover btn-warning text-dark fs-5'>Back to Shop</Button>
        </Link>
        <Button className='btn w-25 m-2 hover btn-warning text-dark fs-5'>Add to Cart</Button>
      </div>
    </div>
    ) 
}
export default Detail;


