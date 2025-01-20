import React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { sidebarItems } from '../../utils/sidebarItems';

const LeftSidebar = ({ isOpen, onClose }) => {
  const renderSidebarItems = sidebarItems.map((item, index) => {
    if (item.type === 'heading') {
      return (
        <li key={index} className={`py-3 px-4 ${item.bgColor}`}>
          <span className={`text-lg font-bold ${item.textColor}`}>
            {item.text}
          </span>
        </li>
      );
    }
  
    return (
      <li key={index} className="py-2 px-4 hover:bg-gray-100 transition-colors">
        <button className="w-full text-left">
          {item.title}
        </button>
      </li>
    );
  });
  

  return (
    <Drawer 
      open={isOpen} 
      onClose={onClose}
      anchor="left"
      PaperProps={{
        sx: {
          backgroundColor: '#fff', // Sidebar background
          color: '#000',
          padding : 0,
          margin : 0
        },
      }}
      BackdropProps={{
        sx: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)', // Darker background
        },
      }}
    >
      <Box sx={{ width: 350 }} disablePadding >
        <List disablePadding >
          {renderSidebarItems}
        </List>
      </Box>
    </Drawer>
  );
};

export default LeftSidebar;