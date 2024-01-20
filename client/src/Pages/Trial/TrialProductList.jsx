import ProductItem from '../Trial/TrialProductItem';
import { useQuery } from '@apollo/client';
import Maker from '../../assets/images/makerPic.png';
import { gql } from "@apollo/client";
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
  const { loading, data } = useQuery(GET_PRODUCTS);

  

  return (
    <div className="my-2">
      <h2>Our Products:</h2>
      {data.products.length ? (
        <div className="flex-row">
          {data.products.map((product) => (
            <ProductItem
              key={product._id}
              _id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}
      {loading ? <img src={Maker} alt="loading" /> : null}
    </div>
  );
}

export default ProductList;
