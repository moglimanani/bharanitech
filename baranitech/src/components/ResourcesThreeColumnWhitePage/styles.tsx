import {  Box, Grid, styled, CardMedia} from "@mui/material";

export const BoxWhiteStyled = styled(Box)(({theme})=>({
  background: '#fff',
   
}))

export const H2BoxStyled = styled('h2')(({theme})=>({
    textAlign: 'left',
     margin: '0',
     padding: '10px 0 0 20px',
     color: theme.palette.appBarColour.main,
  }))

  export const PareBoxStyled = styled('p')(({theme})=>({
    textAlign: 'left',
     margin: '0',
     padding: '0 0 0 20px',
     fontSize: '1em',
     color: theme.palette.secondary.main,
  }))


export const ThreeColumnStyledWhite = styled(Grid)(({theme})=>({
    display: 'flex',
    justifyContent: 'space-around',
    boxShadow: 'none !important',
    background: theme.palette.appBarColour.light,
    borderRadius: '20px',
    padding: '0px',
    flexDirection: 'column',
   
}))


export const TitleDivStyledWhite = styled('div')(({theme})=>({
    color: theme.palette.appBarColour.main,
    textAlign: 'left',
    padding: '10px 20px',
    display: 'flex',
    marginBottom: '10px'
}))

export const ImageDivStyledWhite = styled('div')(({theme})=>({
    maxWidth: '400px',
    marginTop: '30px',
    padding: '0 20px',
    marginBottom: '10px',
    '& > img': {
        width: '100%',
    }
}))
export const ButtonWrapperStyledWhite = styled('div')(({theme})=>({
   display: 'flex',
   justifyContent: 'flex-end'
}))

export const ParaOneStyledWhite = styled('p')(({theme})=>({
        fontSize: '0.88em',
        margin: '0',
        textAlign: 'left',
        padding: '0px 20px 15px',
        color: theme.palette.secondary.main,
        height: '120px',
        overflow: 'scroll'
}))

export const ButtonOneStyledWhite = styled('button')(({theme})=>({
    fontSize: '0.88em',
    margin: '10px 20px 30px',
    textAlign: 'center',
    width: '150px',
    border: '0',
    background: theme.palette.appBarColour.main,
    padding: '10px 20px',
    color: theme.palette.appBarColour.light,
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
}))

export const CardMediaStyled = styled(Box)(({theme})=>({
    margin: '30px 20px 10px',
    width: '92%',
    [theme.breakpoints.down('sm')]: {
        // background: 'Yellow',
         height: '220px'
     }
   
}))
