import React from 'react';
import {
  CardContent,
  Grid,
  Container,
  Divider,
  Stack,
  Chip,
} from '@mui/material';
import { AdminTitleStyled, ParaStyled, StackStyled, StyledWrapperDivCard, TitleStyled } from './styles';
import { useAllTrainings } from '../contexts/allTrainingsContext';
import { TrainingType } from '../types/trainings';
import { useNavigate } from 'react-router';




const TrainingsListPage: React.FC = () => {
  const {allTrainings} = useAllTrainings()
  const navigate = useNavigate()

  if(!allTrainings ||  allTrainings.length === 0){
    return <div>Sorry, No trainings found.</div>
  }

  return (
    <Container  sx={{ mt: 1 }}>
      <AdminTitleStyled variant="h4" gutterBottom>
        Upcoming Trainings
      </AdminTitleStyled>

      <Grid container spacing={3} style={{marginBottom: '30px'}}>
        {allTrainings.map((training: TrainingType) => (
          <Grid size={{xs:12, sm:6, md:4}} key={training.id}>
            <StyledWrapperDivCard>
              <CardContent>
                <TitleStyled variant="h6" gutterBottom onClick={() => navigate(`${import.meta.env.VITE_ROUTE_TRAININGS_URL}/${training.id}`)} sx={{cursor: 'pointer' }}>
                  {training.title}
                  <StackStyled spacing={1} sx={{ alignItems: 'center' }}>
                    <Stack direction="row" spacing={1}>
                     
                      <Chip label="success" color="success" />
                    </Stack>
                   
                  </StackStyled>
                </TitleStyled>
                <ParaStyled variant="body2" color="textSecondary" gutterBottom>
                  {training.description}
                </ParaStyled>
                <Divider sx={{ my: 1 }} />
                <ParaStyled variant="body2">
                  <strong>Trainer:</strong> Ezhumalai
                </ParaStyled>
                {/* <ParaStyled variant="body2">
                  <strong>Sta:</strong> {training.duration_minutes} mins
                </ParaStyled> */}
                <ParaStyled variant="body2">
                  <strong>Date:</strong> {training.startdate}
                </ParaStyled>
              </CardContent>
            </StyledWrapperDivCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TrainingsListPage;
