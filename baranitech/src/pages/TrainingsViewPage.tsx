import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Typography, CircularProgress, Paper, Button, Stack, Chip } from '@mui/material';
import { styled } from '@mui/system';
import { useAllTrainings } from '../contexts/allTrainingsContext';
import { TrainingType } from '../types/trainings';
import { AboutUsTitleStyled, BackButtonStyled } from './styles';
import { useDialog } from '../contexts/dialogContext';
import { TrainingRegisterForm } from '../components/TrainingRegisterForm';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import EditNoteIcon from '@mui/icons-material/EditNote';

// Styled Components
const Container = styled(Box)(({ theme }) => ({
  maxWidth: '1280px',
  margin: '20px 0 30px',
  textAlign: 'left',
  //padding: theme.spacing(2),
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: '#f9f9f9',
  borderRadius: '12px',
  position: 'relative',
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.appBarColour.main,
  fontWeight: 'bold',
  textTransform: 'capitalize',
  padding: '5px 10px 5px',
  marginTop: '10px',
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
}));

export const LearnButtonStyled = styled(Button)(({ theme }) => ({
  fontSize: ".88rem",
  color: theme.palette.appBarColour.light,
  background: theme.palette.appBarColour.main,
  border: '1px solid #484848',
  borderRadius: "20px",
  margin: "10px 0 20px",
  padding: "10px 20px",
  transition: 'all 0.2s',
  '&:hover': {
    border: '1px solid #484848',
    color: theme.palette.appBarColour.main,
    backgroundImage: 'linear-gradient(to top, #a8edea 0%,rgb(216, 214, 221) 100%)'
  }
}));

const StyledSpanPage = styled('span')(({ theme }) => ({
  marginRight: '10px',
  borderRadius: '12px',
  color: 'green',
  fontSize: '1.5em'
}));

const StyledSpanRetPage = styled('span')(({ theme }) => ({
  marginRight: '5px',
  borderRadius: '12px',
  color: 'red',
  textDecoration: 'line-through'
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
    <div style={{ margin: '0 30px' }}>
      <AboutUsTitleStyled>Training View</AboutUsTitleStyled>
      <Container>

        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" minHeight={200}>
            <CircularProgress />
          </Box>
        ) : error ? (
          <Typography color="error">{error}</Typography>
        ) : training ? (
          <StyledPaper elevation={3}>
            <Stack spacing={1} sx={{ alignItems: 'flex-end' }}>
              <Stack direction="row" spacing={1}>

                {+training.classification === 0 && <Chip label="In-Person" color="success" variant="outlined" />}
                {+training.classification === 1 && <Chip label="Online" color="warning" variant="outlined" />}
              </Stack>

            </Stack>
            <div style={{position: 'absolute', top: '21px', color: '#fff', fontSize: '.90em', background: '#484848', padding: '0 10px', borderRadius: '12px', }}>
              {training.startdate}
              </div>
            <StyledTypography variant="h5">
              {training.title}
            </StyledTypography>
            <StyledTypography variant="h6" gutterBottom style={{marginTop: '-5px'}}>
              {training.category.title}
            </StyledTypography>
            <StyledDiv>
              <span>{training.description}</span>
            </StyledDiv>
            {/* <StyledDiv>
              <span>Start Date:</span>
              <span>{training.startdate}</span>
            </StyledDiv> */}
           
            <StyledDiv>
              <span>Total Hours:</span>
              <span> {+training.total_hours} Hrs</span>
            </StyledDiv>
            <StyledDiv>
              {/* <span>Price:</span> */}
              
              Course price: <StyledSpanRetPage>₹{training.total_price * 2}/-</StyledSpanRetPage>
              <StyledSpanPage>₹{training.total_price}/-</StyledSpanPage> <span style={{fontSize: '13px'}}>(Discount 50% applied).</span>
            </StyledDiv>
           
              {
                +training.classification === 0 && isLocation && (
                  <StyledDiv><span>Location:  {training.city}, {training.state}, {training.country}</span></StyledDiv>
                )
              }
            <StyledDiv>
              <span>Instructor: Ezhumalai</span>
            </StyledDiv>
            <StyledDivPage>
              {/* <LearnButtonStyled onClick={() => navigate(`${import.meta.env.VITE_ROUTE_TRAININGS_URL}`)}>{`<<`} Back to Training page</LearnButtonStyled> */}
              <LearnButtonStyled
              startIcon={<EditNoteIcon />}
                onClick={() => confirm({
                  bgvariant: 'light', title: `Training Registration: ${training.title}`,
                  content: <TrainingRegisterForm id={training.id} />,
                  onConfirm: ()=>{},
                  onCancel: () => { },
                  hideButtons: true
                })}>Register training</LearnButtonStyled>

                 <BackButtonStyled color="primary" aria-label="back"  onClick={() =>
                  navigate(`${import.meta.env.VITE_ROUTE_TRAININGS_URL}`)}>
                <ReplyAllIcon />
              </BackButtonStyled>
            </StyledDivPage>

          </StyledPaper>
        ) : (
          <Typography>No training found.</Typography>
        )}
      </Container>
    </div>
  );
};

export default TrainingsViewPage;
