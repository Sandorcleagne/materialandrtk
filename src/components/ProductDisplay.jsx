import { Grid, CardActionArea, CircularProgress, Stack } from "@mui/material";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useGetAllProductsQuery } from "../services/product";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import { useSearchParams } from "react-router-dom";

const ProductDisplay = () => {
  const responseData = useGetAllProductsQuery();
  const { data, error, isLoading } = responseData;
  console.log(responseData);
  const dispatch = useDispatch();
  const handleAddToCart = (items) => {
    dispatch(addToCart(items));
  };

  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {error ? (
          <Typography>{error.error}</Typography>
        ) : isLoading ? (
          <CircularProgress />
        ) : (
          data.map((items, index) => {
            return (
              <Grid mt={5} item xs={6} sm={4} md={3} key={index} ml={15}>
                <Card sx={{ maxWidth: 260, maxHeight: 500 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={items.image}
                      alt="green iguana"
                      sx={{
                        height: "200px",
                        width: "150px",
                        margin: "auto",
                      }}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" noWrap>
                        {items.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" noWrap>
                        {items.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>

                  <Button
                    size="small"
                    color="primary"
                    onClick={() => handleAddToCart(items)}
                  >
                    Add to cart
                  </Button>
                </Card>
              </Grid>
            );
          })
        )}
      </Grid>
    </>
  );
};

export default ProductDisplay;
