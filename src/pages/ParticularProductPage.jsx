import { Grid } from "@mui/material";
import React from "react";
import { useParams, useLocation } from "react-router-dom";
import TextCard from "../components/TextCard";

const ParticularProductPage = ({ data }) => {
  const location = useLocation();
  const { id } = useParams();
  var ProductDetails = location.state.data;
  console.log("id", id);
  console.log("ProductDetails", ProductDetails);
  return (
    <>
      {ProductDetails === undefined ? (
        "Loading ......"
      ) : (
        <Grid
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginLeft: "0px",
            flexDirection: { xs: "column", sm: "column", md: "column" },
          }}
          container
          spacing={4}
          xs={1}
          sm={1}
          md={10}
        >
          <Grid item xs={6} md={4}>
            <TextCard
              minWidth={400}
              minheight={500}
              title={ProductDetails.title}
            />
          </Grid>
          <Grid item xs={6} md={8}>
            <img
              src={ProductDetails.image}
              alt="iameg"
              loading="lazy"
              height={500}
              width={{ xs: 100 }}
            />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default ParticularProductPage;
