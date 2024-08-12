// import * as React from 'react';
import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import TemporaryDrawer from "./TemporaryDrawer";
import "./Navbar.css"; // Import the CSS file

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer((prevOpen) => !prevOpen);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="navbar">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <img
            src="../../img/newLogo.png"
            alt="Logo"
            style={{ width: "200px", height: "auto" }}
          />
          <Typography
            variant="h1"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              fontSize: "30px",
            }}
          >
            {/* Ghost Events and Gaming */}
          </Typography>
          {/* {isLoggedIn ? (
            <>
              <Button variant="text" color="inherit" onClick={handleLogout}>
                Logout
              </Button>
              <IconButton color="inherit" aria-label="add to shopping cart">
                <AddShoppingCartIcon />
              </IconButton>
            </>
          ) : (
            <Button variant="text" color="inherit" onClick={handleLogin}>
              Login
            </Button>
          )} */}
          <Button variant="text" color="inherit">
            Login
          </Button>
          <Button variant="text" color="inherit">
            Logout
          </Button>
          <IconButton color="inherit" aria-label="add to shopping cart">
            <AddShoppingCartIcon />
          </IconButton>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
      </AppBar>
      <TemporaryDrawer open={openDrawer} onClose={toggleDrawer} />
    </Box>
  );
}
