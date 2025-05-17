import { Box, Grid, List, Card, ListItemText, styled, Typography, Button , Stack} from "@mui/material";

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
    padding: '0px',
 }
}))

export const AboutUsTitleStyled = styled('h2')(({theme})=>({
 // background: 'yellow',
  padding: '20px 0px 0px',
  color: '#ffffff',
  fontWeight: 'bold',
  fontSize: '1.3em',
  [theme.breakpoints.down('sm')]: {
    padding: '0px',
 }
}))

export const AboutUsParaStyled = styled('p')(({theme})=>({
  // background: 'yellow',
   margin: '0',
   padding: '0 0 20px',
   color: '#ffffff',
   fontSize: '0.88em',
   [theme.breakpoints.down('sm')]: {
     padding: '20px 0',
  }
 }))

 export const AboutUsDivWrapperStyled = styled('div')(({theme})=>({
  // background: 'yellow',
   margin: '0',
   padding: '0 20px 20px 0',
   display: 'flex',
   color: '#ffffff',
   fontSize: '0.88em',
   '& > div > img': {
    width: '100%',
    borderRadius: '20px',
   },
   [theme.breakpoints.down('sm')]: {
     padding: '0px',
     flexDirection: 'column',
     width: '100%',
     '& > div > img': {
      marginTop: '20px',
      width: '100%',
     }
  }
 }))


 export const AboutUsPara1Styled = styled('p')(({theme})=>({
  // background: 'yellow',
  maxWidth: '80%',
   margin: '0',
   padding: '0 0 20px',
   color: '#ffffff',
   fontSize: '0.88em',
   [theme.breakpoints.down('sm')]: {
     padding: '0px',
     maxWidth: '100%',
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
  fontSize: '1.3em',
  paddingBottom: '15px',
  color: '#ffffff',    
 }))

 export const TitleStyled = styled( Typography)(({theme})=>({
  textAlign: 'left',
  fontSize: '1em',
  paddingTop: '10px',
  color: '#127B93',
  position: 'relative',
    
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

 
 export const StyledWrapperDivCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  // boxShadow: theme.shadows[3],
  borderRadius: '20px',
}));

export const StackStyled = styled(Stack)(({ theme }) => ({
  position: 'absolute',
  top: '3px',
  right: '0px',
}));
 
//contact page

export const BoxContactStyled = styled(Box)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  marginBottom: '30px',
  flexDirection: 'column',
  // boxShadow: theme.shadows[3],
  borderRadius: '20px',
  background: '#ffffff'
}));

export const GridContactStyled = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  // boxShadow: theme.shadows[3],
  borderRadius: '20px',
  background: '#ffffff',
  padding: '30px',
  marginBottom: '30px',
  '& > .hidden': {
    [theme.breakpoints.down('sm')]: {
      margin: '0',
      padding: '0',
      display: 'none',
   }
  },
  [theme.breakpoints.down('sm')]: {
    '& > .fullwidth': {
       width: "100%"
    }
  },
  '& > .hidden > img': {
    width: '100%'
  }
}));


export const AdminStyled = styled('div')(({ theme }) => ({
  
  display: 'flex',
  padding: '20px',
  margin: '0px 30px 30px 0px' ,
  flexDirection: 'column',
  // boxShadow: theme.shadows[3],
  borderRadius: '20px',
  background: '#ffffff',
  '& > div': {
    color: '#127B93',
    fontSize: '1.3em',
    paddingBottom: '15px',
  },
  '& > button': {
    background: '#127B93',
    border: 0,
    color: '#ffffff',
    padding: '10px 20px',
    borderRadius: '20px',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '240px',
      margin: '0 auto',
    },
    [theme.breakpoints.up('sm')]: {
      maxWidth: '240px',
      margin: '0 auto',
    }
  },
  [theme.breakpoints.down('sm')]: {
    margin: '0px auto 30px',
  }
  
}));


export const GalleyAdminStyled = styled(Grid)(({ theme }) => ({
  height: '100%',
  display: 'flex', 
  marginBottom: '30px',
  flexDirection: 'column',
  // boxShadow: theme.shadows[3],
  borderRadius: '20px !important',
  background: '#ffffff',
  '& > nav': {
    marginTop: '30px',
    color: '#127B93',
    fontWeight: 'bold',
    'a': {
      color: '#127B93', 
      padding: '15px' ,
      borderRadius: '20px',    
    },
    'a:hover': {
      color: '#ffffff',
      background: '#127B93',
      
    }
  },
 
}));




