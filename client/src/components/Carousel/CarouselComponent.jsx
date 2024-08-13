import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { styled } from "@mui/material/styles";
import productsData from "../../../../server/seeders/productSeeds.json"; // Import the JSON data

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

  // Limit the products to 5
  const limitedProducts = productsData.slice(0, 5);

  return (
    <Box sx={{ mt: 5 }}>
      <CustomPaper>
        <Slider {...settings}>
          {limitedProducts.map((product) => (
            <Box key={product.name} sx={{ p: 2 }}>
              <Paper elevation={3} sx={{ p: 2, textAlign: "center" }}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: "100%", height: "auto" }}
                />
                <Typography variant="h6" component="h3" gutterBottom>
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
              </Paper>
            </Box>
          ))}
        </Slider>
      </CustomPaper>
    </Box>
  );
};

export default CarouselComponent;
