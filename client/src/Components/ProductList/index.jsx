import { useEffect } from 'react';
import ProductItem from '../ProductItem/index';
import { useStoreContext } from '../../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../../../utils/queries';
import { idbPromise } from '../../../utils/helpers';
import spinner from '../../assets/spinner.gif';
import { gql } from "@apollo/client";

const GET_PRODUCTS = gql`
query Products {
  products {
    _id
    name
    description
    image
    price
      }
}
`;

function ProductList() {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something has gone terribly wrong</p>;
  }
  return (
    <div>
      {data.products.map((product) => (
        <p className="text-white" key={product._id}>
          <div className="card px-1 py-1 bg-black" style={{ width: 350 }}>
            <img className="card-img-top"
              style={{ width: 325, height: 500 }}
              alt={product.name}
              src={`/images/${product.image}`}
            />
            <div className='card-body'>
              <h5 className='card-title text-white'>
                Name: {product.name}</h5>
              {/* <h6 className='card=text text-white'>
                Description:  {product.description}
              </h6> */}
              <h6 className='text-white'>
                Price: ${product.price}
                                </h6>
            </div>
      </div >
        </p>
      ))}
    </div>
);
}

export default ProductList;