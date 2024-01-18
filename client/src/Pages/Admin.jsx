import React from "react";
import { Link, useLocation } from 'react-router-dom';

import { useMutation, gql } from "@apollo/client";
import giveMeMyStuff from "../decode";
import ProductList from "../Components/ProductList";
import AdminAddProducts from "../Components/AdminAddProducts";
import AdminProductList from "../Components/AdminProductList";

const Admin = () => {
    return (
      <div className="m-4">
        <Link to="/Admin/Inventory"> 
<button type="button" className="w-50 fs-1 m-4 btn btn-light btn-lg btn-block">See Current Inventory</button> 
        </Link>
<br></br>
<Link to="/Admin/AddProducts"> 
<button type="button" className="w-50 fs-1 btn btn-light btn-lg btn-block">Add New Products</button> 
</Link>

<br></br>
<Link to="/Admin/Archive"> 
<button type="button" className="m-4 w-50 fs-1 btn btn-light btn-lg btn-block">See Archived Products</button>  
</Link>

      </div>
        );
};

export default Admin;


