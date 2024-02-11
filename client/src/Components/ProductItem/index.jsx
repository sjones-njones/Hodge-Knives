import { Link } from "react-router-dom";
// import { pluralize } from "../../utils/helpers"
import { useQuery } from '@apollo/client';
import { gql } from "@apollo/client";
import { GET_PRODUCTS } from '../../../utils/queries'
import { useStoreContext } from "../../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../../utils/actions";
// import { idbPromise } from "../../../utils/helpers";

function ProductItem(item) {
  const { data } = useQuery(GET_PRODUCTS);

  const {
    image,
    name,
    _id,
    price
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