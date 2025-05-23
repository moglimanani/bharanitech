
import { Grid, styled, CardMedia } from "@mui/material";




export const ThreeColumnStyled = styled(Grid)(({theme})=>({
    //width: "32%",
    display: 'flex',
    justifyContent: 'space-around',
    boxShadow: 'none !important',
    background: '#ffffff',
    borderRadius: '20px',
    padding: '0px',
    margin: '10px 0 30px',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
       // background: 'Yellow',
    }
}))


export const TitleDivStyled = styled('div')(({theme})=>({
    width: '94%',
    background: '#127B93',
    margin: '20px 0px',
    textAlign: 'left',
    padding: '10px 20px',
    color: '#ffffff',
    display: 'flex',
    'svg': {
        marginRight: '10px'
    }
}))

export const ImageDivStyled = styled('div')(({theme})=>({
    maxWidth: '400px',
    padding: '0 20px',
    marginBottom: '20px',
    '& > img': {
        width: '100%',
    }
}))
export const ButtonWrapperStyled = styled('div')(({theme})=>({
   display: 'flex',
   justifyContent: 'flex-end'
}))

export const ParaOneStyled = styled('p')(({theme})=>({
        fontSize: '0.88em',
        margin: '0',
        textAlign: 'left',
        padding: '0px 20px 15px'
}))

export const ButtonOneStyled = styled('button')(({theme})=>({
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

export const CardMediaStyled = styled(CardMedia)(({theme})=>({
    margin: '0 20px 20px',
    width: '89%',
    height: '100%',
     [theme.breakpoints.down('sm')]: {
        // background: 'Yellow',
         height: '220px'
     }
}))


