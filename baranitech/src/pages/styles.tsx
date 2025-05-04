import { styled, Typography } from "@mui/material";

export const BodyPara1Styled = styled(Typography)(({theme})=>({
  backgroundColor: theme.palette.appBarColour.main,
  padding: "10px 10px",
  textAlign: 'left',
  alignItems: 'flex-start',

}))