import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Container,
  Divider,
  Stack,
  Chip,
} from '@mui/material';
import { LearningResourcesStyled, ParaStyled, StackStyled, StyledWrapperDivCard, StyledWrapperStack, TitleStyled } from './styles';

// Define a type for training items
interface Training {
  id: number;
  title: string;
  description: string;
  trainer_name: string;
  duration_minutes: number;
  date: string;
}

// Mock training data
const trainings: Training[] = [
  {
    id: 1,
    title: 'React Basics',
    description: 'Learn the fundamentals of React including JSX and state management.',
    trainer_name: 'John Doe',
    duration_minutes: 90,
    date: '2025-05-10',
  },
  {
    id: 2,
    title: 'Advanced TypeScript',
    description: 'Deep dive into TypeScript with real-world patterns.',
    trainer_name: 'Jane Smith',
    duration_minutes: 120,
    date: '2025-05-12',
  },
  {
    id: 3,
    title: 'UI Design Principles',
    description: 'Understand design fundamentals for better UI/UX.',
    trainer_name: 'Alice Johnson',
    duration_minutes: 75,
    date: '2025-05-15',
  },
];

const TrainingsListPage: React.FC = () => {
  return (
    <Container  sx={{ mt: 5 }}>
      <LearningResourcesStyled variant="h4" gutterBottom>
        Upcoming Trainings
      </LearningResourcesStyled>

      <Grid container spacing={3} style={{marginBottom: '30px'}}>
        {trainings.map((training) => (
          <Grid size={{xs:12, sm:6, md:4}} key={training.id}>
            <StyledWrapperDivCard>
              <CardContent>
                <TitleStyled variant="h6" gutterBottom>
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
                  <strong>Trainer:</strong> {training.trainer_name}
                </ParaStyled>
                <ParaStyled variant="body2">
                  <strong>Duration:</strong> {training.duration_minutes} mins
                </ParaStyled>
                <ParaStyled variant="body2">
                  <strong>Date:</strong> {training.date}
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
