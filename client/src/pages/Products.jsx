import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ProductCard from "../components/Products/ProductCard.jsx";
import productsData from "../../../server/seeders/productSeeds.json"; // Import the JSON data
import "../App.css"; // Ensure this is the path to your common CSS file
import { useLocation } from "react-router-dom";
import Typography from "@mui/material/Typography"; // Import Typography

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Products = () => {
  const [products, setProducts] = useState([]);
  const query = useQuery();
  const searchQuery = query.get("search") || "";

  useEffect(() => {
    // Filter products based on search query
    const filteredProducts = productsData.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setProducts(filteredProducts);
  }, [searchQuery]);

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
