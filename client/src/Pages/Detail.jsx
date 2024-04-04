import { gql } from "@apollo/client";
import { Button } from "react-bootstrap";
import SingleProductDetail from '../Components/SingleProductDetail';
import { Link, useParams } from 'react-router-dom';
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
          <Button className='sizingButtons btn m-2 hover btn-warning text-dark fs-5'>Back to Shop</Button>
        </Link>
        <Link to={`/Order/${currentProduct._id}`}>
        <Button value='' className='sizingButtons btn m-2 hover btn-warning text-dark fs-5'>Order Now</Button>
        </Link>
      </div>
    </div>
    ) 
}
export default Detail;


