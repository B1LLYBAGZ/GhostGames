import React from 'react';
import {
  Container, Grid, Card, CardContent, Typography, Button, Divider, IconButton,
} from '@mui/material';
import { Add, Remove, Delete } from '@mui/icons-material';

const CartPage = () => {
  const cartItems = [];

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Shopping Cart
      </Typography>
      <Grid container spacing={3}>
        {cartItems.map((item) => (
          <Grid item xs={12} key={item.id}>
            <Card>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Typography variant="h6">{item.name}</Typography>
                  </Grid>
                  <Grid item xs={6} display="flex" justifyContent="flex-end">
                    <IconButton size="small">
                      <Remove />
                    </IconButton>
                    <Typography variant="h6">$ {item.price}</Typography>
                    <IconButton size="small">
                      <Add />
                    </IconButton>
                    <IconButton size="small" color="error">
                      <Delete />
                    </IconButton>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Divider style={{ margin: '20px 0' }} />
      <Typography variant="h6" align="right">
        Total: ${total}
      </Typography>
      <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
        Proceed to Checkout
      </Button>
    </Container>
  );
};

export default CartPage;
