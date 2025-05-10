import { Box, Grid, List, ListItemText, styled, Typography } from "@mui/material";

export const BodyPara1Styled = styled(Typography)(({theme})=>({
  padding: "10px 10px 10px 0px",
  textAlign: 'left',
  alignItems: 'flex-start',
  color: theme.palette.common.white,
  //background: 'yellow'
}))

export const PageWrapperStyled = styled(Box)(({theme})=>({
  padding: '0px 16px 16px 20px',
  [theme.breakpoints.down('sm')]: {
    padding: '0',
    margin: ' 20px 0',
 }
}))

export const ListItemTextStyled = styled(ListItemText)(({theme})=>({
  textAlign: 'left',
  paddingRight: '2em',
  paddingBottom: '5px',
  //  background: 'yellow '
 //fontStyle: "italic",
 }))

 export const HeadingStyled = styled(Typography)(({theme})=>({
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