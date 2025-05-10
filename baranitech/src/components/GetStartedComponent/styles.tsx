
import { Box, styled } from "@mui/material";

export const BoxWrapperStyled = styled(Box)(({theme})=>({
  padding: '20px',
  display: 'flex',
  justifyContent: 'space-between'
}))

export const DivWrapperStyled = styled('div')(({theme})=>({
  padding: '20px',
  '& > h2': {
    color: '#fff',
    textAlign: 'left',
    margin: '0',
  },
  '& > p': {
    color: '#fff',
    textAlign: 'left',
    margin: '0',
    fontSize: '.88em',
  },
  '& > button': {
    color: '#127B93',
    margin: '20px 0',
    padding: '10px 40px',
    background: '#fff',
    border: 'none',
    fontSize: '1em',
    borderRadius: '20px',
    display: 'flex',
    fontWeight: 'bold',
    lineHeight: '26px',
  }

}))


export const DivWrapperBoxStyled = styled('div')(({theme})=>({
  padding: '25px',
  margin: '0 auto 30px',
  background: '#ffffff',
  borderRadius: '20px',
  width: '95%',
  '& > h2': {
    color: '#127B93',
    fontSize: '1.3em',
    textAlign: 'left',
    margin: '0'
  },
  '& > p': {
    margin: '0',
    color: '#4d4d4d',
    fontSize: '.88em',
    textAlign: 'left',
    padding: '0'
  },

}))

export const DivWrapperInnerStyled = styled('div')(({theme})=>({
  padding: '20px',
  display: 'flex',
  justifyContent: 'space-between',
  textAlign: 'left',
  [theme.breakpoints.down('sm')]: {
    // background: 'yellow',
   flexDirection: 'column',
   padding: '0',
 },
  '& > div': {
    display: 'flex',
    textAlign: 'left',
    margin: '0',
    width: '500px',  
   
    [theme.breakpoints.down('sm')]: {
      // background: 'yellow',
     // flexDirection: 'column',
    
   }
  },
}))

export const WrapperDivStyled = styled('div')(({theme})=>({
  margin: '20px 0 0 20px',
  
  [theme.breakpoints.down('sm')]: {
    // background: 'yellow',
   // flexDirection: 'column',
   margin: '10px 0 0 10px',
   maxWidth: '230px',
 },
  '& > div': {
    color: '#127B93',
    fontSize: '.88em',
    fontWeight: 'bold'
  },
  '& > p': {
    color: '#4d4d4d',
    fontSize: '.88em'
  },

}))

export const ImageWrapperStyled = styled('div')(({theme})=>({
  [theme.breakpoints.down('sm')]: {
    'img': {
      maxWidth: '120px',
    }
  
 },
}))