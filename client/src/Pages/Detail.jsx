import { useEffect, useState } from 'react';
import { gql } from "@apollo/client";
// import Spinner from "../assets/images/spinner.gif";
// import { useStoreContext } from '../../utils/GlobalState';

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
  console.log({ id });
const currentProduct = data?.product || {};
  // Get the userId param from the URL.
  return (
    <div>
      {currentProduct.name}
<h1>{id}</h1>
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

