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


function ProductList() {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  // const [data, setProduct] = useState([]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something has gone terribly wrong</p>;
  }
    return (
      <div>

      <Container>
        <Row>
          {data.products.map((product) => (
            <Col key={product._id} xs={12} md={4} lg={3}>
              <Card className="card bg-black" style={{ width: 300 }}>
 
                <button className=''>Delete Product</button>
                <Card.Img className="card-img-top" src={`/images/${product.image}`}  style={{ width: 275, height: 425 }}
          alt={product.name}/>

                <Card.Body>
                  <Card.Title className='fs-3 text-white'>{product.name}</Card.Title>

                  <Card.Text className='fs-5 text-white'>${product.price}</Card.Text>
                </Card.Body>

              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Link to ="/Admin">
        <button>Back to Admin Page</button>
        </Link>



    </div>
  );
}


export default ProductList;