import React from 'react';
import {Stack} from '@mui/material';
import Logo from '../assets/images/Logo(2).png';

const Footer = () => (
  <footer>
  <div className="footer-box">
    <Stack gap="5px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ paddingLeft:"10px", width: '90px', height: '70px' }} />
      <div className="footer-text">
        Made with ❤️ by Moi
      </div>
    </Stack>
    
  </div>
  </footer>
  
  
);

export default Footer;
