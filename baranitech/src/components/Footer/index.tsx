import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { FooterDeveloperStyled } from '../HeaderComponent/styles';
import { useNavigate } from 'react-router';

const Footer: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleDeveloepNavigate = () => {
    navigate('/moglidevelopers');
  }
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
      <Typography variant="body2" component="div">
        © {new Date().getFullYear()} Developed by <FooterDeveloperStyled variant='h5' onClick={handleDeveloepNavigate}>Mogli Developer</FooterDeveloperStyled>
      </Typography>
    </Box>
  );
};

export default Footer;
