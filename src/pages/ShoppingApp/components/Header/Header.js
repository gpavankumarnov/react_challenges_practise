import React from "react";
import { BsCartCheckFill } from "react-icons/bs";
import { useSelector } from "react-redux";



const Header = () => {



  const CartCount = useSelector(state => state.cartsList.cartsList.length)

  console.log("CartCount", CartCount)



  return (
    <div className="d-flex justify-content-between align-items-center p-2">
      <div className="container bg-dark text-white text-center fs-2">
        Shopify
      </div>

      <BsCartCheckFill className="fs-1" />
      <div className="fs-4 ">{CartCount && CartCount}</div>
    </div>
  );
};

export default Header;
