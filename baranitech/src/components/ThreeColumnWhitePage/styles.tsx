import {  Box, Grid, styled, } from "@mui/material";

export const BoxWhiteStyled = styled(Box)(({theme})=>({
  background: '#fff',
   
}))

export const H2BoxStyled = styled('h2')(({theme})=>({
    textAlign: 'left',
     margin: '0',
     padding: '10px 0 0 20px',
     color: '#127B93',
  }))

  export const PareBoxStyled = styled('p')(({theme})=>({
    textAlign: 'left',
     margin: '0',
     padding: '0 0 0 20px',
     fontSize: '1em',
     color: '#4d4d4d'
  }))


export const ThreeColumnStyledWhite = styled(Grid)(({theme})=>({
    display: 'flex',
    justifyContent: 'space-around',
    boxShadow: 'none !important',
    background: '#ffffff',
    borderRadius: '20px',
    padding: '0px',
    flexDirection: 'column',
   
}))


export const TitleDivStyledWhite = styled('div')(({theme})=>({
    color: '#127B93',
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
        color: '#4d4d4d'
}))

export const ButtonOneStyledWhite = styled('button')(({theme})=>({
    fontSize: '0.88em',
    margin: '10px 20px 30px',
    textAlign: 'center',
    width: '150px',
    border: '0',
    background: '#127B93',
    padding: '10px 20px',
    color: '#ffffff',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
}))

