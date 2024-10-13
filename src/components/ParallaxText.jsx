import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

export default function ParallaxText({ children, baseVelocity = 1 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll(); // Track vertical scroll position
  const scrollVelocity = useVelocity(scrollY); // Track velocity of the scroll

  // Smooth out the scroll velocity to avoid jumps
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  // Transform scroll velocity into a velocity factor, scaled by baseVelocity
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  // Wrap motion value so the text loops infinitely
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  useAnimationFrame((t, delta) => {
    // Calculate movement amount based purely on scroll velocity and baseVelocity
    const moveBy = velocityFactor.get() * (delta / 300) * baseVelocity;

    // Move the baseX position based on the scroll velocity and direction
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="Text-parallax-main">
      <motion.div className="scroller" style={{ x }}>
        {Array.from({ length: 16 }).map((_, index) => (
          <span
            style={{
              fontSize: "clamp(1.7rem, 2vw, 2.5rem)",
              whiteSpace: "nowrap",
              marginBottom: "1rem",
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              flexWrap:"nowrap",
              marginLeft: "1rem",
              marginRight: "30px",
            }}
            key={index}
          >
            {children}{" "}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
