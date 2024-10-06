import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";

const LocationContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: "#f5f5f5",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
}));

const MapContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "300px",
  borderRadius: "16px",
  overflow: "hidden",
  margin: "20px 0",
}));

const LocationSection = () => {
  const address =
    "Shop No.13, Accord Classic, Bandu Gore Marg, Goregaon (E), Mumbai, Maharashtra 400063";
  // Update the coordinates below (latitude, longitude)
  const googleMapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.6725598642483!2d72.8513462!3d19.165805199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6515e0c47b1%3A0x637666bb1057caba!2sNovelty%20Computech!5e0!3m2!1sen!2sin!4v1728212268379!5m2!1sen!2sin";

  return (
    <LocationContainer>
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", color: "#94e000", mb: 2 }}
      >
        Our Location
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        We are located at:
      </Typography>
      <Typography variant="h6" sx={{ mb: 2 }}>
        {address}
      </Typography>
      <MapContainer>
        <iframe
          src={googleMapUrl}
          title="Google Map"
          style={{ width: "100%", height: "100%", border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
       
      </MapContainer>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#94e000",
          color: "#fff",
          "&:hover": { backgroundColor: "#00A800" },
        }}
        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          address
        )}`}
      >
        Get Directions
      </Button>
    </LocationContainer>
  );
};

export default LocationSection;
