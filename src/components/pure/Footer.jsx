import React from 'react';

import {Typography, Box} from '@mui/material';

const Footer = () => {
    return (

        <Box component="footer" sx={{ py: 3, textAlign: 'center' }}>
        <Typography variant="body1" color="white" sx={{fontFamily: 'Crimson Text'}}>
          © 2024 JuanB Audiovisuales.
        </Typography>
      </Box>
    );
}

export default Footer;
