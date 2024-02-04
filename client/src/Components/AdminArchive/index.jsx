import { Link, useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_ARCHIVEPRODUCTS, REMOVE_PRODUCTS } from '../../../utils/queries';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col, Button } from "react-bootstrap";
import { useMutation } from '@apollo/client';

function AdminArchive() {
  const navigate = useNavigate();
  const [deleteProductMutation] = useMutation(REMOVE_PRODUCTS);

  const { loading, error, data } = useQuery(GET_ARCHIVEPRODUCTS);
  const handleDeleteProduct = (e) => {
    navigate('/productDeleted', {replace: true});
    const { data } = deleteProductMutation({
      variables: { productId: e.target.value }
    });
  }

  const handleUpdateButton = (e) => {
    console.log(e.target.value);
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
          {data.productsArchive.map((product) => (
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
                <Button value={product._id} className='btn hover m-1 w-100 btn-warning text-dark fs-5' onClick={handleUpdateButton}>Update Product</Button>
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


export default AdminArchive;

