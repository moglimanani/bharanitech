// src/theme.ts
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    appBarColour: Palette['primary'];
  }
  interface PaletteOptions {
    appBarColour?: PaletteOptions['primary'];
  }
}

const theme = createTheme({
  typography: {
    fontFamily: [
      'comfortaa'
    ].join(',')
  },
  palette: {
    appBarColour: {
      main: '#127B93',
      light: '#fff',
      dark: '#03a9f4',
      contrastText: '#242105',
    },
    background:{
        default: '#e6eef0'
    },
    primary: {
      main: '#6a1b9a', // Purple theme
    },
    secondary: {
      main: '#f50057',
    },
   
  },
  // components: {
  //   MuiAppBar: {
  //     styleOverrides: {
  //       root: {
  //         color: 'primary',
  //         '& .MuiBox-root':{
  //           'a':{
  //             color:'red'
  //           }
  //         },
  //       }
  //     }
  //   }
  // }
});

export default theme;
