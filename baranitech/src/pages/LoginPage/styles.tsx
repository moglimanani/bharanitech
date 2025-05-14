
import {  Grid, styled, Avatar, Button, } from "@mui/material";

export const LoginWrapperStyled = styled(Grid)(({theme})=>({
   margin: '30px',
   padding: '15px 20px',
   backgroundColor: '#ffffff',
   borderRadius: '20px',
   [theme.breakpoints.down('sm')]: {
    margin: '20px',
    padding: '0',
 },
 [theme.breakpoints.down('sm')]: {
 '& > div > div': {
    marginTop: '0px',
    padding: '0px'
 }
}
  
 }))

 export const LoginWrapperImageStyled = styled(Grid)(({theme})=>({
  // background: 'yellow',
  margin: '30px',
  padding: '15px 20px',
  textAlign: 'right',
  'img': {
    width: '100%',
  },
  [theme.breakpoints.down('sm')]: {
    margin: '0',
    padding: '0',
    display: 'none',
 }
 
}))

export const LoginWrapperIconStyled = styled(Avatar)(({theme})=>({
  color: '#4d4d4d',
  background: '#fff !important' ,
}))

export const LoginWrapperButtonStyled = styled(Button)(({theme})=>({
  background: '#127B93' ,
  borderRadius: '20px'

}))




 