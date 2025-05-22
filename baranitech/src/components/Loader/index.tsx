import React from 'react';
import { CircularProgress, Typography, Box, Stack } from '@mui/material';
import BoltIcon from '@mui/icons-material/Bolt';
import { styled, keyframes } from '@mui/material/styles';

// 🔁 Optional: Icon animation (spin)
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const StyledBoltIcon = styled(BoltIcon)(({ theme }) => ({
  color: theme.palette.warning.main,
  fontSize: '4rem',
  animation: `${spin} 1.2s linear infinite`, // Remove if no animation desired
}));

const LoaderWithIcon: React.FC = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Stack direction="row" spacing={2} alignItems="center">
        {/* <CircularProgress color="primary" /> */}
        <StyledBoltIcon />
      </Stack>
      <Typography variant="h6" sx={{ mt: 2, color: 'text.secondary' }}>
        Loading, please wait...
      </Typography>
    </Box>
  );
};

export default LoaderWithIcon;
