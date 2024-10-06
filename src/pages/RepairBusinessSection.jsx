import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import RepairBussiness from "../assets/images/RepairBussiness.jpg"; // Replace with actual image path

// Overlay styling for the background image
const Overlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark overlay for better text visibility
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const AppleRepairSection = () => {
  // Create scroll-based parallax effects
  const { scrollY } = useViewportScroll();

  // Apply parallax to the heading and description
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -30]);

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        height: '100vh', // Full viewport height for stickiness
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundImage: `url(${RepairBussiness})`, // Set the image as the background
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'sticky',
        top: 0, // Sticky positioning: this makes the background stick at the top
        zIndex: -1, // Ensure it's behind the content
      }}
    >
      {/* Dark overlay for better contrast */}
      <Overlay>
        <Box
          sx={{
            textAlign: 'center',
            zIndex: 1,
            maxWidth: '600px',
            padding: '16px',
            paddingTop: '50px',
          }}
        >
          {/* Parallax animated heading */}
          <motion.div style={{ y: y1 }}>
            <Typography
              variant="h1"
              sx={{
                color: '#fff',
                fontWeight: 'bold',
                mb: 3,
                fontSize: 'clamp(2rem, 5vw, 4rem)', // Responsive font sizing with clamp()
              }}
            >
              We Fix Your Apple Products.
            </Typography>
          </motion.div>

          {/* Parallax animated description */}
          <motion.div style={{ y: y2 }}>
            <Typography
              variant="body1"
              sx={{
                color: '#fff',
                mb: 4,
                fontSize: 'clamp(1rem, 2vw, 1.5rem)',
              }}
            >
              Expert repair services for all your Apple devices, including iPhones, iPads, and MacBooks.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#fff',
                mb: 4,
                fontSize: 'clamp(1rem, 2vw, 1.5rem)',
              }}
            >
              Our certified technicians ensure that your Apple products are repaired using original components.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#fff',
                mb: 4,
                fontSize: 'clamp(1rem, 2vw, 1.5rem)',
              }}
            >
              Whether it's screen repairs, battery replacement, or fixing water damage, we've got you covered.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#fff',
                mb: 4,
                fontSize: 'clamp(1rem, 2vw, 1.5rem)',
              }}
            >
              Fast and reliable service that restores your device's performance, just like new.
            </Typography>
          </motion.div>

          {/* Parallax animated button */}
          <motion.div style={{ y: y2 }}>
            <Button
              variant="contained"
              aria-label="Learn more about our Apple product repair services" // Accessibility enhancement
              sx={{
                backgroundColor: '#00D100',
                color: '#fff',
                padding: '12px 24px',
                fontWeight: 'bold',
                '&:hover': { backgroundColor: '#00A800' },
              }}
              href="/apple-repair-services" // Ensure this links to a relevant internal page
            >
              Learn More
            </Button>
          </motion.div>
        </Box>
      </Overlay>
    </Box>
  );
};

export default AppleRepairSection;
