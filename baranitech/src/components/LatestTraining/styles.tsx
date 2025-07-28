import { Button, ButtonProps, Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
// import Container, { ContainerProps } from '@mui/material/Container';


export const StyledH2 = styled('h2')(({ theme }) => ({
  color: '#fff',
  fontSize: '32px',
  padding: '0px 0 30px',
  textAlign: 'center',
}));

export const StyledpriceRow = styled(Grid)(({ theme }) => ({
  maxWidth: '1240px',
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: '3fr 3fr 3fr',
  gridGap: '25px',
  padding: '10px 0 0 20px',
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: '3fr',
    padding: '10px 0 0 0px',
  },
}));

export const StyledpriceCol = styled(Grid)(({ theme }) => ({
  background: '#fff',
  // padding: '2%',
  minHeight: '350px',
  borderRadius: '12px',
  color: '#484848',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  textTransform: 'capitalize',
  '& > p': {
    fontSize: '1.6rem',
    textTransform: 'capitalize',
    marginBottom: '0px',
    fontFamily: 'Poetsen One',
  },
  '& > h3': {
    // fontSize: '32px',
    margin: '10px 0 10px',
    fontWeight: '500',
    color: '#127B93',
  },
  '& > h3 > span': {
    fontSize: '1.8rem',
    fontFamily: 'Poetsen One',
  },
  '& > ul': {
    textAlign: 'left',
    margin: '0',
    color: '#363535',
    listStyle: 'none',
    padding: '0 16px 16px 16px',
    borderTop: `2px solid ${theme.palette.secondary.main}`,
  },
  '& > ul > li': {
    margin: '15px 0',
  },
  '& > button': {
    width: '80%',
    padding: '14px 0',
    fontSize: '15px',
    border: '1px solid #127B93',
    borderRadius: '6px',
    marginTop: '30px',
    cursor: 'pointer',
    transition: 'background 0.5s',
    fontWeight: 'bold',
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%)',
    bottom: '30px',
    background: '#127B93',
    color: '#fff',
  },
}));




export const LearnButtonStyled = styled(Button)<ButtonProps>(({ theme }) => ({
  fontSize: ".88rem",
  cursor: 'pointer',
  color: theme.palette.appBarColour.light,
  background: theme.palette.appBarColour.main,
 // border: '1px solid #484848',
  borderRadius: "20px",
  margin: "a auto",
  padding: "10px 20px",
  transition: 'all 0.2s',
  width: 'auto',
  '&:hover': {
    // border: '1px solid #484848',
    color: theme.palette.appBarColour.light,
    backgroundImage: 'linear-gradient(to right, #243949 0%, #517fa4 100%)',
    
  }
}));

export const LeftRightBlock = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  fontSize: '.95rem',
  // margin: '0 0 20px',
  flex: '1 1',
  '&>div':{
    flex:1,
    '&:last-child':{
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      display: 'flex',
      flexDirection: 'column',
      padding: '0 20px',
      textAlign: 'right',
    }
  }
}))