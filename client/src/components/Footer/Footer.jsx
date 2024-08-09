import React from "react";
import {
  Box,
  Container,
  Typography,
  Link,
  IconButton,
  Grid,
  Paper,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Footer = () => {
  return (
    <Box
      sx={{ bgcolor: "primary.main", color: "white", py: 6, width: "100%" }}
      component="footer"
    >
      <Container maxWidth={false}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              sx={{ p: 2, bgcolor: "primary.dark", color: "white" }}
            >
              <Typography variant="h6" gutterBottom>
                Contact Us
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <PhoneIcon sx={{ mr: 1 }} />
                <Typography variant="body1">
                  Store Number:{" "}
                  <Link href="tel:+1234567890" color="inherit">
                    +1 (234) 567-890
                  </Link>
                </Typography>
              </Box>
              <IconButton
                href="https://www.facebook.com/yourstore"
                target="_blank"
                color="inherit"
              >
                <FacebookIcon />
              </IconButton>
            </Paper>
          </Grid>
          <Grid item xs={12} md={8}>
            <Paper
              elevation={3}
              sx={{ p: 2, bgcolor: "primary.dark", color: "white" }}
            >
              <Typography variant="h6" gutterBottom>
                Visit Us
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <LocationOnIcon sx={{ mr: 1 }} />
                <Typography variant="body1">
                  1234 Your Store Address, City, State, ZIP
                </Typography>
              </Box>
              <iframe
                title="store-location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0864873153!2d-122.419415484681!3d37.7749292797596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sYour%20Store%20Address!5e0!3m2!1sen!2sus!4v1616161616161!5m2!1sen!2sus"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
