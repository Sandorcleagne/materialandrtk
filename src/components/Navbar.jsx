import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Stack } from "@mui/system";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Fake Shop
          </Typography>
          {/* <Stack sx={{ display: "flex", justifyContent: "center" }}> */}
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "30px",
            }}
          >
            <Stack>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "white",
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                Login
              </Button>
            </Stack>
            <Stack>
              <Link
                to="/ProductCart"
                style={{ textDecoration: "None", color: "white" }}
              >
                <Badge badgeContent={0} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </Link>
            </Stack>
          </Grid>

          {/* </Stack> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
