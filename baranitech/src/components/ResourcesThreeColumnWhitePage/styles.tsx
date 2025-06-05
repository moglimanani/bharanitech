import {  Box, Grid, styled} from "@mui/material";

export const BoxWhiteStyled = styled(Box)(()=>({
  background: '#fff',
   
}))

export const H2BoxStyled = styled('h2')(({theme})=>({
    textAlign: 'left',
     margin: '5px 0',
     padding: '10px 0 0 20px',
     color: theme.palette.appBarColour.main,
     [theme.breakpoints.down('sm')]: {
        padding: '10px 0 0 10px',
     }
  }))

  export const PareBoxStyled = styled('p')(({theme})=>({
    textAlign: 'left',
     margin: '0',
     padding: '0 0 0 20px',
     fontSize: '1em',
     color: theme.palette.secondary.main,
     [theme.breakpoints.down('sm')]: {
        padding: '10px 0 0 10px',
     }
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
    textAlign: 'center',
    padding: '10px 20px',
    lineHeight: '1.5em',
    height: '3em',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    width: '100%',
}))

export const ImageDivStyledWhite = styled('div')(()=>({
    maxWidth: '400px',
    marginTop: '30px',
    padding: '0 20px',
    marginBottom: '10px',
    '& > img': {
        width: '100%',
    }
}))
export const ButtonWrapperStyledWhite = styled('div')(()=>({
   display: 'flex',
   justifyContent: 'flex-end',
   marginBottom: '20px'
}))

export const ParaOneStyledWhite = styled('p')(({theme})=>({
        fontSize: '0.88em',
        margin: '0',
        textAlign: 'left',
        padding: '0px 20px 15px',
        color: theme.palette.secondary.main,
        // height: '120px',
        // overflow: 'scroll'
}))

export const ButtonOneStyledWhite = styled('button')(({theme})=>({
    fontSize: '0.88em',
    //margin: '10px 20px 30px',
    textAlign: 'center',
    //width: '150px',
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
    margin: '20px 20px 5px',
    // width: '92%',
    [theme.breakpoints.down('sm')]: {
        // background: 'Yellow',
         height: '220px',
         margin: '20px 0px 5px',
         width: '100%'
     }
   
}))
