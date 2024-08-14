import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { useMutation } from '@apollo/client';
import { ADD_TO_CART } from "../../utils/mutations";

const ProductCard = ({ product }) => {
  // Define the mutation hook
  const [addToCart, { data, loading, error }] = useMutation(ADD_TO_CART);

  // Handle the button click event
  const handleAddToCart = async () => {
    try {
      // Call the mutation function with the product ID and a quantity of 1
      const response = await addToCart({
        variables: { productId: product._id, quantity: 1 },
      });
      console.log('Added to cart:', response.data.addToCart);
      // Optionally, handle success (e.g., show a message or update state)
    } catch (err) {
      console.error('Error adding to cart:', err);
      // Optionally, handle error (e.g., show an error message)
    }
  };

  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="h6" color="text.primary">
          ${product.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Stock: {product.stock}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleAddToCart} disabled={loading}>
          {loading ? 'Adding...' : 'Add to Cart'}
        </Button>
        {error && <Typography color="error">Error adding to cart</Typography>}
      </CardActions>
    </Card>
  );
};

export default ProductCard;
