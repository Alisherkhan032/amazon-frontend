import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { sidebarItems } from '../../utils/sidebarItems';

export default function LeftSidebar() {
    const [open, setOpen] = React.useState(false);
  
    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };
  
    // Function to handle click on sidebar items
    const handleOptionClick = (option) => {
      alert(`You clicked on ${option}`);
    };
  
    // Dynamically render the list of sidebar items
    const renderSidebarItems = sidebarItems.map((item, index) => {
      if (item.type === 'heading') {
        return (
          <ListItem key={index} disablePadding>
            <ListItemButton style={{ backgroundColor: item.bgColor }}>
              <ListItemText
                primary={item.text}
                style={{ color: item.textColor, fontWeight: 'bold', fontSize: '1.2rem' }}
              />
            </ListItemButton>
          </ListItem>
        );
      }
  
      if (item.type === 'categoryHeading') {
        return (
          <ListItem key={index} disablePadding>
            <ListItemButton style={{ backgroundColor: '#f0f0f0', paddingLeft: '16px' }}>
              <ListItemText
                primary={item.title}
                style={{ fontWeight: 'bold', color: '#333' }}
              />
            </ListItemButton>
          </ListItem>
        );
      }
  
      return (
        <ListItem key={index} disablePadding>
          <ListItemButton onClick={() => handleOptionClick(item.title)}>
            <ListItemText primary={item.title} />
          </ListItemButton>
        </ListItem>
      );
    });
  
    return (
      <div>
        <Button onClick={toggleDrawer(true)}>Open drawer</Button>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          <Box sx={{ width: 250 }} role="presentation">
            <List>{renderSidebarItems}</List>
            <Divider />
          </Box>
        </Drawer>
      </div>
    );
  }