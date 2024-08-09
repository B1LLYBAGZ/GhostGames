import React from "react";
import { Container, Typography, Button, Box, Grid, Paper } from "@mui/material";

const Home = () => {
  return (
    <Container>
      <Box sx={{ textAlign: "center", mt: 5 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to My Website
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          This is a basic home page styled with MUI.
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 3 }}>
          Get Started
        </Button>
      </Box>
      <Grid container spacing={4} sx={{ mt: 5 }}>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 2, textAlign: "center" }}>
            <Typography variant="h6" component="h3" gutterBottom>
              Feature 1
            </Typography>
            <Typography>
              Description of feature 1. This is a brief description to give
              users an idea of what this feature is about.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 2, textAlign: "center" }}>
            <Typography variant="h6" component="h3" gutterBottom>
              Feature 2
            </Typography>
            <Typography>
              Description of feature 2. This is a brief description to give
              users an idea of what this feature is about.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 2, textAlign: "center" }}>
            <Typography variant="h6" component="h3" gutterBottom>
              Feature 3
            </Typography>
            <Typography>
              Description of feature 3. This is a brief description to give
              users an idea of what this feature is about.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
