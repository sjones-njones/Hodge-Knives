import { Link } from "react-router-dom";
import { gql } from "@apollo/client";
import { useQuery } from '@apollo/client';

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
function ProductItem(item) {
  const { data } = useQuery(GET_PRODUCTS);

  const {
    image,
    name,
    _id,
  } = item;

  return (
    <div className="card px-1 py-1">
      {data.products.map((product) => (
        <Link to={`/products/${_id}`}        key={product._id}
>
        <img
          alt={name}
          src={`/images/${image}`}
          />
        <p>{name}</p>
      </Link>
        ))
      }
    </div>
  );
}

export default ProductItem;
