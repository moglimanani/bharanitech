import React from 'react';
import {
  CardContent,
  Grid,
  Container,
  Divider,
  Stack,
  Chip,
  Button,
  styled,
  Typography,
} from '@mui/material';
import { AdminTitleStyled, ParaStyled, StackStyled, StyledWrapperDivCard, TitleStyled } from './styles';
import { useAllTrainings } from '../contexts/allTrainingsContext';
import { TrainingType } from '../types/trainings';
import { useNavigate } from 'react-router';
import { format } from 'date-fns';


export const LearnButtonStyled = styled(Button)(({ theme }) => ({
  fontSize: ".88rem",
  color: theme.palette.appBarColour.light,
  background: theme.palette.appBarColour.main,
  border: '1px solid #484848',
  borderRadius: "20px",
  margin: "30px 0 0px",
  padding: "10px 20px",
  transition: 'all 0.2s',
  width: '80%',
  cursor: 'pointer',
  '&:hover': {
    border: '1px solid #484848',
    color: theme.palette.appBarColour.main,
    backgroundImage: 'linear-gradient(to top, #a8edea 0%,rgb(216, 214, 221) 100%)'
  }
}));


const TrainingsListPage: React.FC = () => {
  const { allTrainings } = useAllTrainings()
  const navigate = useNavigate()

  // if (!allTrainings || allTrainings.length === 0) {
  //   return <div>Sorry, No trainings found.</div>
  // }

  return (
    <Container sx={{ mt: 1, p: { xs: 0, md: '8px 24px' } }}>
      <AdminTitleStyled variant="h4" gutterBottom>
        Trainings
      </AdminTitleStyled>

      {
        !allTrainings || allTrainings.length === 0 && (
          <Typography margin={3}>Sorry, No trainings available.</Typography>
        )
      }
      {
        !(!allTrainings || allTrainings.length === 0) && (
          <Grid container spacing={3} style={{ marginBottom: '30px' }}>
            {allTrainings.map((training: TrainingType) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={training.id}>
                <StyledWrapperDivCard>
                  <CardContent>
                    <div style={{ display: 'flex', justifyContent: 'flex-start', fontSize: '0.8rem' }}>
                      {format(new Date(training.startdate), "dd MMM yyyy")}
                    </div>

                    <TitleStyled variant="h6" gutterBottom onClick={() => navigate(`${import.meta.env.VITE_ROUTE_TRAININGS_URL}/${training.id}`)} sx={{ cursor: 'pointer' }}>
                      {training.title}
                      <StackStyled spacing={1} sx={{ alignItems: 'center' }}>
                        <Stack direction="row" spacing={1}>

                          {+training.classification === 0 && <Chip label="In-Person" color="success" variant="outlined" />}
                          {+training.classification === 1 && <Chip label="Online" color="warning" variant="outlined" />}
                        </Stack>

                      </StackStyled>
                    </TitleStyled>
                    {/* <ParaStyled variant="body2" color="textSecondary" gutterBottom>
                  {training.description}
                </ParaStyled> */}
                    <Divider sx={{ my: 1 }} />
                    <ParaStyled variant="body2">
                      <strong>Trainer:</strong> Ezhumalai
                    </ParaStyled>
                    <ParaStyled variant="body2">
                      <strong>Course duration:</strong> {+training.total_hours} Hours
                    </ParaStyled>
                    <ParaStyled variant="body2">
                      <strong>Price:</strong> ${+training.total_price}/-
                    </ParaStyled>
                    {/* <ParaStyled variant="body2">
                  <strong>Date:</strong> {training.startdate}
                </ParaStyled> */}
                    <LearnButtonStyled color="primary" variant="contained" onClick={() => navigate(`${import.meta.env.VITE_ROUTE_TRAININGS_URL}/${training.id}`)}>More Details</LearnButtonStyled>
                  </CardContent>
                </StyledWrapperDivCard>
              </Grid>
            ))}
          </Grid>)
      }
    </Container>
  );
};

export default TrainingsListPage;
