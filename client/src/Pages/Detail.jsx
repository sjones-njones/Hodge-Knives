import { useEffect, useState } from 'react';
import { gql } from "@apollo/client";
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
  // Get the userId param from the URL.
  return (
    <div className="row justify-content-center">
    <Card className='m-5 w-75 border-warning bg-black'>
        <Card.Title className='fs-1 mb-5 text-white'>{currentProduct.name}</Card.Title>
                <Card.Img className="w-50 mx-auto" variant="top" src={`/images/${currentProduct.image}`} />
                <Card.Body>
                  <Card.Text className='fs-4 text-white'>
                    {currentProduct.description}
                  </Card.Text>
                <Card.Text className='fs-3 text-white'>
                  ${currentProduct.price}
                </Card.Text>
                </Card.Body>
                <Button className='btn hover m-1 w-25 btn-warning text-dark fs-5'>Add to Cart</Button>
                <Link to={ `/Shop`
                } 
                  > 
                  <Button className='btn hover m-1 w-25 btn-warning text-dark fs-5'>Back to Shop</Button>
                </Link>
              </Card>
    </div>
  );
}
export default Detail;
// function Detail() {
//   // const [state] = useStoreContext();

//   const { id } = useParams();

//   const [currentProduct, setCurrentProduct] = useState({});

//   const { product } = useQuery(QUERY_PRODUCTS);

//   // const { products } = state;

//   // const { product } = state;
// if (product) {
//   setCurrentProduct(product.findOne((product) => product._id === id));
// }
//    return (
//     <>
//       {currentProduct? (
//         <div className="container my-1">
//           <Link to="/">← Back to Products</Link>

//           <h2>{currentProduct.name}</h2>

//           <p>{currentProduct.description}</p>
//           <img
//             src={`/images/${currentProduct.image}`}
//             alt={currentProduct.name}
//           />
//          <h1>
//           {`/name/${currentProduct._id}`}
          
//           </h1> 
//         </div>
//       ) : null}
      
//     </>
//   );
// }

