// src/theme.ts
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    appBarColour: Palette['primary'];
    orange: Palette['primary'];
    buttonPrimaryBGColor: Palette['primary'];
    flashPrimaryBGColor: Palette['primary'];
    pinkColour: Palette['primary'];
    purpleLight: Palette['primary'];
    gold: Palette['primary'];
  }
  interface PaletteOptions {
    appBarColour?: PaletteOptions['primary'];
    orange?: PaletteOptions['primary'];
    buttonPrimaryBGColor?: PaletteOptions['primary'];
    flashPrimaryBGColor?: PaletteOptions['primary'];
    pinkColour?: PaletteOptions['primary'];
    purpleLight?: PaletteOptions['primary'];
    gold?: PaletteOptions['primary'];
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
      main: '#484848',
    },
    buttonPrimaryBGColor: {
      main: '#117b93'
    },
    flashPrimaryBGColor: {
      main: '#c4f4ff'
    },
    pinkColour:{
      main: '#ef476f'
    },
    purpleLight:{
      main: "#9b9ece",
      dark: "#6d326d"
    },
    gold:{
      main: "#cca000",
    }
   
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
