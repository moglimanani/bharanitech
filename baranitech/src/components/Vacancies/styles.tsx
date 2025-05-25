import { Badge, Paper, styled, Typography, Grid } from "@mui/material";
import { color } from "framer-motion";

export const VacanciesStyled = styled(Typography)(({ theme }) => ({
    justifyContent: 'flex-start',
    [theme.breakpoints.up('sm')]: {
        justifyContent: 'flex-end',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '8px',
      fontSize: '.95em'
  },
  [theme.breakpoints.up('sm')]: {
    margin: '8px 0 0 60px'
},
    alignItems: "center",
    display: "flex",
    color: "rgb(196, 244, 255)",
    fontFamily: 'Poetsen One',
    fontSize: '1.5em',
    paddingLeft: '0px',
     margin: '8px 0 0 30px'
  }));

  export const BadgeStyled = styled(Grid)(({theme}) => ({
    'svg + span':{
        color: theme.palette.common.black,
        backgroundColor: theme.palette.flashPrimaryBGColor.main,
    },
    svg: {
        color:  theme.palette.buttonPrimaryBGColor.main
    },
   
    
  }));

  export const GridParaStyled = styled(Badge)(({theme}) => ({
    display: 'flex',
   // background: '#000000',
    [theme.breakpoints.down('sm')]: {
      padding: '10px',
    },
   
    
  }));


  export const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.common.white,
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    justifyContent: 'center',

  }));

  export const ItemRight = styled('div')(({ theme }) => ({
    backgroundColor: 'transparent',
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.common.black,
     justifyContent: 'flex-start',
     [theme.breakpoints.up('sm')]: {
         justifyContent: 'flex-end',
     },
     height: '100%',
     display: 'flex',
     
  }));

  export const JobsStyled = styled(Typography)(({theme})=>({
    // fontFamily: 'Poetsen One',
    color: theme.palette.common.black,
     fontSize: '.88em',
     [theme.breakpoints.down('sm')]: {
      fontSize: '.70em',
      paddingLeft: '2px'
      },
  }))

  export const IconBadgeStyled = styled(BadgeStyled)(({theme})=>({
    // fontFamily: 'Poetsen One',
    position: 'relative',
    '& > svg': {
       marginTop: '5px'
    },
    [theme.breakpoints.down('sm')]: {
      '& > svg': {
        width: '70%'
     },
  },
  }))

  export const GridColorStyled = styled(Grid)(({theme})=>({
    // fontFamily: 'Poetsen One',
    background: '#ffffff',
    borderRadius: '20px',
    display: 'flex',
    gap: '5px',
    padding: '5px 12px 5px 12px ',
    margin: '0 5px 0 5px',
    alignContent: 'center',
    alignItems: 'center',
    '& div > p': {
      color: '#127B93',
      fontWeight: 'bold',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '0px',
      margin: '2px',
  },
    
  }))

  