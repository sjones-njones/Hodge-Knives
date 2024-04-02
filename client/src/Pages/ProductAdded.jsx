import React from "react";
import { Link } from 'react-router-dom';
import Confetti from 'react-confetti'
import "../Home.css";
const ProductAdded = () => {
  return (
    <div>
      <h1 className="text-white m-5">
        Product Added Successfully
      </h1>
      <Link to='/Admin/AddProducts'>
        <button type="submit" className="btn sizingButton btn-warning btn-lg m-2  fs-4">Add Another Product</button>
      </Link>

      <Link to="/a">
        <button className='btn btn-warning btn-lg m-2 sizingButton fs-4'>Back to Admin</button>
      </Link>
      <Link to="/">
        <button type="button" className="btn btn-warning btn-lg m-2 sizingButton fs-4">Home</button>
      </Link>
<Confetti/>
    </div>

  );
};

export default ProductAdded;


  
