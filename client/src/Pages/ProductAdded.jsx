import React from "react";
import { Link } from 'react-router-dom';
import Confetti from 'react-confetti'

const ProductAdded = () => {
  return (
    <div>
      <h1 className="text-white m-5">
        Product Added Successfully
      </h1>
      <Link to='/Admin/AddProducts'>
        <button type="submit" className="btn btn-warning btn-lg m-2 w-25 fs-4">Add Another Product</button>
      </Link>

      <Link to="/Admin">
        <button className='btn btn-warning btn-lg m-2 w-25 fs-4'>Back to Admin</button>
      </Link>
      <Link to="/">
        <button type="button" className="btn btn-warning btn-lg m-2 w-25 fs-4">Home</button>
      </Link>
<Confetti/>
    </div>

  );
};

export default ProductAdded;


  
