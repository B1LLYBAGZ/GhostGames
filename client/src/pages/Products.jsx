import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ProductCard from "../components/Products/ProductCard";
import "../App.css"; // Ensure this is the path to your common CSS file

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from an API or define them statically
    const fetchProducts = async () => {
      // Example static data
      const productsData = [
        {
          id: 1,
          name: "Ace of Spades",
          description: "A classic playing card.",
          price: 1.99,
          stock: 10,
          image: "https://via.placeholder.com/150",
        },
        {
          id: 2,
          name: "King of Hearts",
          description: "A royal playing card.",
          price: 2.99,
          stock: 5,
          image: "https://via.placeholder.com/150",
        },
        // Add more products as needed
      ];
      setProducts(productsData);
    };

    fetchProducts();
  }, []);

  return (
    <div className="app">
      <Container className="container">
        <Typography variant="h4" component="h1" gutterBottom>
          Products
        </Typography>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Products;
