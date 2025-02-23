import React, { useRef } from 'react';
import { Button, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import { motion, useScroll, useTransform } from 'framer-motion';
import RepairBussiness from "../assets/images/RepairBussiness.webp"; // Replace with actual image path
import RepairBusinessVideo from "../assets/video/pix.mp4"; // Replace with actual image path

// If using React Router, uncomment the next line
// import { Link as RouterLink } from 'react-router-dom';

// Styled Overlay for the background image
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
  zIndex: 2, // Ensure it's above the background
}));

// Motion-enhanced Box for the background
const MotionBackground = motion(Box);

const AppleRepairSection = () => {
  const sectionRef = useRef(null);

  // Use the updated useScroll hook with a target ref
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"], // Defines when the animation starts and ends
  });

  // Define scroll range and corresponding translation for the background
  // Increased the output range to make the background move faster
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 500]); // Moves down faster as you scroll

  // Parallax effects for content
  const videoY = useTransform(scrollYProgress, [0, 1], [0, 500]); // Moves down faster as you scroll
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]); // Moves up faster as you scroll
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <Box
      component="div"
      ref={sectionRef}
      sx={{
        position: 'relative',
        height: {xs:"80vh",md:"100vh"}, // Increased height to allow scrolling
        overflow: 'hidden',
      }}
    >
      {/* Background Layer */}
      {/* <MotionBackground
        sx={{
          position: 'absolute',
          top: '-50%', // Start above to accommodate movement
          left: 0,
          width: '100%',
          height: "150%", // Increased height to allow movement without showing empty space
          backgroundImage: `url(${RepairBussiness})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 1, // Behind the overlay
        }}
        style={{
          y: backgroundY, // Apply animated y position
        }}
      /> */}
       <MotionBackground
        sx={{
          position: 'absolute',
          top: '-50%', // Start above to accommodate movement
          left: 0,
          width: '100%',
          height: "150%", // Increased height to allow movement without showing empty space
          backgroundImage: `url(${RepairBussiness})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 1, // Behind the overlay
        }}
        style={{
          // position: 'absolute',
          // top: 0,
          // left: 0,
          // width: '100%',
          // height: '100%',
          // overflow: 'hidden',
          y: videoY, // Apply animated y position
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        >
          <source src={RepairBusinessVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </MotionBackground>

      {/* Dark Overlay */}
      <Overlay>
        <Box
          sx={{
            textAlign: 'center',
            maxWidth: '600px',
            padding: '16px',
            paddingTop: '50px',
          }}
        >
          {/* Parallax Animated Heading */}
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

          {/* Parallax Animated Description */}
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

          {/* Parallax Animated Button */}
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
              href="/apple-repair-services" // Replace with React Router's Link if applicable
              // If using React Router, use the following props instead:
              // component={RouterLink}
              // to="/apple-repair-services"
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
