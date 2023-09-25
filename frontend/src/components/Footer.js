import React from 'react';
import {Stack} from '@mui/material';
import Logo from '../assets/images/Logo(2).png';
import '../css/myFooterStyles.css'
import '../index.css';

const Footer = () => (
  <div className="footer-box">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '90px', height: '70px' }} />
    </Stack>
    <div className="footer-text">
      Made with ❤️ by Moi
    </div>
  </div>
  
);

export default Footer;
