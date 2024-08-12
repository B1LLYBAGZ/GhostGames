import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function HelperTextAligned() {
  return (
    <Box
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
          id="demo-helper-text-aligned"
          label="Your Name"
          fullWidth
          sx={{ marginBottom: 2, width: '35%' }}
        />
        <TextField
          helperText=" "
          id="demo-helper-text-aligned-no-helper"
          label="Your Email"
          fullWidth
          sx={{ marginBottom: 2, width: '35%' }}
        />
        <TextField
          helperText=" "
          id="demo-helper-text-aligned-no-helper"
          label="Your Message"
          multiline
          rows={4} // Adjust the number of rows as needed
          fullWidth
          sx={{ width: '60%', marginBottom: 2 }}
        />
        <Box sx={{ width: 'fit-content' }}>
          <Button variant="contained">Send Message</Button>
        </Box>
      </Box>
    </Box>
  );
}