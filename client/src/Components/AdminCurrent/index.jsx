
import { Link, useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_AVAILABLEPRODUCTS, REMOVE_PRODUCTS } from '../../../utils/queries';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col, Button } from "react-bootstrap";
import { useMutation } from '@apollo/client';

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
                <Link className='links' to={`/updateProduct/${product._id}`}>
                  <Button value={product._id} className='btn hover m-1 w-100 btn-warning text-dark fs-5' >Update Product</Button>
                </Link>
                
                <Button value={product._id} className='btn hover m-1 w-100  btn-warning text-dark fs-5' onClick={handleDeleteProduct}
                >Delete Product</Button>
                
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <Link to="/Admin">
        <button className="w-50 fs-3 m-2 btn btn-warning btn-block">Back to Admin Page</button>
      </Link>
      <Link to="/">
      <button className="w-50 fs-3 m-2 btn btn-warning btn-block">Home</button>
      </Link>
    </div>
  );
}


export default AdminProductList;