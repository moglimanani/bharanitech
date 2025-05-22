import { Container, ContainerProps, Typography , Button} from "@mui/material";
import { styled } from '@mui/material/styles';
// import Container, { ContainerProps } from '@mui/material/Container';

export const StyledContainer = styled(Container, {
    shouldForwardProp: (prop) => !['variant', 'sx'].includes(prop as string)
})<ContainerProps>(({ theme }) => ({
    marginTop: theme.spacing(1),
    padding: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: theme.spacing(1),
    // boxShadow: theme.shadows[3],
    backgroundColor: theme.palette.background.paper,
}))

export const StyledForm = styled('form')(({ theme }) => ({
    width: '100%',
    marginTop: theme.spacing(2),
}));

export const TitleResStyled = styled( Typography)(({theme})=>({
    textAlign: 'left',
    fontSize: '1.3em',
    paddingTop: '10px',
    color: '#127B93',
    position: 'relative',
      
}))

export const LearnButtonResStyled = styled(Button)(({theme})=>({
    fontSize: '.88rem',
    color: '#ffffff',
    background: '#127B93',
    borderRadius: '20px',
    margin: '10px 0 20px',
    padding: '10px 20px',  
      
   }))
  
