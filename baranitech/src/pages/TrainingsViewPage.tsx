import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Typography, CircularProgress, Paper, Button, Stack, Chip } from '@mui/material';
import { styled } from '@mui/system';
import { useAllTrainings } from '../contexts/allTrainingsContext';
import { TrainingType } from '../types/trainings';
import { AboutUsTitleStyled, BackButtonStyled, DescriptionStyled } from './styles';
import { useDialog } from '../contexts/dialogContext';
import { TrainingRegisterForm } from '../components/TrainingRegisterForm';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import EditNoteIcon from '@mui/icons-material/EditNote';
import SchoolIcon from '@mui/icons-material/School';
import theme from '../theme';
import { formatCurrency } from '../helper';

interface extentedInterfaceForCategory {
  category?: number;
}

// Styled Components
const Container = styled(Box)(({ theme }) => ({
  maxWidth: '1280px',
  margin: '20px 0 30px',
  textAlign: 'left',
  //padding: theme.spacing(2),
}));
const ContainerBox = styled(Box)(({ theme }) => ({
  margin: '0',
  [theme.breakpoints.up('sm')]: {
    margin: '0 30px',
  }
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: '16px 0px',
  backgroundColor: '#f9f9f9',
  borderRadius: '12px',
  position: 'relative',
  textAlign: 'center'
}));

const StyledTypographyCategory = styled(Typography)<extentedInterfaceForCategory>(({ theme, category }) => ({
  color: theme.palette.common.white,
  fontWeight: 'bold',
  textTransform: 'capitalize',
  padding: '15px 10px',
  marginTop: '10px',
  background:  category === 0 ? theme.palette.green.main : theme.palette.orange.main,
  fontSize: '1.2em',
}));
const StyledTypographyTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.appBarColour.main,
  fontWeight: 'bold',
  padding: '5px 10px 5px',
  margin: '10px',
  fontSize: '2.2em',
  textTransform: 'uppercase'
}));

const StyledDiv = styled('div')(({ theme }) => ({
  color: theme.palette.secondary.main,
  // fontSize: '14px',
  padding: '5px 10px 5px',
  textTransform: 'capitalize',

}));

const StyledDivPage = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0px 16px'
}));

export const LearnButtonStyled = styled(Button)(({ theme }) => ({
  fontSize: ".88rem",
  color: theme.palette.appBarColour.light,
  background: theme.palette.appBarColour.main,
  //border: '1px solid #484848',
  borderRadius: "20px",
  margin: "10px 0 20px",
  padding: "10px 20px",
  transition: 'all 0.2s',
  '&:hover': {
    //border: '1px solid #484848',
    color: theme.palette.appBarColour.light,
    backgroundImage: 'linear-gradient(to right, #243949 0%, #517fa4 100%)',
  }
}));

const StyledSpanPage = styled('span')(({ theme }) => ({
  marginRight: '10px',
  borderRadius: '12px',
  color: '#ed6c02',
  fontSize: '2.5em'
}));

const StyledSpanRetPage = styled('span')(({ theme }) => ({
  marginRight: '5px',
  borderRadius: '12px',
  textDecoration: 'line-through',
  fontSize: '1.5em'
}));


const TrainingsViewPage: React.FC = () => {
  const [training, setTraining] = useState<TrainingType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { allTrainings } = useAllTrainings()
  const { confirm } = useDialog()
  const navigate = useNavigate()
  const { tid } = useParams();

  useEffect(() => {
    if (!tid) return;
    const found = allTrainings.find((training: TrainingType) => +training.id === +tid);

    if (found) {
      setTraining(found);
      setLoading(false);
    } else {
      setError('Training not found');
    }

  }, [tid]);

  const isLocation = training && training.city && training.state && training.country;
  return (
    <ContainerBox>
      <AboutUsTitleStyled>Training</AboutUsTitleStyled>
       <Container>

        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" minHeight={200}>
            <CircularProgress />
          </Box>
        ) : error ? (
          <Typography color="error">{error}</Typography>
        ) : training ? (
          <StyledPaper elevation={3}>
            <Stack spacing={1} sx={{ alignItems: 'flex-end', paddingRight: '16px' }}>
              <Stack direction="row" spacing={1}>

                {+training.classification === 0 && <Chip label="In-Person" color="success" variant="outlined" />}
                {+training.classification === 1 && <Chip label="Online" color="warning" variant="outlined" />}
              </Stack>

            </Stack>
            <SchoolIcon sx={{ color: theme.palette.appBarColour.main, fontSize: '4em' }} />
            <div style={{ position: 'absolute', top: '21px', color: '#fff', fontSize: '.90em', background: '#484848', padding: '0 10px', borderRadius: '12px', left: '16px' }}>
              {training.startdate}
            </div>
            <StyledTypographyTitle>
              {training.title}
            </StyledTypographyTitle>
            <StyledTypographyCategory category={+training.classification}>
              {training.category.title.replace(/-/g, ' ')}
            </StyledTypographyCategory>
            {/* <StyledDiv>
              <span>{training.description}</span>
            </StyledDiv> */}
            <DescriptionStyled>
              <div
                dangerouslySetInnerHTML={{ __html: training.table_of_contents }}
              />
            </DescriptionStyled>

            <StyledDiv>
              <span>Total Hours:</span>
              <span> {+training.total_hours}12 Hrs</span>
            </StyledDiv>
            <StyledDiv>
              {/* <StyledSpanRetPage>₹{training.total_price * 2}/-</StyledSpanRetPage><br /> */}
              <StyledSpanPage>{formatCurrency(training.total_price)}/-</StyledSpanPage> <br />
              {/* <span style={{ fontSize: '12px' }}>(Discount 50% applied).</span> */}
            </StyledDiv>

            {
              +training.classification === 0 && isLocation && (
                <StyledDiv><span>Location:  {training.city}, {training.state}, {training.country}</span></StyledDiv>
              )
            }
            <StyledDiv>
              <span>Instructor: Ezhumalai</span>
            </StyledDiv>
            <hr />
            <StyledDivPage>
              {/* <LearnButtonStyled onClick={() => navigate(`${import.meta.env.VITE_ROUTE_TRAININGS_URL}`)}>{`<<`} Back to Training page</LearnButtonStyled> */}
              <LearnButtonStyled
                startIcon={<EditNoteIcon />}
                onClick={() => confirm({
                  bgvariant: 'light', title: `Training Registration: ${training.title}`,
                  content: <TrainingRegisterForm id={training.id} />,
                  onConfirm: () => { },
                  onCancel: () => { },
                  hideButtons: true
                })}>Register</LearnButtonStyled>

              <BackButtonStyled aria-label="back" onClick={() =>
                navigate(`${import.meta.env.VITE_ROUTE_TRAININGS_URL}`)}>
                <ReplyAllIcon />
              </BackButtonStyled>
            </StyledDivPage>

          </StyledPaper>
        ) : (
          <Typography>No training found.</Typography>
        )}
      </Container> 
    </ContainerBox>
  );
};

export default TrainingsViewPage;
