
import {  styled, AppBar, Typography, Toolbar } from "@mui/material";

export const AppBarStyled = styled(AppBar)(({theme})=>({
    backgroundColor: 'transparent',
    textAlign: 'left',
    boxShadow: 'none',
     '& > [class*="para"]': {
        textAlign: "left",
     },
     [theme.breakpoints.down('sm')]: {
      '& > div': {
         padding: '0',
        }
   }
    
}))

export const TypographyStyled = styled(Typography)(({theme})=>({
   fontFamily: 'Poetsen One',
   fontSize: '1.5em',
   color: theme.palette.common.white,
   [theme.breakpoints.down('sm')]: {
      //background: 'Yellow',
      fontSize: '1.3em',
      padding: '0',
      margin: '0',
   }
}))

export const ToolbarStyled = styled(Toolbar)(({theme})=>({
   [theme.breakpoints.up('sm')]: {
     paddingLeft: '0px',
  }
}))
