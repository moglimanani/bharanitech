import { Box, List, ListItemText, styled, Typography } from "@mui/material";

export const BodyPara1Styled = styled(Typography)(({theme})=>({
  padding: "10px 10px",
  textAlign: 'left',
  alignItems: 'flex-start',
  fontSize: '1em',
  color: theme.palette.common.white
}))

export const PageWrapperStyled = styled(Box)(({theme})=>({
  padding: '16px 16px 16px 20px'
}))

export const ListItemTextStyled = styled(ListItemText)(({theme})=>({
  textAlign: 'left'
}))

export const ListStyled = styled(List)(({theme})=>({
  textAlign: 'left',
  paddingLeft: '20px',
  color: theme.palette.common.white
}))