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
  Box,
} from '@mui/material';
import { AdminTitleStyled, DateStyled, ParaStyled, StackStyled, StyledWrapperDivCard, TitleStyled, TypeStyled } from './styles';
import { useAllTrainings } from '../contexts/allTrainingsContext';
import { TrainingType } from '../types/trainings';
import { useNavigate } from 'react-router';
import { format } from 'date-fns';
import PaginatedList from '../components/PaginatedList';


export const LearnButtonStyled = styled(Button)(({ theme }) => ({
  fontSize: ".88rem",
  color: theme.palette.appBarColour.light,
  background: theme.palette.appBarColour.main,
 // border: '1px solid #484848',
  borderRadius: "20px",
  margin: "30px 0 0px",
  padding: "10px 0px",
  transition: 'all 0.2s',
  width: '100%',
  cursor: 'pointer',
  '&:hover': {
   // border: '1px solid #484848',
    color: theme.palette.appBarColour.light,
    backgroundImage: 'linear-gradient(to right, #243949 0%, #517fa4 100%)',
  }
}));


const TrainingsListPage: React.FC = () => {
  const { allTrainings } = useAllTrainings()
  const navigate = useNavigate()

  const filteredTrainings = allTrainings.map((training: TrainingType) => (
    // <Grid size={{ xs: 12, sm: 6, md: 4 }} key={training.id}>
    <StyledWrapperDivCard>
      <CardContent>
        <Box sx={{ height: 20 }}>

          <DateStyled >
            {format(new Date(training.startdate), "dd MMM yyyy")}
          </DateStyled>
        </Box>
        <StackStyled spacing={1} sx={{ alignItems: 'center', top: '15px', right: '12px' }}>
          <Stack direction="row" spacing={1}>

            {+training.classification === 0 && <Chip label="In-Person" color="success" variant="outlined" />}
            {+training.classification === 1 && <Chip label="Online" color="warning" variant="outlined" />}
          </Stack>

        </StackStyled>
        <TitleStyled variant="h6" gutterBottom onClick={() => navigate(`${import.meta.env.VITE_ROUTE_TRAININGS_URL}/${training.id}`)} sx={{ cursor: 'pointer', marginTop: '15px' }}>
          {training.title}
        </TitleStyled>
        <TypeStyled sx={{ mb: 1 }}>
          {training.category.title.replace(/-/g, ' ')}
        </TypeStyled>
        {/* <ParaStyled variant="body2" color="textSecondary" gutterBottom>
      {training.description}
    </ParaStyled> */}
        {/* <Divider sx={{ my: 1 }} /> */}
        <ParaStyled variant="body2">
          <strong>Trainer:</strong> <span>Ezhumalai</span>
        </ParaStyled>
        <ParaStyled variant="body2">
          <strong>Course duration:</strong> <span>{+training.total_hours} Hours</span>
        </ParaStyled>
        <ParaStyled variant="body2">
          <strong>Price:</strong> <span>${+training.total_price}/-</span> 
        </ParaStyled>
        {/* <ParaStyled variant="body2">
      <strong>Date:</strong> {training.startdate}
    </ParaStyled> */}
        <LearnButtonStyled color="primary" variant="contained" sx={{ mt: 2 }} onClick={() => navigate(`${import.meta.env.VITE_ROUTE_TRAININGS_URL}/${training.id}`)}>More Details</LearnButtonStyled>
      </CardContent>
    </StyledWrapperDivCard>
    // </Grid>
  ))

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
          <PaginatedList items={filteredTrainings}
            itemsPerPage={9}
            renderItem={(item, index) => (
              <Box key={index}>
                {item}
              </Box>

            )}
          />
        )
      }
    </Container>
  );
};

export default TrainingsListPage;
