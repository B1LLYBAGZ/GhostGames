
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useEffect, useState} from 'react';
import emailjs from '@emailjs/browser'


export default function HelperTextAligned() {
  const [formState, setFormState] = useState({customer_name: "", customer_email: "", message:""})

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
    
    const submitHandler = () => {
        e.preventDefault();

        console.log(submitHandler);
        
    }
    
  
  
  
    return (
    <Box
     component="form"
     onSubmit={submitHandler}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <Box

        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '50%',
          marginLeft: 'auto', // Push the form to the right
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
    </Box>
  );
}