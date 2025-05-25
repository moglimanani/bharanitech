import { styled } from "@mui/material";
import { Carousel } from "react-responsive-carousel";

export const CarouselStyled = styled(Carousel)(({theme})=>({
  background: '#ffffff',
  margin: '30px 30px',
  borderRadius: '20px',
  padding: '5px',
  display: 'flex',
  marginTop: '10px',
  justifyContent: 'space-around',
  [theme.breakpoints.down('sm')]: {
    // background: 'Yellow',
    margin: '8px',
 }
 
}))

export const CarouselImageStyled = styled('img')(({theme})=>({
  // width: '60% !important',
  borderRadius: '20px',
 // float: 'right'
}))

export const CarouselPtagStyled = styled('p')(({theme})=>({
  background: '#C4F4FF !important',
  // padding: '20px !important',
  // bottom: '0 !important',
  // width: '30% !important',
  // top: '10px ',
  color: '#127B93 !important',
  fontSize: '.88em !important',
  // textAlign: 'left',
  // marginLeft: '0 !important',
  // left: '0 !important',
  opacity: '100 !important',
  fontWeight: 'bold',
  [theme.breakpoints.down('sm')]: {
    // background: 'Yellow',
    fontSize: '.40em !important',
    position: "absolute",
    top: '50px',
    height: '100%',  
    display: 'none',  
 },
}))

export const CarouselButtonStyled = styled('button')(({theme})=>({
  background: theme.palette.appBarColour.main,
  borderRadius: '20px',
  padding: '8px 25px',
  color: '#ffffff',
  border: 'none',
  bottom: '10px',
  position: 'absolute',
  display: 'flex',
  marginLeft: '20px'
}))