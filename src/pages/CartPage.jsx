import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import CartInfoDrwawer from "../components/CartInfoDrwawer";
import CartPageCard from "../components/CartPageCard";

const CartPage = () => {
  const { cart } = useSelector((state) => state.cart);

  console.log("cart", cart);
  return (
    <Grid
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      padding="62px"
    >
      <CartInfoDrwawer />
      {cart.map((items, index) => (
        <CartPageCard id={items.id} title={items.title} />
      ))}
    </Grid>
  );
};

export default CartPage;
