import React from 'react';
import { Box, Typography, Link, Grid } from '@mui/material';
import { styled } from '@mui/system';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#1e1e1e',
  color: '#fff',
  padding: theme.spacing(4),
  textAlign: 'center',
  position: 'relative',
  bottom: 0,
  width: '100%',
}));

const SocialMediaIcons = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  display: 'flex',
  justifyContent: 'center',
  '& > *': {
    margin: theme.spacing(1),
  },
}));

const Footer = () => {
  return (
    <FooterContainer>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            Quick Links
          </Typography>
          <Link href="/" color="inherit" sx={{ display: 'block', mb: 1 }}>
            Home
          </Link>
          <Link href="/services" color="inherit" sx={{ display: 'block', mb: 1 }}>
            Services
          </Link>
          <Link href="/about" color="inherit" sx={{ display: 'block', mb: 1 }}>
            About Us
          </Link>
          <Link href="/contact" color="inherit" sx={{ display: 'block', mb: 1 }}>
            Contact
          </Link>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            Contact Us
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Email: contact@yourservice.com
          </Typography>
          <Typography variant="body2">
            Phone: +91 12345 67890
          </Typography>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            Follow Us
          </Typography>
          <SocialMediaIcons>
            <Link href="https://www.facebook.com" target="_blank" color="inherit">
              <Facebook />
            </Link>
            <Link href="https://www.twitter.com" target="_blank" color="inherit">
              <Twitter />
            </Link>
            <Link href="https://www.instagram.com" target="_blank" color="inherit">
              <Instagram />
            </Link>
            <Link href="https://www.linkedin.com" target="_blank" color="inherit">
              <LinkedIn />
            </Link>
          </SocialMediaIcons>
        </Grid>
      </Grid>

      <Typography variant="body2" sx={{ marginTop: 2 }}>
        © {new Date().getFullYear()} Your Company Name. All rights reserved.
      </Typography>
    </FooterContainer>
  );
};

export default Footer;
