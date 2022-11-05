import React from "react";
import { useSelector } from "react-redux";
import LoadingComponent from "../components/LoadingComponent";

const CartPage = () => {
  const { cart, cartQty } = useSelector((state) => state.cart);
  console.log("cart", cart);
  console.log("cartQty", cartQty);
  return (
    <div>
      <LoadingComponent />
    </div>
  );
};

export default CartPage;
