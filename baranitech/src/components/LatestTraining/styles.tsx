import { Grid } from "@mui/material";
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
  },
}));

export const StyledpriceCol = styled(Grid)(({ theme }) => ({
  background: '#c4f4ff',
  padding: '2%',
  minHeight: '350px',
  borderRadius: '12px',
  color: '#484848',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  textTransform: 'capitalize',
  '& > p': {
    fontSize: '24px',
    textTransform: 'capitalize',
    marginBottom: '0px'
  },
  '& > h3': {
    fontSize: '32px',
    margin: '10px 0 10px',
    fontWeight: '500',
    color: '#127B93',
  },
  '& > h3 > span': {
    fontSize: '16px',
  },
  '& > ul': {
    textAlign: 'left',
    margin: '0',
    color: '#363535',
    listStyle: 'none',

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
    bottom: '10px',
    background: '#127B93',
    color: '#fff',
  },
}));




export const LearnButtonStyled = styled('button')(({ theme }) => ({
  fontSize: ".88rem",
  color: theme.palette.appBarColour.light,
  background: theme.palette.appBarColour.main,
  border: '1px solid #484848',
  borderRadius: "20px",
  margin: "10px 0 20px",
  padding: "10px 20px",
  transition: 'all 0.2s',
  '&:hover': {
    border: '1px solid #484848',
    color: theme.palette.appBarColour.light,
    backgroundImage: 'linear-gradient(to top, #48c6ef 0%, #6f86d6 100%)',
  }
}));
