import { Badge, Paper, styled, Typography } from "@mui/material";

export const VacanciesStyled = styled(Typography)(({ theme }) => ({
    justifyContent: 'flex-start',
    [theme.breakpoints.up('sm')]: {
        justifyContent: 'flex-end',
    },
    alignItems: "center",
    display: "flex",
    color: "rgb(196, 244, 255)",
    fontFamily: 'Poetsen One'
  }));

  export const BadgeStyled = styled(Badge)(({theme}) => ({
    svg: {
        color: theme.palette.orange.main
    }
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
     display: 'flex'
  }));

  export const JobsStyled = styled(Typography)(({theme})=>({
    fontFamily: 'Poetsen One',
    color: theme.palette.common.black
  }))