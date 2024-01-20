import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// import ProductItem from '../ProductItem/index';
import { useStoreContext } from '../../../utils/GlobalState';
// import { UPDATE_PRODUCTS } from '../../../utils/actions';
import { useQuery } from '@apollo/client';
// import { QUERY_PRODUCTS } from '../../../utils/queries';
// import { idbPromise } from '../../../utils/helpers';
// import spinner from '../../assets/spinner.gif';
import { gql } from "@apollo/client";
import Maker from '../../assets/images/makerPic.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col, Container, Button } from "react-bootstrap";
// import { name } from '@cloudinary/url-gen/actions/namedTransformation';
import { useMutation } from '@apollo/client';

const GET_PRODUCTS = gql`
query Products {
  products {
    _id
    name
    description
    price
    quantity
    image
    category 
  }
}
`;
const REMOVE_PRODUCTS = gql`
mutation RemoveProduct($productId: ID!) {
  removeProduct(productId: $productId) {
    name
  }
}
`

function ProductList() {
  const [deleteProductMutation] = useMutation(REMOVE_PRODUCTS);
  
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  const handleDeleteProduct = (e) => {
    console.log(e.target.value);
    const { data } = deleteProductMutation ({
      variables:  { productId: e.target.value } 
    });
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something has gone terribly wrong</p>;
  }
  return (
    <div>
      <div>
        <Row xs={12} sm={8} md={3} lg={4} className="g-4 mt-2">
          {data.products.map((product) => (
            <Col key={product._id}>
              <Card className='border-warning hover bg-black h-100'>
                <Card.Title className='fs-3 text-white'>{product.name}</Card.Title>
                <Card.Text className='fs-5 text-white'>
                  ${product.price}
                </Card.Text>
                <Card.Img variant="top" src={`/images/${product.image}`} />
                <Card.Body>
                  <Card.Text className='fs-6 text-white'>
                    {product.description}
                  </Card.Text>
                </Card.Body>
                <Button value={product._id}className='btn hover m-1 btn-sm btn-warning text-dark fs-5'                         onClick={handleDeleteProduct}
>Delete Product</Button>
                <Button className='btn hover m-1 btn-sm btn-warning text-dark fs-5'>Update Product</Button>
              </Card>
            </Col>
          ))}
        </Row>
      </div>


      
      <Link to="/Admin">
        <button className='btn btn-lg btn-warning m-3'>Back to Admin Page</button>
      </Link>



    </div>
  );
}


export default ProductList;