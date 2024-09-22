import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Button, Grid } from "@mui/material";
import brokenIphone from "../assets/images/brokenIphone.png";
import brokenIpad from "../assets/images/brokenIpad.png";

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      title: "We repair any device Smartphone, tablets & Gadgets",
      description: [
        "All Cell Phone Repairs",
        "Fast 24*7 Services",
        "Satisfaction Guarantee",
      ],
      image: brokenIphone, // Replace with actual image path
    },
    {
      title: "Specialize in Phone and Tablet Component Replacement",
      description: [
        "All Cell Phone Repairs",
        "Fast 24*7 Services",
        "Satisfaction Guarantee",
      ],
      image: brokenIpad, // Replace with actual image path
    },
  ];
  return (
    <>
      <Carousel
        animation="fade"
        indicators={false}
        navButtonsAlwaysVisible={true}
        timeout={10}
        onChange={(currentIndex) => setCurrentIndex(currentIndex)}
      >
        {items.map((item, index) => (
          <Grid
            container
            spacing={2}
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: "nowrap",
              height: { xs: 400, sm: 450, md: 600 }, // Responsive heights for different screen sizes
            }}
            className="h-auto justify-center"
          >
            <Grid item sx={{paddingLeft:5}}>
              <div className="ps-4 sm:mt-10 sm:ps-6 md:mt-10 lg:px-8 max-w-full sm:max-w-screen-sm">
                <h1 className="text-1xl sm:text-1xl lg:text-5xl font-bold">
                  <span className="text-[#94e000]">
                    {item.title.split(" ")[0]}{" "}
                  </span>
                  {item.title.slice(item.title.indexOf(" ") + 1)}
                </h1>
                <div className="mt-4 space-y-2">
                  {item.description.map((desc, i) => (
                    <p
                      key={i}
                      className="flex items-center space-x-2 text-sm sm:text-base lg:text-lg"
                    >
                      <span>✔️</span>
                      <span>{desc}</span>
                    </p>
                  ))}
                </div>
                <Button
                  variant="contained"
                  sx={{ mt: 2, borderRadius: 5, background: "#94e000" }}
                  href=""
                >
                  Get Started
                </Button>
              </div>
            </Grid>
            <Grid
              item
              sx={{
                height: { xs: 300, sm: 400, md: 500 },
                width: { xs: 300, sm: 400, md: 500 },
                paddingRight:5}}
            >
              <div className="relative w-full h-full animated fadeInUp">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full h-full object-contain animated fadeInUp ${
                    currentIndex === index
                      ? "animatedFadeInUp visible"
                      : "hidden"
                  }`}
                />
              </div>
            </Grid>
          </Grid>
        ))}
      </Carousel>
    </>
  );
}
