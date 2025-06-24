import { Container, ContainerProps, Typography , Button, Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
// import Container, { ContainerProps } from '@mui/material/Container';


export const StyledH2 = styled('h2')(({ theme }) => ({
  color: '#fff',
  fontSize: '32px',
  padding: '0px 0 30px',
  textAlign: 'center',
}));

export const StyledpriceRow = styled(Grid)(({ theme }) => ({
  width: '90%',
  maxWidth: '1100px',
  margin: 'auto',
  display: 'grid',
  gridTemplateColumns: '3fr 3fr 3fr',
  gridGap: '25px',
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: '3fr',
  },
}));

export const StyledpriceCol = styled(Grid)(({ theme }) => ({
  background: '#c4f4ff',
  padding: '5%',
  borderRadius: '12px',
  color: '#484848',
  textAlign: 'center',
  '& > p': {
    fontSize: '22px',
  },
  '& > h3': {
    fontSize: '44px',
    margin: '20px 0 40px',
    fontWeight: '500',
    color: '#127B93',
  },
  '& > h3 > span': {
    fontSize: '16px',
  },
  '& > ul': {
    textAlign: 'left',
    margin: '20px 0',
    color: '#363535',
    listStyle: 'none',
  },
  '& > ul > li': {
    margin: '15px 0',
  },
  '& > button': {
    width: '100%',
    padding: '14px 0',
    background: 'transparent',
    color: '#363535',
    fontSize: '15px',
    border: '1px solid #127B93',
    borderRadius: '6px',
    marginTop: '30px',
    cursor: 'pointer',
    transition: 'background 0.5s',
    fontWeight: 'bold',
  },
  '& > button:hover': {
    background: '#127B93',
    color: '#fff',
  }
}));

