import React, { useState } from 'react';
import { Typography, Box, Rating } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Glassmorphism Card Styling
const ReviewCard = styled(motion.div)(({ theme }) => ({
  backdropFilter: 'blur(10px)',
  backgroundColor: 'rgba(255, 255, 255, 0.15)',
  border: '1px solid rgba(255, 255, 255, 0.3)',
  borderRadius: '16px',
  padding: theme.spacing(4),
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  color: '#fff',
  minHeight: '200px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 12px 40px 0 rgba(31, 38, 135, 0.5)',
  },
}));

// Sample reviews data
const reviews = [
  {
    name: 'Rahul Sharma',
    rating: 5,
    comment: 'Excellent service! My MacBook works like new again.',
  },
  {
    name: 'Priya Gupta',
    rating: 4,
    comment: 'Quick and reliable. Highly recommend their iPhone repair service.',
  },
  {
    name: 'Arjun Verma',
    rating: 5,
    comment: 'Professional staff and original parts used. Very satisfied.',
  },
  {
    name: 'Sneha Desai',
    rating: 5,
    comment: 'Superb experience! They repaired my iPad within hours.',
  },
  {
    name: 'Karan Mehta',
    rating: 4,
    comment: 'Great service! My iPhone screen was replaced perfectly.',
  },
  {
    name: 'Anita Reddy',
    rating: 5,
    comment: 'Fast and friendly service. Highly recommend for Mac repairs.',
  },
  {
    name: 'Vikram Rao',
    rating: 4,
    comment: 'Good service and timely delivery. Satisfied with the repair.',
  },
  {
    name: 'Simran Kaur',
    rating: 5,
    comment: 'My laptop was fixed quickly and professionally. Excellent work!',
  },
  {
    name: 'Amit Singh',
    rating: 5,
    comment: 'Top-notch service! I’ll definitely come back for future repairs.',
  },
  {
    name: 'Pooja Yadav',
    rating: 4,
    comment: 'Very pleased with the service. Highly skilled technicians!',
  },
];

const ReviewSection = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveSlideIndex(swiper.activeIndex);
  };

  return (
    <Box
      component="section"
      sx={{
        padding: { xs: '40px 20px', md: '80px 60px' },
        backgroundImage: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
        color: '#fff',
      }}
    >
      <Box
        sx={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center',
          marginBottom: '40px',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            mb: 2,
            color: '#94e000', // Updated title color
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
          }}
        >
          What Our Customers Say
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: '800px', margin: '0 auto', color: '#fff' }}>
          We pride ourselves on delivering top-notch repair services. Here's what our customers have to say about their experiences.
        </Typography>
      </Box>

      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="swiper_container"
        onSlideChange={handleSlideChange}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index} style={{ maxWidth: '600px', maxHeight: '400px' }}>
            <ReviewCard
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <Box sx={{ mb: 2,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center" }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    textAlign: 'center',
                    mb: 1,
                    color: '#94e000', // Updated name color
                    textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                  }}
                >
                  {review.name}
                </Typography>
                <Rating
                  value={review.rating}
                  readOnly
                  sx={{ color: '#FFD700', justifyContent: 'center', display: 'flex' }}
                />
              </Box>
              <Typography variant="body1" sx={{ flexGrow: 1, fontStyle: 'italic', textAlign: 'center', color: '#fff' }}>
                "{review.comment}"
              </Typography>
            </ReviewCard>
          </SwiperSlide>
        ))}

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow" style={{ color: '#94e000' }}>
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow" style={{ color: '#94e000' }}>
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination" style={{ color: '#94e000' }}></div>
        </div>
      </Swiper>
    </Box>
  );
};

export default ReviewSection;
