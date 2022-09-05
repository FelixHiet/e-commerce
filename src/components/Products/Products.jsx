import React from "react";
import { Grid } from "@mui/material";

import Product from "./Product/Product";

const Products = ({ products, onAddToCart }) => {
  return (
    <main className={""}>
      <div className={""} />
      <Grid container justify="center" spacing="4">
        {products.map((product) => (
          <Grid item key="product.id" xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;

/*

const products = [
  {
    id: 1,
    name: "Shoes",
    description: "Running shoes.",
    price: "$50",
    image:
      "https://static.nike.com/a/images/t_default/57dd56da-b069-4c63-bece-4810c1067215/air-zoom-pegasus-39-mens-road-running-shoes-d4dvtm.png",
  },
  {
    id: 2,
    name: "Macbook",
    description: "Apple macbook",
    price: "$999",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-gallery3-20201110?wid=4000&hei=3072&fmt=jpeg&qlt=90&.v=1632937845000",
  },
];

*/
