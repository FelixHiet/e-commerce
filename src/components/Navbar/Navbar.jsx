import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
  Icon,
} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/ps.jpg";
import Css from "./Navbar.css";

const Navbar = ({ totalItems }) => {
  const location = useLocation();

  return (
    <div className="test">
      <AppBar position="fixed" className={AppBar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={""}
            color="inherit"
          >
            <img src={logo} alt="Commerce.js" height="25px" className={""} />
            Supercarstore.js
          </Typography>
          <div className={""} />
          {location.pathname === "/" && ( //if not on the mainpage, shopping cart icon wont show up on the navbar
            <div className={""}>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show cart items"
                color="inherit"
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
