import { Container, ContainerProps, Button, Typography, ButtonProps } from "@mui/material";
import { styled } from '@mui/material/styles';
// import Container, { ContainerProps } from '@mui/material/Container';

export const StyledContainer = styled(Container, {
    shouldForwardProp: (prop) => !['variant', 'sx'].includes(prop as string)
})<ContainerProps>(({ theme }) => ({
    // marginTop: theme.spacing(1),
    padding: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: theme.spacing(4),
    // boxShadow: theme.shadows[3],
    backgroundColor: theme.palette.background.paper,
}))

export const StyledForm = styled('form')(() => ({
    width: '100%',
   // marginTop: theme.spacing(2),
}));


export const ButtonStyled = styled(Button)(({theme})=>({
    fontSize: '0.88em',
    margin: '0 auto',
    textAlign: 'center',
    border: '0',
    background: theme.palette.appBarColour.main,
    padding: '10px 30px',
    color: theme.palette.appBarColour.light,
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
}))

export const ButtonPhotoStyled = styled(Button)<ButtonProps>(({theme})=>({
    fontSize: '0.88em',
    textAlign: 'center',
    margin: '0 auto',
    maxWidth: '200px',
    border: '0',
    background: theme.palette.appBarColour.main,
    color: theme.palette.appBarColour.light,
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
}))

export const TitleGalleryStyled = styled( Typography)(({theme})=>({
  textAlign: 'center',
  fontSize: '1.3em',
  paddingTop: '10px',
  color: theme.palette.appBarColour.main,
  position: 'relative',
  fontWeight: 'bold',
     
 }))
