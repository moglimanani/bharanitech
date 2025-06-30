import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Typography, CircularProgress, Paper, Button } from '@mui/material';
import { styled } from '@mui/system';
import { useAllTrainings } from '../contexts/allTrainingsContext';
import { TrainingType } from '../types/trainings';
import { AboutUsTitleStyled } from './styles';


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
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.appBarColour.main,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    padding: '5px 10px 5px',
}));

const StyledDiv = styled('div')(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: '14px',
  padding: '5px 10px 5px'
  
}));

const StyledDivPage = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
}));

export const LearnButtonStyled = styled(Button)(({ theme }) => ({
  fontSize: ".88rem",
  color: theme.palette.appBarColour.light,
  background: theme.palette.appBarColour.main,
  borderRadius: "20px",
  margin: "10px 0 20px",
  padding: "10px 20px",
}));


const TrainingsViewPage: React.FC = () => {
  const [training, setTraining] = useState<TrainingType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { allTrainings } = useAllTrainings()
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
  const isLocation = training && training.city && training.state && training.country
  return (
    <div style={{margin: '0 30px'}}>
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
          <StyledTypography variant="h5" gutterBottom>
            {training.title}
          </StyledTypography>
          <StyledDiv>
            <span>Description:</span>
            <span>{training.description}</span>
          </StyledDiv>
          <StyledDiv>
            <span>Start Date:</span>
            <span>{training.startdate}</span>
          </StyledDiv>
          <StyledDiv>
            <span>Instructor:</span>
            <span>Ezhumalai</span>
          </StyledDiv>
          <StyledDiv>
            <span>Price:</span>
            <span>{training.total_price}</span>
          </StyledDiv>
          <StyledDiv>
          <span>Location:</span>
          {
            +training.classification !== 0 && (
              <span>Online</span>
            )
          }
          {
            +training.classification === 0 && isLocation && (
              <span>Location:  {training.city}, {training.state}, {training.country}</span>
            )
          }
          </StyledDiv>
          <StyledDivPage>
                 <LearnButtonStyled onClick={() => navigate(`${import.meta.env.VITE_ROUTE_TRAININGS_URL}`)}>Back to Training page</LearnButtonStyled>
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
