import React from "react";
import { Link } from 'react-router-dom';

const ProductAdded = () => {
   return (
    <div>
      <h1 className="text-white m-5">
        Product Added Successfully
      </h1>
      <Link to='/Admin/AddProducts'>
        <button type="submit" className="btn btn-warning btn-lg btn-secondary m-2 w-25 fs-4">Add Another Product</button>
        </Link>
        <Link to="/">
          <button type="button" className="btn btn-warning btn-lg btn-secondary m-2 w-25 fs-4">Home</button>
        </Link>
        </div>
  );
};

export default ProductAdded;