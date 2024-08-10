import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContactMailIcon from '@mui/icons-material/ContactMail';

export default function TemporaryDrawer({ open, onClose }) {
  const handleLinkClick = (path) => {
    // Add logic to navigate to the specified path when a link is clicked
    console.log(`Navigating to: ${path}`);
    // Example: navigate to the path using React Router or any navigation library
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={onClose}>
      <List>
        <ListItem button onClick={() => handleLinkClick('/about')}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button onClick={() => handleLinkClick('/calendar')}>
          <ListItemIcon>
            <EventIcon />
          </ListItemIcon>
          <ListItemText primary="Calendar" />
        </ListItem>
        <ListItem button onClick={() => handleLinkClick('/location')}>
          <ListItemIcon>
            <LocationOnIcon />
          </ListItemIcon>
          <ListItemText primary="Location" />
        </ListItem>
        <ListItem button onClick={() => handleLinkClick('/contact')}>
          <ListItemIcon>
            <ContactMailIcon />
          </ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer open={open} onClose={onClose}>
        {DrawerList}
      </Drawer>
    </div>
  );
}