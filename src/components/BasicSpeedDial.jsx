import * as React from 'react';
import Box from '@mui/material/Box';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function BasicDialer() {
  const iconStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    height: 56,
    width: 56,
    cursor: 'pointer',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
    marginBottom: '10px', // Space between icons
  };

  return (
    <Box sx={{ position: 'fixed', bottom: 16, right: 16, display: 'flex', flexDirection: 'column',zIndex:2 }}>
      <Box
        sx={{ ...iconStyle, bgcolor: 'black', color: 'white' }}
        onClick={() => window.open('tel:+911234567890')} // Replace with your phone number
      >
        <PhoneIcon sx={{ color: 'white' }} />
      </Box>
      <Box
        sx={{ ...iconStyle, bgcolor: '#25D366', color: 'white' }}
        onClick={() => window.open('https://wa.me/7045492122')} // Replace with your WhatsApp number
      >
        <WhatsAppIcon sx={{ color: 'white' }} />
      </Box>
    </Box>
  );
}
