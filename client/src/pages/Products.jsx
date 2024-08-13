import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ProductCard from "../components/Products/ProductCard";
import Typography from "@mui/material/Typography"; // Import Typography
import productsData from "../../../server/seeders/productSeeds.json"; // Import the JSON data
import "../App.css"; // Ensure this is the path to your common CSS file

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Set the products state with the imported JSON data
    setProducts(productsData);
  }, []);

  return (
    <div className="app">
      <Container className="container">
        <Typography variant="h4" component="h1" gutterBottom>
          Products
        </Typography>
        <Grid container spacing={3}>
          {products.map((product, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Products;
