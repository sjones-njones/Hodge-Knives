import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { GET_ARCHIVEPRODUCTS } from '../../../utils/queries';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col } from "react-bootstrap";
// import { name } from '@cloudinary/url-gen/actions/namedTransformation';

function ArchiveProductList(item) {
  const {
    image,
    name,
    _id,
  } = item;

  const { loading, error, data } = useQuery(GET_ARCHIVEPRODUCTS);

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
        {data.productsArchive.map((product) => (
          <Col key={product._id} _id={product._id}
          >
            <Link className='links' to={`/archiveProducts/${product._id}`}>
              <Card className='border-warning hover bg-black h-100'>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title className='fs-3 text-white'>{product.name}</Card.Title>
                                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div >
  );
}


export default ArchiveProductList;