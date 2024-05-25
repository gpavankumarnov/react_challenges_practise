import React, { useState, useEffect, lazy } from "react";
import Header from "../components/Header/Header";
import { fetchProducts } from "../Redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import ProductsList from "../components/ProductsList";
import styled from "styled-components";

const UL = styled.ul`
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 2rem;
height:  50vh;
`


const HomePage = () => {
 
  const dispatch = useDispatch();


  useEffect(() => {
    console.log("hello useEffect")
    dispatch(fetchProducts());
  }, []);
 
  // const Products = useSelector((state) => state.products.product);  // [{},{}]
 
  // console.log("products are", Products)

  return (
    <div className="wrapper">
      <Header />
     
       <ProductsList />
     
 
   
   
    </div>
  );
};

export default HomePage;
