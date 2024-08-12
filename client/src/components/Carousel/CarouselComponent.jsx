import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { styled } from "@mui/material/styles";

const CustomPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent !important", // Make the background transparent
  boxShadow: "none !important", // Remove the box shadow
  padding: "20px",
}));

const CarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 750,
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

  return (
    <Box sx={{ mt: 5 }}>
      <CustomPaper>
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
      </CustomPaper>
    </Box>
  );
};

export default CarouselComponent;
