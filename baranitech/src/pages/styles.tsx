import { Box, Grid, List, ListItemText, styled, Typography, Button } from "@mui/material";

export const BodyPara1Styled = styled(Typography)(({theme})=>({
  padding: "10px 10px 10px 0px",
  textAlign: 'left',
  alignItems: 'flex-start',
  color: theme.palette.common.white
}))

export const PageWrapperStyled = styled(Box)(({theme})=>({
  padding: '0px 16px 16px 20px',
  [theme.breakpoints.down('sm')]: {
    padding: '0',
    margin: ' 20px 0',
 }
}))

export const ListItemTextStyled = styled(ListItemText)(()=>({
  textAlign: 'left',
  paddingRight: '2em',
  paddingBottom: '5px',
  //  background: 'yellow '
 //fontStyle: "italic",
 }))

 export const HeadingStyled = styled(Typography)(()=>({
  color: '#127B93',
  background: '#c4f4ff',
  // borderRadius: '20px',
  paddingBlock: '15px',
  paddingLeft: '30px',
  maxWidth: '320px',
  textAlign: 'left',
  fontWeight: 'bold',
  listStyle: 'none',
  borderRadius: '8px 50px 50px 8px'
 }))


export const ListStyled = styled(List)(({theme})=>({
  textAlign: 'left',
  paddingLeft: '20px',
  color: theme.palette.common.white
}))

export const TwoColumnStyled = styled(Grid)(({theme})=>({
  padding: "30px 30px 0px",
  [theme.breakpoints.down('sm')]: {
    padding: '20px',
 }
}))

// AboutUs

export const AboutUsStyled = styled('div')(({theme})=>({
  margin: '20px 30px',
  // padding: "0px 20px 0px",
  //background: '#ffffff',
  borderRadius: '20px',
  textAlign: 'left',
  [theme.breakpoints.down('sm')]: {
    padding: '20px',
 }
}))

export const AboutUsTitleStyled = styled('h2')(({theme})=>({
 // background: 'yellow',
  padding: '20px 0px 0px',
  color: '#ffffff',
  fontWeight: 'bold',
  fontSize: '1.3em',
  [theme.breakpoints.down('sm')]: {
    padding: '20px',
 }
}))

export const AboutUsParaStyled = styled('p')(({theme})=>({
  // background: 'yellow',
   margin: '0',
   padding: '0 0 20px',
   color: '#ffffff',
   fontSize: '0.88em',
   [theme.breakpoints.down('sm')]: {
     padding: '20px',
  }
 }))

 export const AboutUsDivStyled = styled('div')(({theme})=>({
  // background: 'yellow',
   margin: '10px 0 20px',
   maxWidth: '300px',
   padding: '15px 20px',
   color: '#127B93',
   background: '#c4f4ff',
   fontWeight: 'bold',
   borderRadius: '8px 50px 50px 8px',
   fontSize: '0.88em',
   [theme.breakpoints.down('sm')]: {
     padding: '20px',
  }
 }))
 
 // Learning Resources



 export const LearningResourcesStyled = styled( Typography)(({theme})=>({
  textAlign: 'left',
  fontSize: '2rem',
  paddingBottom: '15px',
  color: '#ffffff',    
 }))

 export const TitleStyled = styled( Typography)(({theme})=>({
  textAlign: 'left',
  fontSize: '1.2rem',
  paddingTop: '10px',
  color: '#127B93',
    
 }))

 export const ParaStyled = styled( Typography)(({theme})=>({
  textAlign: 'left',
  fontSize: '.88rem',
  paddingTop: '5px',
  color: '#484848',
    
 }))


 export const LearnButtonStyled = styled(Button)(({theme})=>({
  fontSize: '.88rem',
  color: '#ffffff',
  background: '#127B93',
  borderRadius: '20px',
  margin: '10px 0 20px',
  padding: '10px 20px',  
    
 }))
 