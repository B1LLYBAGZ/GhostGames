import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import emailjs from "@emailjs/browser";
import { validateEmail } from "../utils/helpers";
import "../App.css";

export default function Contact() {
  const [formState, setFormState] = useState({
    customer_name: "",
    customer_email: "",
    message: "",
  });

  useEffect(() => {
    emailjs.init({
      publicKey: "SeZxjP3mvHzojzQvf",
      blockHeadless: true,
      limitRate: {
        id: "app",
        throttle: 10000,
      },
    });
  }, []);

  const changeHandler = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    setFormState({ ...formState, [inputType]: inputValue });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!validateEmail(formState.customer_email) || !formState.message) {
      console.log("Email and message are required");
      return;
    }
    emailjs.send("service_gz74o9s", "template_ea19oe4", formState);
    console.log("Email successfully sent");
    setFormState({ customer_name: "", customer_email: "", message: "" });
  };

  return (
    <div className="app">
      <Container className="container">
        <Box
          component="form"
          onSubmit={submitHandler}
          sx={{
            textAlign: "center",
            mt: 5,
          }}
        >
          <TextField
            helperText=" "
            value={formState.customer_name}
            name="customer_name"
            onChange={changeHandler}
            id="demo-helper-text-aligned"
            label="Your Name"
            fullWidth
            sx={{ marginBottom: 2, width: "35%" }}
          />
          <TextField
            helperText=" "
            value={formState.customer_email}
            name="customer_email"
            onChange={changeHandler}
            id="demo-helper-text-aligned-no-helper"
            label="Your Email"
            fullWidth
            sx={{ marginBottom: 2, width: "35%" }}
          />
          <TextField
            helperText=" "
            value={formState.message}
            name="message"
            onChange={changeHandler}
            id="demo-helper-text-aligned-no-helper"
            label="Your Message"
            multiline
            rows={4}
            fullWidth
            sx={{ width: "60%", marginBottom: 2 }}
          />
          <Box sx={{ width: "fit-content" }}>
            <Button variant="contained" type="submit">
              Send Message
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
