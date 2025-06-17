import { Container, ContainerProps, Typography , Button} from "@mui/material";
import { styled } from '@mui/material/styles';
// import Container, { ContainerProps } from '@mui/material/Container';

export const StyledContainer = styled(Container, {
    shouldForwardProp: (prop) => !['variant', 'sx'].includes(prop as string)
})<ContainerProps>(({ theme }) => ({
    marginTop: theme.spacing(1),
    padding: theme.spacing(1),
   // display: 'flex',
    //flexDirection: 'row',
  //alignItems: 'center',
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: theme.spacing(1),
    // boxShadow: theme.shadows[3],
    backgroundColor: theme.palette.appBarColour.light,
}))

export const StyledForm = styled('form')(({ theme }) => ({
    width: '100%',
 // marginTop: theme.spacing(2),
 marginLeft: '20px',
 [theme.breakpoints.down("sm")]: {
    marginLeft: '0px'
  },
}));

export const StyledCont = styled('div')(({ theme }) => ({
    display: 'flex',
    [theme.breakpoints.down("sm")]: {
        flexDirection: 'column',
      },
}));

export const TitleResStyled = styled( Typography)(({theme})=>({
    textAlign: 'left',
    fontSize: '1.3em',
    paddingTop: '10px',
    color: theme.palette.appBarColour.main,
    position: 'relative',
    fontWeight: 'bold',
      
}))

export const LearnButtonResStyled = styled(Button)(({theme})=>({
    fontSize: '.88rem',
    color: theme.palette.appBarColour.light,
    background: theme.palette.appBarColour.main,
    borderRadius: '20px',
    margin: '10px 0 20px',
    padding: '10px 20px',  
    maxWidth: '200px',
      
   }))
  
