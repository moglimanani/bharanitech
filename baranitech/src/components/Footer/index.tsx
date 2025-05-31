import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

const Footer: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 2,
        mt: 'auto',
       // backgroundColor: theme.palette.grey[900],
       background: theme.palette.flashPrimaryBGColor.main,
       color: theme.palette.secondary.main,
        //color: theme.palette.common.white,
        textAlign: 'center',
        'a': {
          color: theme.palette.appBarColour.main,
        }
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Developed by <strong><a href='mailto:suryajehan10@gmail.com'>Mogli Developer</a></strong>
      </Typography>
    </Box>
  );
};

export default Footer;
