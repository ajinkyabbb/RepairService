import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import Patient_Friendly_Advisors from "../assets/images/Patient_Friendly_Advisors.jpg";
import Service_On_Demand from "../assets/images/Service_On_Demand.jpg";
import Fastest_Turnaround_Time from "../assets/images/Fastest_Turnaround_Time.jpg";
import Skilled_Certified_Technicians from "../assets/images/Skilled_Certified_Technicians.jpg";
import Quality_Parts_Warranty from "../assets/images/Quality_Parts_Warranty.jpg";
import All_Repairs_Under_One_Roof from "../assets/images/All_Repairs_Under_One_Roof.jpg";
import { Grid } from "@mui/material";

function useParallax(value = MotionValue, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}
const services = [
  {
    image: Patient_Friendly_Advisors,
    title: "Patient, Friendly advisors",
    description:
      "It’s a little bit like visiting a doctor. Don’t you like it when your doctor has an understanding ear, and explains the ailment to you?",
  },
  {
    image: Service_On_Demand,
    title: "Service on demand, at home",
    description:
      "Free pickup & delivery across Bangalore. For simpler repairs we provide on-site, doorstep service. Just book an appointment.",
  },
  {
    image: Fastest_Turnaround_Time,
    title: "Fastest turnaround time",
    description:
      "Time is money. Fixxo repairs fast, ergo it saves you money only, no? Ok. We are an exclusive Apple service center, MOST parts are usually in ready stock.",
  },
  {
    image: Skilled_Certified_Technicians,
    title: "Skilled, Certified technicians",
    description:
      "All things considered, the quality of service is only as good as the expertise of the repairman. Workmanship matters!",
  },
  {
    image: Quality_Parts_Warranty,
    title: "Quality parts, Warranty",
    description:
      "At Fixxo, we use only the highest quality spare parts. All repairs carry a min. 90 days warranty. Not just a working device, peace of mind is paramount too!",
  },
  {
    image: All_Repairs_Under_One_Roof,
    title: "All repairs under one roof",
    description:
      "All Apple devices, all repairs, we are your one-stop shop. We’re probably the only one in town who do L4 chip-level repair on Logic boards, arguably :)",
  },
];

function Image({ service }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section className="parallex-image">
      <div className="parallex-image-div h-[600px] w-[600px] " ref={ref}>
        <img
          style={{ objectFit: 'contain', width: '100%', height: '100%' }}
          src={service.image}
          alt="A London skyscraper"
          className="cover"
        />
      </div>
      <motion.div className="absolute sm:relative w-[700px]" style={{ y }}>
        <h2 style={{ fontSize: 40 }}>{service.title}</h2>
        <h2 style={{ fontSize: 20 }}>{service.description}</h2>
      </motion.div>
    </section>
  );
}
export default function WhyChooseUs() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <Grid container  justifyContent="center" alignItems="center">
        <Grid item>
            <h1 className="text-[50px] font-bold mt-10"> Why choose Us</h1>
        </Grid>
        <Grid item sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
          {services.map((service, index) => (
            <Image key={index} service={service} index={index} />
          ))}
        </Grid>
      </Grid>
    </>
  );
}
