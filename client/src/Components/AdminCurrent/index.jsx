
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

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

const GET_AVAILABLEPRODUCTS = gql`
query ProductsAvailable {
  productsAvailable {
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

function AdminProductList() {
  const navigate = useNavigate();
  const [deleteProductMutation] = useMutation(REMOVE_PRODUCTS);

  const { loading, error, data } = useQuery(GET_AVAILABLEPRODUCTS);
  const handleDeleteProduct = (e) => {
    navigate('/productDeleted', { replace: true });
    const { data } = deleteProductMutation({
      variables: { productId: e.target.value }
    });
  }

  const handleUpdateButton = (e) => {
    console.log(e.target.value);
    // navigate(`/updateProduct/${product._id}`, {replace: true});

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
          {data.productsAvailable.map((product) => (
            <Col key={product._id}>
              <Card className='border-warning hover bg-black h-100'>
                <Card.Title className='fs-3 text-white'>{product.name}</Card.Title>
                <Card.Text className='fs-5 text-white'>
                  ${product.price}
                </Card.Text>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Text className='fs-6 text-white'>
                    {product.description}
                  </Card.Text>
                </Card.Body>
                <Button value={product._id} className='btn hover m-1 w-100  btn-warning text-dark fs-5' onClick={handleDeleteProduct}
                >Delete Product</Button>
                <Link className='links' to={`/updateProduct/${product._id}`}>
                  <Button value={product._id} className='btn hover m-1 w-100 btn-warning text-dark fs-5' >Update Product</Button>

                </Link>
                
              </Card>
            </Col>
          ))}
        </Row>
      </div>



      <Link to="/Admin">
        <button className='btn btn-warning btn-lg m-2 mt-4 w-25 fs-4'>Back to Admin Page</button>
      </Link>
      <Link to="/">
        <button type="button" className="btn btn-warning mt-4 btn-lg m-2 w-25 fs-4">Home</button>
      </Link>



    </div>
  );
}


export default AdminProductList;