import {  Box, Grid, styled, Typography} from "@mui/material";

export const BoxWhiteStyled = styled(Box)(({theme})=>({
  background: theme.palette.secondary.main,
  padding: '16px 16px 34px !important',
}))

export const H2BoxStyled = styled('h2')(({theme})=>({
    textAlign: 'left',
     margin: '0 0 10px',
     padding: '10px 0 0 20px',
     color: theme.palette.appBarColour.light,
     [theme.breakpoints.down('sm')]: {
        padding: '10px 0 0 10px',
     }
  }))

  export const PareBoxStyled = styled('p')(({theme})=>({
    textAlign: 'left',
     margin: '0 0 20px',
     padding: '0 0 0 20px',
     fontSize: '1em',
      color: theme.palette.flashPrimaryBGColor.main,
      [theme.breakpoints.down('sm')]: {
        padding: '10px 0 0 10px',
     }
  }))


export const ThreeColumnStyledWhite = styled(Grid)(()=>({
    display: 'flex',
    justifyContent: 'space-around',
    boxShadow: 'none !important',
    //background: theme.palette.appBarColour.light,
    background: 'rgb(1 133 155)',
    borderRadius: '20px',
    padding: '0px',
    flexDirection: 'column',
   
}))

export const ThreeColumnStyledBlue = styled(Grid)(({theme})=>({
    display: 'flex',
    justifyContent: 'space-around',
    boxShadow: 'none !important',
    //background: theme.palette.appBarColour.light,
    background: theme.palette.appBarColour.main,
    borderRadius: '20px',
    padding: '0px',
    flexDirection: 'column',
   
}))



export const TitleDivStyledWhite = styled('div')(({theme})=>({
    color: theme.palette.appBarColour.light,
    textAlign: 'left',
    padding: '20px 20px 5px',
    display: 'flex',
    marginBottom: '10px',
    fontSize: '1.3em',
    textTransform: 'capitalize',
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
   justifyContent: 'flex-end'
}))

export const ParaOneStyledWhite = styled('p')(({theme})=>({
        fontSize: '1em',
        margin: '0',
        textAlign: 'left',
        padding: '0px 20px 15px',
        color: theme.palette.flashPrimaryBGColor.main,
        //height: '120px',
       // overflow: 'scroll',
       textTransform: 'capitalize',
}))

export const TypographyStyledWhite = styled(Typography)(()=>({
    fontSize: '0.75em',
    margin: '0',
    textAlign: 'left',
    padding: '0px 20px 5px',
    //color: theme.palette.appBarColour.light,
    color: '#f3f3f3',
    //height: '120px',
   // overflow: 'scroll'
}))

export const ButtonOneStyledWhite = styled('button')(({theme})=>({
    fontSize: '0.88em',
    margin: '10px 20px 30px',
    textAlign: 'center',
    border: '0',
    color: theme.palette.appBarColour.main,
    padding: '10px 20px',
    background: theme.palette.appBarColour.light,
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
