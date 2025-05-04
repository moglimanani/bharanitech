import { Box, styled, Typography } from "@mui/material";

export const BodyPara1Styled = styled(Typography)(({theme})=>({
  backgroundColor: theme.palette.appBarColour.main,
  padding: "10px 10px",
  textAlign: 'left',
  alignItems: 'flex-start',
  fontSize: '1em',
  color: theme.palette.common.white
}))

export const PageWrapperStyled = styled(Box)(({theme})=>({
  padding: '16px 16px 16px 20px'
}))