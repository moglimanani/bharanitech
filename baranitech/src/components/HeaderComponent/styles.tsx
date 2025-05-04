
import {  styled, AppBar, Typography, Toolbar } from "@mui/material";

export const AppBarStyled = styled(AppBar)(({theme})=>({
    backgroundColor: '#127B93',
    textAlign: 'left',
    boxShadow: 'none',
    marginTop: '16px',
     '& > [class*="para"]': {
        textAlign: "left",
     }
    
}))

export const TypographyStyled = styled(Typography)(({theme})=>({
   fontFamily: 'Poetsen One',
   fontSize: '1.5em',
   color: theme.palette.common.white
}))

export const ToolbarStyled = styled(Toolbar)(({theme})=>({
   [theme.breakpoints.up('sm')]: {
     paddingLeft: '0px',
  }
}))
