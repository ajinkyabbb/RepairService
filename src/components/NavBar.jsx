import React, { useState } from "react";
import { Grid, Hidden } from "@mui/material";
import logo from "../assets/images/logo.png";
function NavBar() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  const navLinks = [
    { href: "/", text: "Home" },
    { href: "/elements", text: "Elements" },
    { href: "/blog", text: "Blog" },
    { href: "/about-us", text: "About Us" },
    { href: "/shop", text: "Shop" },
    { href: "/contact-us", text: "Contact Us" },
  ];

  return (
    <nav className="w-full bg-white p-4 shadow-md relative">
      {/* Base underline that spans the entire bottom of the nav */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-200"></div>

      <Grid container alignItems="center" justifyContent="space-between">
        {/* Logo Section */}
        <Grid item  className="flex items-center space-x-2">
          <img src={logo} alt="FixTool Logo" className="h-10" />
          <div>
            <span className="text-xl font-bold">FixQuick</span>
            <p className="text-sm text-gray-500">Mobile Repair</p>
          </div>
        </Grid>

        {/* Navigation Links */}
        <Hidden mdDown>
        <Grid item className="flex justify-center">
          <ul className="flex space-x-6">
            {navLinks.map((link, index) => (
              <li
                key={link.text}
                className="relative"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href={link.href}
                  className={`text-gray-800 hover:text-green-500 transition-colors whitespace-nowrap`}
                >
                  {link.text}
                </a>
                {/* Underline effect for the active or hovered link */}
                <div
                  className={`absolute left-0 bottom-[-27px] h-[2px] bg-green-500 w-full origin-left transition-transform duration-300 ease-out ${
                    activeIndex === index ? "scale-x-100" : "scale-x-0"
                  }`}
                  style={{
                    transform:
                      activeIndex === index ? "scaleX(1)" : "scaleX(0)",
                  }}
                ></div>
              </li>
            ))}
          </ul>
        </Grid>
        </Hidden>
       

        {/* Search, Cart, and My Account Buttons */}
        {/* <Grid
          item
          xs={12}
          sm={4}
          className="flex justify-end items-center space-x-4"
        >
          <div className="relative">
            <i className="fas fa-search text-gray-600"></i>{" "}
           
          </div>
          <div className="relative">
            <i className="fas fa-shopping-cart text-gray-600"></i>
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
              0
            </span>
          </div>
          <button className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600">
            My Account
          </button>
        </Grid> */}
      </Grid>
    </nav>
  );
}

export default NavBar;
