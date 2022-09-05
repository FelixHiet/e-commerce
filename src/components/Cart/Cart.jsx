import React from "react";
import { Container, Typography, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import CartItem from "./CartItem/CartItem";

const Cart = ({
  cart,
  handleUpdateCartQty,
  handleRemoveFromCart,
  handleEmptyCart,
}) => {
  const EmptyCart = () => {
    return (
      <Typography variant="subtitle1">
        You have no items in your shopping cart.{" "}
        <Link to="/" className="">
          Please add some
        </Link>
      </Typography>
    );
  };

  /*const EmptyCart = () => (
    <Typography variant="subtitle1">
      You have no items in your shopping cart.
      <Link to="/" className="">
        Please add some
      </Link>
      !
    </Typography>
  );*/

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem
              item={item}
              onUpdateCartQty={handleUpdateCartQty}
              onRemoveFromCart={handleRemoveFromCart}
            />
          </Grid>
        ))}
      </Grid>
      <div className="">
        <Typography variant="h4">
          Subtotal: {cart.subtotal.formatted_with_symbol}
          <div>
            <Button
              className=""
              size="large"
              type="button"
              variant="contained"
              color="secondary"
              onClick={handleEmptyCart}
            >
              Empty Cart
            </Button>

            <Button
              component={Link}
              to="/checkout"
              className=""
              size="large"
              type="button"
              variant="contained"
              color="primary"
            >
              Checkout
            </Button>
          </div>
        </Typography>
      </div>
    </>
  );

  if (!cart.line_items) return "Loading ...";

  return (
    <Container>
      <div className="" />
      <Typography className="" variant="h3" gutterBottom>
        Your shopping cart
      </Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
