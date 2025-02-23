import { useState, useMemo, useCallback } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import Services from "./pages/Services";
import ParallaxText from "./components/ParallaxText";
import WhyChooseUs from "./pages/WhyChooseUs";

import RepairBusinessSection from "./pages/RepairBusinessSection";
import ReviewSection from "./pages/ReviewSection";
import LocationSection from "./pages/LocationSection";
import Footer from "./pages/Footer";
import whatsapp_logo from "./assets/images/whatsapp_logo.webp";
import telephone_logo from "./assets/images/telephone_logo.webp";
import BasicSpeedDial from "./components/BasicSpeedDial";

function App() {
  const [count, setCount] = useState(0);

  // Memoize the nav bar and other components that don't depend on `count`
  const navBar = useMemo(() => <NavBar />, []);
  const homePage = useMemo(() => <HomePage />, []);
  const repairBusinessSection = useMemo(() => <RepairBusinessSection />, []);
  const services = useMemo(() => <Services />, []);
  const whyChooseUs = useMemo(() => <WhyChooseUs />, []);
  const reviewSection = useMemo(() => <ReviewSection />, []);
  const locationSection = useMemo(() => <LocationSection />, []);
  const footer = useMemo(() => <Footer />, []);

  // You can also create a callback for updating the count
  const handleCountChange = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <>
      {navBar}
          <BasicSpeedDial />
      {homePage}
      {/* <div style={{height:"1000px"}}> */}

      {repairBusinessSection}
      {/* </div> */}

      {/* <div className="textParallex">
        <ParallaxText baseVelocity={-1}>
          Chat with Us!{" "}
          <img
            style={{
              height: "clamp(1.5rem, 2vw, 3rem)",
              width: "auto",
              marginLeft: 10,
              marginRight: 10,
            }}
            src={whatsapp_logo}
            alt="whatsapp_logo"
          />{" "}
          : +91 12345 67890
        </ParallaxText>
        <ParallaxText baseVelocity={1}>
          Need Assistance?{" "}
          <img
            style={{
              height: "clamp(1.5rem, 2vw, 3rem)",
              width: "auto",
              marginLeft: 10,
              marginRight: 10,
            }}
            src={telephone_logo}
            alt="telephone_logo"
          />{" "}
          : +91 12345 67890
        </ParallaxText>
      </div> */}
      {services}
      {whyChooseUs}
      {reviewSection}
      {locationSection}
      {footer}
    </>
  );
}

export default App;
