import React, { useEffect } from "react";
import Iphone from "../assets/images/Iphone.jpg";
import Ipad from "../assets/images/Ipad.jpg";
import iMac from "../assets/images/iMac.jpg";
import AppleWatch from "../assets/images/AppleWatch.jpg";
import MacMini from "../assets/images/Mac-Mini.jpg";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { gsap, Power1, Power2, Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProfileCard = ({ item }) => (
  <Card sx={{ maxWidth: {xs:150,md:150,lg:200,xl:200,xxl:300} }}>
    <CardMedia component="img" sx={{ maxHeight: 250, }} loading="lazy" image={item?.img} />
    <CardContent sx={{ pb: "0 !important", px: 0 }}>
      <Typography
        variant="h5"
        component="div"
        className="font-bold"
        sx={{ fontWeight: "bold", px: "16px" }}
      >
        {item?.title}
      </Typography>
      <Typography
        variant="body2"
        color="textSecondary"
        className="mt-2"
        sx={{ px: "16px" }}
      >
        {item?.description}
      </Typography>
      <Button
        variant="contained"
        sx={{ background: "#94e000" }}
        className="mt-4 w-full"
      >
        Learn More
      </Button>
    </CardContent>
  </Card>
);

export default function Services() {

    // Use a timeout to ensure elements are present
    // const timeoutId = setTimeout(() => {
      useEffect(() =>{
        const iphone = document.querySelector('.iphone');
        const widgets = document.querySelectorAll('.widgets');
  
      //   if (!iphone) {
      //     console.error('iPhone element not found!');
      //     return;
      //   }
  
      //   if (widgets.length === 0) {
      //     console.error('No widget elements found!');
      //     return;
      //   }
  
      //   gsap.set(iphone, { x: -450, rotation: 90 });
        gsap.set(widgets, {  scale: 0 });
  
        const iPhoneAnimation = () => {
          const tl = gsap.timeline({ defaults: { duration: 1 } });
          tl.to(iphone, { x: 0 })
            .to(iphone, { rotation: 0, scale: 0.9 })
            .to(iphone, { duration: 3, scale: 1 });
          return tl;
        };
  
       
        const animations = [
          { selector: "#Iphone", duration: 3, scale: 0.9, x: 500, y: 100, ease: Power4.easeOut },
          { selector: "#MacMini", duration: 3, scale: 0.9, x: -500, y: -300, ease: Power2.easeOut },
          { selector: "#Ipad", duration: 3, scale: 1.1, x: -30, y: 243, ease: Power4.easeOut },
          { selector: "#iMac", duration: 3, scale: 0.9, x: -42, y: -244, ease: Power4.easeOut },
          { selector: "#AppleWatch", duration: 3, scale: 1.1, x: -268, y: 144, ease: Power2.easeOut },
        ];
  
  
        const startTime = 2;
        const masterTimeline = gsap.timeline();
  
        animations.forEach((animation, index) => {
          const { selector, duration, scale, x, y, ease } = animation;
          const element = document.querySelector(selector);
          
          if (!element) {
            console.error(`Element not found: ${selector}`);
            return;
          }
  
          masterTimeline.add(
            gsap.to(element, { duration, scale, x, y, ease }),
            startTime + (index % 3) / 2
            
          );
        });
  
        ScrollTrigger.create({
          animation: masterTimeline,
          trigger: '.animation',
          scrub: 1,
          pin: true,
          start: "top top", // Trigger at the top of the page
          end: "bottom bottom", 
        });
     // Adjust the timeout duration if needed
  
      // Cleanup function to clear the timeout if the component unmounts
      // return () => clearTimeout(timeoutId);
    // }, []);
      },[])
    


  const sectionStyle = {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    // overflow: 'hidden', // Prevent content overflow
  };

  const iphoneStyle = {
    position: 'absolute',
    // height: '600px',
  };

  const widgetStyle = { 
    position: 'absolute',
    zIndex: -1,
    transform: 'scale(0)',
  };

  const socialsStyle = {
    background: 'linear-gradient(#ff348b, #e30217)',
    borderRadius: '30px',
    aspectRatio: '1',
    height: '140px',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexWrap: 'wrap',
  };

  const linkStyle = {
    textDecoration: 'none',
    fontSize: '30px',
    fontFamily: 'sans-serif',
    backgroundColor: 'white',
    aspectRatio: '1',
    height: '50px',
    borderRadius: '100%',
    color: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  const items = [
    { id: "Iphone", img: Iphone, title: "iPhone Device", description: "Get your iPhone repaired with expert precision." },
    { id: "MacMini", img: MacMini, title: "Mac Mini", description: "Ensure seamless performance with fast and reliable Mac Mini repairs." },
    { id: "Ipad", img: Ipad, title: "iPad", description: "We provide quick and dependable iPad repair services for all models." },
    { id: "iMac", img: iMac, title: "iMac", description: "Enhance the life of your iMac with professional diagnostics and repairs." },
    { id: "AppleWatch", img: AppleWatch, title: "Apple Watch", description: "Get your Apple Watch back in action with our specialized repair services." },
  ];

  return (
  <>
      <section className='animation' style={sectionStyle}>
      {/* Uncomment the iPhone image if needed */}
      {/* <img className='iphone' src='https://assets.codepen.io/8292695/iphone-14.svg' alt='' style={iphoneStyle} /> */}
      <CardContent sx={{ width: "300px", height: "250px" }} className='iphone' style={iphoneStyle}>
          <Typography
            variant="h5"
            sx={{ fontSize: "20px", color: "#94e000" }}
            component="div"
            className="font-bold"
            >
            How We Can Help
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            className="mt-2"
            sx={{ fontSize: {xs:'10px',sm:"20px",md:"30px",lg:"40px"}, fontWeight: "bold" }}
            >
            We Make Repair Stress Free
          </Typography>
        </CardContent>
        {items.map((item) => (
        <div key={item.id} id={`${item.id}`} className="widgets" style={widgetStyle}>
          <ProfileCard item={item} />
        </div>
      ))}
      {/* <h1 id='app-store' className='widgets'  style={widgetStyle} >qqqqqqqqqqqqqqq</h1>
      <h1 id='screen-time' className='widgets'  style={widgetStyle} >aaaaaaaaaaaaa</h1>
      <h1 id='weather' className='widgets'  alt='' style={widgetStyle} >zzzzzzzzzzzz</h1>
      <img id='stocks' className='widgets' src='https://assets.codepen.io/8292695/stocks-widget.svg' alt='' style={widgetStyle} />
      <img id='calendar' className='widgets' src='https://assets.codepen.io/8292695/calendar-widget.svg' alt='' style={widgetStyle} />
      <img id='fitness' className='widgets' src='https://assets.codepen.io/8292695/fitness-widget.svg' alt='' style={widgetStyle} />
      <img id='find-my' className='widgets' src='https://assets.codepen.io/8292695/find-my-widget.svg' alt='' style={widgetStyle} />
      <img id='sleep' className='widgets' src='https://assets.codepen.io/8292695/sleep-widget.svg' alt='' style={widgetStyle} />
      <img id='apple-tv' className='widgets' src='https://assets.codepen.io/8292695/apple-tv.svg' alt='' style={widgetStyle} />
      <img id='wallet' className='widgets' src='https://assets.codepen.io/8292695/wallet.svg' alt='' style={widgetStyle} /> */}

      {/* Add other widgets here... */}
      {/* <div id='socials' className='widgets' style={socialsStyle}>
        <a href='https://twitter.com/GibsonSMurray' target='_blank' rel='noopener noreferrer' title='𝕏 account' style={linkStyle}>
          <span>𝕏</span>
        </a>
        <a href='https://haptic.app/' target='_blank' rel='noopener noreferrer' title='inspiration' style={linkStyle}>
          <span>✰</span>
        </a>
      </div> */}
    </section>
  {/* <section className="animation" style={sectionStyle}>
          {items.map((item) => (
            <div
              key={item.id}
              id={item.id}
              className="widgets"
              style={widgetStyle}
            >
              <ProfileCard item={item} />
            </div>
          ))}
        </section>
      <Grid container justifyContent="center"sx={{mt:5}} >
      <Grid item  sx={{ height: "100vh", minWidth: 1440}}>
        <CardContent sx={{ width: "300px", height: "250px" }} className="">
          <Typography
            variant="h5"
            sx={{ fontSize: "20px", color: "#94e000" }}
            component="div"
            className="font-bold"
            >
            How We Can Help
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            className="mt-2"
            sx={{ fontSize: "50px", fontWeight: "bold" }}
            >
            We Make Repair Stress Free
          </Typography>
        </CardContent>
        
      </Grid>
    </Grid> */}
    
            </>
   
    
  );
}
