import React from "react";
import { Grid, Typography, Card, CardContent, Box } from "@mui/material";
import { AiOutlineForm } from "react-icons/ai";
import { MdVerifiedUser, MdOutlineLocationOn } from "react-icons/md";
import { motion } from "framer-motion"; // Framer Motion for advanced animations
import original_parts from "../assets/images/Engineer.png";
import Skilled_Certified_Technicians from "../assets/images/Skilled_Certified_Technicians.jpg";
import picup from "../assets/images/Pickup.png";
import Delivery from "../assets/images/Delivery.jpg";
import Quality_Parts_Warranty from "../assets/images/Quality_Parts_Warranty.jpg";
import Wallet from "../assets/images/Wallet.png";
import Product_teardown from "../assets/images/Product_teardown.png";
import Review from "../assets/images/Review.png";
import Reputation from "../assets/images/Reputation.png";

// Services data without JSX
const services = [
  {
    title: "Original Apple Parts",
    icon: "original_parts",
    description:
      "We use genuine Apple replacement parts for all repairs, ensuring the longevity and quality of your device. Trust us to restore your Apple product with parts that meet Apple's standards.",
  },
  {
    title: "Certified Apple Engineers",
    icon: "Skilled_Certified_Technicians",
    description: "Our team consists of M+ Certified engineers and technicians who specialize in Apple device repairs. With years of experience, we guarantee expert handling of your Apple products.",
  },
  {
    title: "Free Pickup Service Across Mumbai",
    icon: "Delivery",
    description:
      "Enjoy the convenience of our free pickup service for all Apple repairs. No matter where you are in Mumbai, we’ll collect your device, repair it, and deliver it back to you, hassle-free.",
  },
  {
    title: "Onsite Apple Repair Services",
    icon: "picup",
    description: "We offer onsite repair services for Apple devices. Our technicians will come to your location, providing repair solutions without you having to leave the comfort of your home.",
  },
  {
    title: "Best Price Guarantee",
    icon: "Wallet",
    description: "We provide competitive pricing on all Apple repairs. If you find a better price from any third-party repair vendor, we’ll match it to ensure you’re getting the best deal.",
  },
  {
    title: "No Fix, No Charge Policy",
    icon: "Quality_Parts_Warranty",
    description: "We stand by our work with a 'No Fix, No Charge' policy. If we can't repair your Apple device, you won’t pay a dime.",
  },
  {
    title: "Trusted by Customers – Read Our Reviews",
    icon: "Review",
    description:
      "Our Apple repair service is built on trust and customer satisfaction. See what our happy customers have to say about their experience with us.",
  },
  {
    title: "Instant Apple Repair Service",
    icon: "Product_teardown",
    description: "With our omnichannel customer service, you get quick responses to your inquiries. We prioritize fast and efficient Apple repair services to minimize downtime.",
  },
  {
    title: "Excellent Reputation",
    icon: "Reputation",
    description: "Our excellent reputation is built on meticulous attention to detail and a long-standing commitment to providing loyal, high-quality service to all of our customers.",
  },
];

// Helper function to render icons
const renderIcon = (iconName) => {
  switch (iconName) {
    case "AiOutlineForm":
      return <AiOutlineForm size={35} />;
    case "MdOutlineLocationOn":
      return <MdOutlineLocationOn size={35} />;
    case "original_parts":
      return (
        <img
          src={original_parts}
          alt="Original Parts"
          style={{ maxHeight: "100%", objectFit: "cover" }}
        />
      );
    case "Skilled_Certified_Technicians":
      return (
        <img
          src={Skilled_Certified_Technicians}
          alt="Certified Engineers"
          style={{ maxHeight: "100%", objectFit: "cover" }}
        />
      );
    case "Delivery":
      return (
        <img
          src={Delivery}
          alt="Free Pickup"
          style={{ maxHeight: "100%", objectFit: "cover" }}
        />
      );
    case "picup":
      return (
        <img
          src={picup}
          alt="Onsite Repair"
          style={{ maxHeight: "100%", objectFit: "cover" }}
        />
      );
    case "Wallet":
      return (
        <img
          src={Wallet}
          alt="Price Guarantee"
          style={{ maxHeight: "100%", objectFit: "cover" }}
        />
      );
    case "Quality_Parts_Warranty":
      return (
        <img
          src={Quality_Parts_Warranty}
          alt="No Fix, No Charge"
          style={{ maxHeight: "100%", objectFit: "cover" }}
        />
      );
    case "Product_teardown":
      return (
        <img
          src={Product_teardown}
          alt="Instant Service"
          style={{ maxHeight: "100%", objectFit: "cover" }}
        />
      );
      case "Review":
      return (
        <img
          src={Review}
          alt="Review"
          style={{ maxHeight: "100%", objectFit: "cover" }}
        />
      );
      case "Reputation":
      return (
        <img
          src={Reputation}
          alt="Reputation"
          style={{ maxHeight: "100%", objectFit: "cover" }}
        />
      );
    default:
      return null;
  }
};

const ServicesGrid = () => {
  return (
    <Box
      sx={{
        // maxWidth: "1440px",
        margin: "0 auto",
        padding: 4,
        background: "#fff",
        // backdropFilter: "blur(20px)",
        // borderRadius: "24px",
        // boxShadow: "0px 10px 40px rgba(0, 0, 0, 0.2)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            letterSpacing: "0.1em",
            marginBottom: 3,
            fontSize: "3rem",
            color: "#222",
            textTransform: "uppercase",
            textShadow: "3px 3px 15px rgba(0, 0, 0, 0.2)",
          }}
        >
          Why Choose Us
        </Typography>
        <Typography
          component="h2"
          sx={{
            textAlign: "center",
            fontStyle: "italic",
            color: "#707070",
            marginBottom: 4,
            letterSpacing: "0.05em",
            fontSize: "1.2rem",
          }}
        >
          "Choose us for fast, reliable, and certified Apple product repairs in
          Mumbai, backed by highly trained engineers."
        </Typography>
      </motion.div>

      {/* Service Cards */}
      <Grid container spacing={4} justifyContent="start">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, translateY: 50 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card
                sx={{
                  minHeight: "320px",
                  display: "flex",
                  flexDirection: "column",
                  p: 2,
                  borderRadius: "20px",
                  boxShadow: "0 10px 40px rgba(0, 0, 0, 0.2)",
                  position: "relative",
                  transition: "all 0.4s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
                  },
                }}
              >
                <CardContent>
                  {/* Icon */}
                  <Box
                    sx={{
                      position: "relative",
                      overflow: "hidden",
                      height: "100px",
                      mb: 2,
                    }}
                  >
                    <Box
                      sx={{
                        height: "100px",
                        width: "100px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(255,255,255,0.7)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {renderIcon(service.icon)}
                    </Box>
                  </Box>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "600",
                      fontSize: "clamp(1rem, 1.2vw, 1.3rem)",
                      color: "#333",
                      textTransform: "uppercase",
                      mb: 1,
                    }}
                  >
                     <span className="text-[#94e000]">{service.title.split(" ")[0]}</span> {/* First word */}
                     {" " + service.title.split(" ").slice(1).join(" ")} {/* Remaining words */}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ color: "#707070", fontSize: "0.9rem" }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServicesGrid;
