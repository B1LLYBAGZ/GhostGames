
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useEffect, useState} from 'react';
import emailjs from '@emailjs/browser'
import { validateEmail } from '../utils/helpers';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ContactForm() {
  const [formState, setFormState] = useState({customer_name: "", customer_email: "", message:""})
  const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect (() => {
        emailjs.init({
            publicKey: 'SeZxjP3mvHzojzQvf',
            // Do not allow headless browsers
            blockHeadless: true,
            // blockList: {
            //   // Block the suspended emails
            //   list: ['foo@emailjs.com', 'bar@emailjs.com'],
            //   // The variable contains the email address
            //   watchVariable: 'userEmail',
            // },
            limitRate: {
              // Set the limit rate for the application
              id: 'app',
              // Allow 1 request per 10s
              throttle: 10000,
            },
          });
    }, []) 
    
    const changeHandler = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'customer_name') {
            setFormState ({...formState, customer_name: inputValue})
        } else if (inputType === 'customer_email') {
            setFormState ({...formState, customer_email: inputValue})
        } else {
            setFormState ({...formState, message: inputValue})
        }
        console.log(formState);
        
    } 
    
    const submitHandler = (e) => {
        e.preventDefault();
if (!validateEmail(formState.customer_email) || !formState.message) {
 console.log("Email and message are required");

 return;
}
emailjs.send("service_gz74o9s", "template_ea19oe4", formState);  
        console.log("Email successfully sent");
        setIsModalOpen(true);
        setFormState({customer_name: "", customer_email: "", message:""})
    };
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
  
  
    return (
      <>
      <Container className="container">
    <Box
     component="form"
     onSubmit={submitHandler}
      sx={{
        textAlign: 'center',
        mt: 5
        // display: 'flex',
        // flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent: 'center',
        // width: '100%',
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
          sx={{ marginBottom: 2, width: '35%' }}
        />
        <TextField
          helperText=" "
          value={formState.customer_email}
          name="customer_email"
          onChange={changeHandler}
          id="demo-helper-text-aligned-no-helper"
          label="Your Email"
          fullWidth
          sx={{ marginBottom: 2, width: '35%' }}
        />
        <TextField
          helperText=" "
          value={formState.message}
          name="message"
          onChange={changeHandler}
          id="demo-helper-text-aligned-no-helper"
          label="Your Message"
          multiline
          rows={4} // Adjust the number of rows as needed
          fullWidth
          sx={{ width: '60%', marginBottom: 2 }}
        />
        <Box sx={{ width: 'fit-content' }}>
          <Button variant="contained" type="submit">Send Message</Button>
        </Box>
      </Box>
     
      </Container>
      {/* Modal component */}
      <Modal
        open={isModalOpen}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            Message Sent Successfully!
          </Typography>
          <Typography sx={{ mt: 2 }}>
            We will get back to you as soon as possible.
          </Typography>
          <Button onClick={closeModal}>Close</Button>
        </Box>
      </Modal>
      </>
  );
}