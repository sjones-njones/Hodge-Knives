import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

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
import { Card, Row, Col, Container } from "react-bootstrap";
// import { name } from '@cloudinary/url-gen/actions/namedTransformation';

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


function ProductList(item) {
  const {
    image,
    name,
    _id,
  } = item;

  const { loading, error, data } = useQuery(GET_PRODUCTS);

  // const [data, setProduct] = useState([]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something has gone terribly wrong</p>;
  }
console.log(data);
  for (let i=0; i < data.length; i++) {
    console.log(i);
  }

  return (
    <div>
      <Row xs={12} sm={8} md={3} lg={4} className="m-1 g-4">
        {data.products.map((product) => (
          <Col key={product._id} _id={product._id}
          >
            <Link className='links' to={`/products/${product._id}`}>
              <Card className='border-warning hover bg-black h-100'>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title className='fs-3 text-white'>{product.name}</Card.Title>
                  <Card.Text className='fs-5 text-white'>
                    ${product.price}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div >
  );
}


export default ProductList;