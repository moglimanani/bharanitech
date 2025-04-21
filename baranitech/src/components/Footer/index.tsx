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
        backgroundColor: theme.palette.grey[900],
        color: theme.palette.common.white,
        textAlign: 'center',
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Developed by <strong>Mogli Developer</strong>
      </Typography>
    </Box>
  );
};

export default Footer;
