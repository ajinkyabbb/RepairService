// ProfileCard.jsx
import React, { useEffect } from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Modal,
  Box,
} from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', sm: 400 },
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

const ProfileCard = ({ item }) => {
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
    });
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card
        data-aos="fade-up" // Apply AOS animation
        sx={{
          maxWidth: { xs: 250, sm: 200, md: 250, lg: 350 },
          borderRadius: 4,
          boxShadow: 3,
          transition: "transform 0.3s, box-shadow 0.3s",
          "&:hover": {
            transform: "translateY(-10px)",
            boxShadow: 6,
          },
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia
          component="img"
          sx={{ height: 200, objectFit: "cover" }}
          loading="lazy"
          image={item?.img}
          alt={item?.title}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontWeight: "bold", mb: 1 }}
          >
            {item?.title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ mb: 2 }}
          >
            {item?.description}
          </Typography>
          <Button
            variant="contained"
            sx={{ background: "#94e000", width: "100%" }}
            onClick={handleOpen}
          >
            Learn More
          </Button>
        </CardContent>
      </Card>

      {/* Modal for "Learn More" */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-title" variant="h6" component="h2" gutterBottom>
            {item.title} Details
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            {/* Replace with more detailed information as needed */}
            {item.description} Here you can add more detailed information about the {item.title}, including features, specifications, and other relevant details to help customers make informed decisions.
          </Typography>
          <Button onClick={handleClose} sx={{ mt: 3 }} variant="outlined">
            Close
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default ProfileCard;
