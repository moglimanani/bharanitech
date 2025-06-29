import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Typography, CircularProgress, Paper, Button } from '@mui/material';
import { styled } from '@mui/system';
import { useAllTrainings } from '../contexts/allTrainingsContext';
import { TrainingType } from '../types/trainings';


// Styled Components
const Container = styled(Box)(({ theme }) => ({
  maxWidth: 600,
  margin: '50px auto',
  padding: theme.spacing(4),
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: '#f9f9f9',
  borderRadius: theme.shape.borderRadius,
}));

const Label = styled(Typography)({
  fontWeight: 600,
  marginBottom: 4,
});

const Value = styled(Typography)({
  marginBottom: 16,
});

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
    <Container>
      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight={200}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Typography color="error">{error}</Typography>
      ) : training ? (
        <StyledPaper elevation={3}>
          <Typography variant="h5" gutterBottom>
            {training.title}
          </Typography>
          <Label>Description:</Label>
          <Value>{training.description}</Value>
          <Label>Start Date:</Label>
          <Value>{training.startdate}</Value>
          <Label>Instructor:</Label>
          <Value>Ezhumalai</Value>
          <Label>Price:</Label>
          <Value>{training.total_price}</Value>
          <Label>Location:</Label>
          {
            +training.classification !== 0 && (
              <Value>Online</Value>
            )
          }
          {
            +training.classification === 0 && isLocation && (
              <Value>Location:  {training.city}, {training.state}, {training.country}</Value>
            )
          }

          <Button onClick={() => navigate(`${import.meta.env.VITE_ROUTE_TRAININGS_URL}`)}>Back to Training page</Button>
        </StyledPaper>
      ) : (
        <Typography>No training found.</Typography>
      )}
    </Container>
  );
};

export default TrainingsViewPage;
