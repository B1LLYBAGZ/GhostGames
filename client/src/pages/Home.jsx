import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import CarouselComponent from "../components/Carousel/CarouselComponent"; // Import the CarouselComponent
import CalendarComponent from "../components/Calendar/Calendar.jsx"; // Import the CalendarComponent

const Home = () => {
  return (
    <Container className="container">
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
      <CarouselComponent /> {/* Use the CarouselComponent */}
      <CalendarComponent /> {/* Use the CalendarComponent */}
    </Container>
  );
};

export default Home;
