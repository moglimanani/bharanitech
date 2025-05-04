
import {  styled, AppBar } from "@mui/material";

export const AppBarStyled = styled(AppBar)(({theme})=>({
    backgroundColor: '#127B93',
    textAlign: 'left',
    boxShadow: 'none',
     '& > [class*="para"]': {
        textAlign: "left",
        
     }
    
}))