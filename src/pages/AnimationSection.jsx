import React, { useEffect } from 'react';
import { gsap, Power2, Power4 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent, Typography, Avatar, Grid } from '@mui/material';

gsap.registerPlugin(ScrollTrigger);

const profiles = [
  {
    id: 'app-store',
    name: 'Gwynn Cadogan',
    title: 'Designer',
    text: 'On the other hand, we denounce The righte indignation...',
    avatarSrc: 'https://i.imgur.com/avatar1.png',
    animation: { duration: 1, scale: 0.9, x: -348, y: -255, ease: Power4.easeOut },
  },
  {
    id: 'screen-time',
    name: 'Jane Doe',
    title: 'Developer',
    text: 'We must explain to you how all this mistaken idea...',
    avatarSrc: 'https://i.imgur.com/avatar2.png',
    animation: { duration: 1, scale: 0.9, x: -366,y: -65, ease: Power2.easeOut },
  },
  {
    id: 'weather',
    name: 'John Smith',
    title: 'Marketer',
    text: 'At vero eos et accusamus et iusto odio dignissimos...',
    avatarSrc: 'https://i.imgur.com/avatar3.png',
    animation: { duration: 1, scale: 1.1, x: -333, y: 169, ease: Power4.easeOut },
  },
  {
    id: 'stocks',
    name: 'Alice Johnson',
    title: 'Designer',
    text: 'Nor again is there anyone who loves or pursues...',
    avatarSrc: 'https://i.imgur.com/avatar4.png',
    animation: { duration: 1, scale: 0.9, x: -7, y: -170, ease: Power4.easeOut },
  },
  {
    id: 'fitness',
    name: 'Bob Brown',
    title: 'Entrepreneur',
    text: 'But I must explain to you how all this mistaken idea...',
    avatarSrc: 'https://i.imgur.com/avatar5.png',
    animation: { duration: 1, scale: 1.1, x: 362, y: -100, ease: Power2.easeOut },
  },
  {
    id: 'fitnes',
    name: 'Bob Brown',
    title: 'Entrepreneur',
    text: 'But I must explain to you how all this mistaken idea...',
    avatarSrc: 'https://i.imgur.com/avatar5.png',
    animation: { duration: 1, scale: 1.1, x: 362, y: -100, ease: Power2.easeOut },
  },
  {
    id: 'fitne',
    name: 'Bob Brown',
    title: 'Entrepreneur',
    text: 'But I must explain to you how all this mistaken idea...',
    avatarSrc: 'https://i.imgur.com/avatar5.png',
    animation: { duration: 1, scale: 1.1, x: 30, y: -100, ease: Power2.easeOut },
  },
];

const ProfileCard = ({ name, title, text, avatarSrc,index }) => (
  <Card sx={{ maxWidth: 345, borderRadius: '8px', padding: 2, boxShadow: 3 }}>
    <CardContent>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        {text}
      </Typography>
      <Grid container alignItems="center" spacing={2}>
        <Grid item>
          <Avatar src={avatarSrc} alt={name} sx={{ width: 56, height: 56 }} />
        </Grid>
        <Grid item>
          <Typography variant="h6" component="div">
            {index}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {title}
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

const AnimationSection = () => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const widgets = document.querySelectorAll('.widgets');

      gsap.set(widgets, { scale: 0 });

      const startTime = 2;
      const masterTimeline = gsap.timeline();

      profiles.forEach((profile, index) => {
        const element = document.querySelector(`#${profile.id}`);

        if (!element) {
          console.error(`Element not found: ${profile.id}`);
          return;
        }

        masterTimeline.add(
          gsap.to(element, profile.animation),
          startTime + (index % 3) / 2
        );
      });

      ScrollTrigger.create({
        animation: masterTimeline,
        trigger: '.animation',
        scrub: 1,
        pin: true,
      });
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  const sectionStyle = {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
  };

  const widgetStyle = {
    position: 'absolute',
    zIndex: -1,
    transform: 'scale(0)',
  };

  return (
    <section className="animation" style={sectionStyle}>
      {profiles.map((profile,index) => (
        <div key={profile.id} id={profile.id} className="widgets" style={widgetStyle}>
          <ProfileCard
            name={profile.name}
            title={profile.title}
            text={profile.text}
            avatarSrc={profile.avatarSrc}
            index={index}
          />
        </div>
      ))}
    </section>
  );
};

export default AnimationSection;
