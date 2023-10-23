import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const HeroBannerImageURL = 'https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?auto=format&fit=crop&q=80&w=1900&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#6da5c0" fontWeight="600" fontSize="36px">Join the Fitness Club</Typography>
    <Typography color="#05161a" fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
      Grind, Smile <br />
      And Repeat
    </Typography>
    <Typography color="#05161a" fontSize="22px" fontWeight={700} fontFamily="Alegreya" lineHeight="35px">
      Check out the most effective exercises personalized to you
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#0f969c', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>
    <Typography fontWeight={600} color="#0c7075" sx={{ opacity: '0.3', display: { lg: 'block', xs: 'none' }, fontSize: '200px', position: 'relative',  top: '110px'}}>
      It's all you moi
    </Typography>
    <img src={HeroBannerImageURL} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;
