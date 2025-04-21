// src/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background:{
        default: '#bce0ed'
    },
    primary: {
      main: '#6a1b9a', // Purple theme
    },
    secondary: {
      main: '#f50057',
    },
  },
});

export default theme;
