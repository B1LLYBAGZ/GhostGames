import React from "react";
import { Container, Typography, Button, Box, Grid, Paper } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const cards = [
    { id: 1, name: "Pikachu", image: "path/to/pikachu.jpg" },
    { id: 2, name: "Charizard", image: "path/to/charizard.jpg" },
    { id: 3, name: "Blue-Eyes White Dragon", image: "path/to/blue-eyes.jpg" },
    { id: 4, name: "Dark Magician", image: "path/to/dark-magician.jpg" },
    // Add more cards as needed
  ];

  const localizer = momentLocalizer(moment);

  const events = [
    {
      title: "Pokémon Tournament",
      start: new Date(2023, 9, 10, 10, 0), // Year, Month (0-indexed), Day, Hour, Minute
      end: new Date(2023, 9, 10, 12, 0),
    },
    {
      title: "Yu-Gi-Oh! Duel",
      start: new Date(2023, 9, 11, 14, 0),
      end: new Date(2023, 9, 11, 16, 0),
    },
    // Add more events as needed
  ];

  return (
    <Container className="container">
      <Box sx={{ textAlign: "center", mt: 5 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Ghost Events and Gaming
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          This is a basic home page styled with MUI.
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 3 }}>
          Get Started
        </Button>
      </Box>
      <Box sx={{ mt: 5 }}>
        <Slider {...settings}>
          {cards.map((card) => (
            <Box key={card.id} sx={{ p: 2 }}>
              <Paper elevation={3} sx={{ p: 2, textAlign: "center" }}>
                <img
                  src={card.image}
                  alt={card.name}
                  style={{ width: "100%", height: "auto" }}
                />
                <Typography variant="h6" component="h3" gutterBottom>
                  {card.name}
                </Typography>
              </Paper>
            </Box>
          ))}
        </Slider>
      </Box>
      <Box sx={{ mt: 5 }}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h6" component="h3" gutterBottom>
            Shop Events This Week
          </Typography>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
          />
        </Paper>
      </Box>
    </Container>
  );
};

export default Home;
