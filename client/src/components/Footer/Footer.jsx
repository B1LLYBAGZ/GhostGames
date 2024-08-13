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
import ContactMailIcon from '@mui/icons-material/ContactMail';
import "./Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <Box className="custom-footer" component="footer">
      <Container maxWidth={false} className="footer-container">
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Paper elevation={3} className="footer-paper">
              <Typography variant="h6" gutterBottom>
                Contact Us
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 1 }}>
              <Box sx={{ display: "flex", alignItems: "center", mt: 3, mb: 3 }}>
                <PhoneIcon sx={{ mr: 1 }} />
                <Typography variant="body1">
                  Store Number:{" "}
                  <Link href="tel:+7209551957" color="inherit">
                    +17209551957
                  </Link>
                </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <ContactMailIcon sx={{ mr: 1 }} />
                <Typography variant="body1">
                  
                  <Link href="/Contact" color="inherit">
                  Send a Message
                  </Link>
                </Typography>
              </Box>
              <IconButton
                href="https://www.facebook.com/GhostEventsandGaming"
                target="_blank"
                color="inherit"
              >
                <FacebookIcon style={{ fontSize: 40 }}  />
              </IconButton>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} className="footer-paper">
              <Typography variant="h6" gutterBottom>
                Visit Us
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <LocationOnIcon sx={{ mr: 1 }} />
                <Typography variant="body1">
                  2120 S Holly St #9, Denver, CO 80222
                </Typography>
              </Box>
              <iframe
                title="store-location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12283.02187742133!2d-104.9216058!3d39.6777149!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7d607359343f%3A0x3876c92515834aa7!2sGhost%20Events%20and%20Gaming!5e0!3m2!1sen!2sus!4v1723502531050!5m2!1sen!2sus"
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
