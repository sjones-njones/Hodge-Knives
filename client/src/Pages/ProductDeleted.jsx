import React from "react";
import { Link } from 'react-router-dom';
import Confetti from 'react-confetti'

const ProductAdded = () => {
   return (
    <div>
      <h1 className="text-white m-5">
        Product Deleted Successfully
      </h1>
              <Link to="/">
          <button type="button" className="btn btn-warning btn-lg btn-secondary m-2 sizingButton fs-4">Home</button>
        </Link>
        <Link to="/a">
        <button className='btn btn-warning btn-lg m-2 sizingButton fs-4'>Back to Admin Page</button>
      </Link>
      <Confetti/>

        </div>
  );
};

export default ProductAdded;