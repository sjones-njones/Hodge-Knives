import { useState } from "react";
import "../Home.css";
import HomeInfo from "../Components/HomeInfo";
import AvailableProductList from "../Components/AvailableProductList";
import { gql, useQuery } from "@apollo/client";

const Home = () => {
 
  return (
    <div>
      <HomeInfo />
      <AvailableProductList />
    </div>
  );
};

export default Home;
  
 