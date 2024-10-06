import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import Services from "./pages/Services";
import ParallaxText from "./components/ParallaxText";
import WhyChooseUs from "./pages/WhyChooseUs";
import ScrollingSections from "./pages/ScrollingSections";
import AnimationSection from "./pages/AnimationSection";
import RepairBusinessSection from "./pages/RepairBusinessSection";
import ReviewSection from "./pages/ReviewSection";
import LocationSection from "./pages/LocationSection";
import Footer from "./pages/footer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <HomePage />
      <RepairBusinessSection />

      <div className="textParallex">
        <ParallaxText baseVelocity={-5}>Framer Motion</ParallaxText>
        <ParallaxText baseVelocity={5}>Scroll velocity</ParallaxText>
      </div>
      <Services />
      <WhyChooseUs/> 
      <ReviewSection /> 
      <LocationSection />
      <Footer /> 
      {/* <AnimationSection /> */}
      {/* <ScrollingSections /> */}
    
    </>
  );
}

export default App;
