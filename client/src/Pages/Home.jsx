import { useState } from "react";
import "../Home.css";
import HomeInfo from "../Components/HomeInfo";
import ProductList from "../Components/ProductList";
import { gql, useQuery } from "@apollo/client";

const Home = () => {
 
  return (
    <div>
      <HomeInfo />
      <ProductList />
    </div>
  );
};

export default Home;
  
 